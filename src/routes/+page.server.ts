import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types"

export const load = (({ locals }) => {
    return {
        user: locals.user,
    }
}) satisfies PageServerLoad;

export const actions = {
    logout: async ({ locals }) => {
        locals.pb.authStore.clear();
        throw redirect(303, "/auth");
    }
} satisfies Actions;

