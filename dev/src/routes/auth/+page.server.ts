import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
  login: async ({ request, locals }) => {
    const form = await request.formData();
    const data = {
      email: form.get("email") as string,
      password: form.get("password") as string,
    };

    try {
      await locals.pb
        .collection("users")
        .authWithPassword(data.email, data.password);
    } catch (error) {
      console.log(error);
      return fail(500, { message: "Login failed" });
    }
    throw redirect(303, "/");
  },
} satisfies Actions;
