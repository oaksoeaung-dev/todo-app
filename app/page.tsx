import {allTodos, createTodo, deleteTodo} from "@/server/actions";
import Form from "next/form";
import ButtonInsideInput from "@/app/components/button-inside-input";
import Link from "next/link";

export default async function Home() {
    const todos = await allTodos();

    return (
        <div className={"h-screen w-full flex items-center justify-center"}>
            <div className={"min-w-[500px] p-5 border shadow-2xl rounded-xl"}>
                <h1 className={"text-gray-700 font-semibold text-3xl my-5 text-center"}>Todos</h1>
                <Form className="" action={createTodo}>
                    <label htmlFor="create-task"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only">Create New
                        Task</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-800" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
                                <path
                                    d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"></path>
                            </svg>
                        </div>
                        <input type="search" id="create-task"
                               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
                               name={"title"}
                               placeholder="Create a new task"/>
                        <ButtonInsideInput label={"Create"} />
                    </div>
                </Form>
                <div className={"space-y-2 mt-2"}>
                    {
                        todos?.map(todo => {
                            return (
                                <div className={"p-2 text-gray-700 bg-gray-100 flex justify-between items-center rounded-lg"}
                                     key={todo.id}>
                                    <p>{todo.title}</p>
                                    <div className={"flex items-center gap-3"}>
                                        <Link href={`/update/${todo.id}`} className={"text-sky-500 font-semibold"}><i className="fi fi-rr-pen-circle"></i></Link>
                                        <form action={deleteTodo}>
                                            <input type={"text"} name={"id"} value={todo.id} hidden={true} readOnly={true}/>
                                            <button className={"text-green-500 font-semibold"}>
                                                <i className="fi fi-rr-check-circle"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
