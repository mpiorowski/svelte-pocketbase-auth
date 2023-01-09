// src/hooks.server.js
import { redirect, type Handle } from "@sveltejs/kit";
import PocketBase from "pocketbase";

export const handle = (async ({ event, resolve }) => {
    console.info("Checking auth");
    event.locals.pb = new PocketBase("http://127.0.0.1:8090");

    // load the store data from the request cookie string
    event.locals.pb.authStore.loadFromCookie(
        event.request.headers.get("cookie") || ""
    );

    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        if (event.locals.pb.authStore.isValid) {
            await event.locals.pb.collection("users").authRefresh();
            event.locals.user = {
                email: event.locals.pb.authStore.model?.email,
                id: event.locals.pb.authStore.model?.id || "",
            };
        } else {
            throw new Error();
        }
    } catch (_) {
        // clear the auth store on failed refresh
        event.locals.pb.authStore.clear();
        event.locals.user = null;
    }

    // page protection
    if (!event.locals.user?.id && !event.url.pathname.startsWith("/auth")) {
        throw redirect(303, "/auth");
    } else if (event.locals.user && event.url.pathname.startsWith("/auth")) {
        throw redirect(303, "/");
    }

    const response = await resolve(event);

    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.set(
        "set-cookie",
        event.locals.pb.authStore.exportToCookie()
    );

    return response;
}) satisfies Handle;
