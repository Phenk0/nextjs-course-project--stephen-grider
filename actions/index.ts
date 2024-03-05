"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
import { revalidatePath } from "next/cache";

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    // check users inputs
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3) {
      return { message: "Title must be at least 3 characters long" };
    }
    if (typeof code !== "string" || code.length < 10) {
      return { message: "Code must be at least 10 characters long" };
    }
    // create new record in db
    const snippet = await db.snippet.create({
      data: { title, code }
    });

    if (!snippet) throw new Error("Failed to save to database");

    revalidatePath("/");
    redirect("/");
  } catch (err: unknown) {
    if (isRedirectError(err)) throw err;

    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return { message: "Something went wrong" };
    }
  }
}

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code }
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });

  revalidatePath("/");
  redirect("/");
}
