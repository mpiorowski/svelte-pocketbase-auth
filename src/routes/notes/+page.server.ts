import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
    const notes = await locals.pb.collection("notes").getList<{ title: string, content: string }>();

    return {
        notes: notes.items.map((note) => ({
            title: note.title,
            content: note.content,
        })),
    };

}) satisfies PageServerLoad;

export const actions = {
    createNote: async ({ request, locals }) => {
        const form = await request.formData();
        const title = form.get("title");
        const content = form.get("content");

        const note = await locals.pb.collection("notes").create({
            title,
            content,
        });

        return {
            message: "Note created",
        };
    }
} satisfies Actions;
