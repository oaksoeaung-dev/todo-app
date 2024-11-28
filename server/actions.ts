"use server"

import {db} from "@/server/index";
import {todos} from "@/server/schema";
import {revalidatePath} from "next/cache";
import {eq} from "drizzle-orm";
import {redirect} from "next/navigation";

export const allTodos = async () :Promise<{id:number,title:string}[]> =>
{
    const todos:{id:number,title:string}[] = await db.query.todos.findMany();

    return todos;
}

export const createTodo = async (formData: FormData) => {
    const todoTitle = formData.get("title");
    await db.insert(todos).values({title: todoTitle!.toString()});
    revalidatePath("/");
}

export const deleteTodo = async(formData: FormData) => {
    const id = Number(formData.get("id"));

    await db.delete(todos).where(eq(todos.id,id));
    revalidatePath("/");
}

export const editTodo = async(formData: FormData) => {
    const todoTitle = formData.get("title")!.toString();
    const todoId = Number(formData.get("id"));
    await db.update(todos).set({title: todoTitle}).where(eq(todos.id, todoId));
    revalidatePath("/");
    redirect("/");
}