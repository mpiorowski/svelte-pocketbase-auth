import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  const notes = await locals.pb.collection("notes").getFullList();

  console.log(notes);

  return {
    notes: notes.map((note) => ({
      id: note.id,
      title: note.title,
      content: note.content,
    })),
  };
}) satisfies PageServerLoad;

export const actions = {
  createNote: async ({ request, locals }) => {
    const form = await request.formData();
    const data = {
      userId: locals.user?.id,
      title: form.get("title") as string,
      content: form.get("content") as string,
    };

    await locals.pb.collection("notes").create(data);

    return {
      status: 200,
      body: "Note created",
    };
  },
} satisfies Actions;
