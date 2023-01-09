import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
    login: async ({ request, locals }) => {
        try {
            const form = await request.formData();
            const email = form.get("email");
            const password = form.get("password");

            if (typeof email !== "string" || typeof password !== "string") {
                return fail(400, { message: "Invalid form data" });
            }
            await locals.pb.collection("users").authWithPassword(email, password);
        } catch (err) {
            console.error(err);
            return fail(500, { message: "Invalid credentials" });
        }
        throw redirect(303, "/");
    },
    register: async ({ request, locals }) => {
        try {
            const form = await request.formData();
            const email = form.get("email");
            const password = form.get("password");

            if (typeof email !== "string" || typeof password !== "string") {
                return fail(400, { message: "Invalid form data" });
            }

            const user = {
                email,
                password,
                passwordConfirm: password,
            };
            await locals.pb.collection("users").create(user);
        } catch (err) {
            console.error(err);
            return fail(500, { message: "Failed to register user" });
        }
    }
} satisfies Actions;
