"use client"

import { useState } from "react"
import { Check, Trash } from "lucide-react"

export default function Bai02_Todo() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      }
      setTodos([...todos, newTodoItem])
      setNewTodo("")
    }
  }

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  // Remove a todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Remove all todos
  const deleteAllTodos = () => {
    setTodos([])
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-lg border border-blue-100 rounded-lg bg-white" style={{ marginTop: "70px" }}>
      <div className="bg-gradient-to-r from-blue-500 to-sky-600 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold text-center">Danh sách công việc</h2>
      </div>
      <div className="p-4">
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Thêm công việc mới..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo()
              }
            }}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white rounded-md"
          >
            Thêm
          </button>
        </div>

        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-center text-blue-400 italic">Chưa có công việc nào</p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center justify-between p-3 rounded-md border ${
                  todo.completed ? "bg-sky-50 border-sky-200" : "bg-white border-slate-200 hover:border-blue-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <button
                    className={`h-6 w-6 rounded-full flex items-center justify-center border ${
                      todo.completed ? "bg-sky-500 text-white border-sky-500" : "border-blue-300 hover:border-blue-500"
                    }`}
                    onClick={() => toggleTodo(todo.id)}
                  >
                    {todo.completed && <Check className="h-4 w-4" />}
                  </button>
                  <span className={`${todo.completed ? "line-through text-sky-600" : "text-slate-700"}`}>
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="h-8 w-8 flex items-center justify-center text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-md"
                >
                  <Trash className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {todos.length > 0 && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={deleteAllTodos}
              className="px-3 py-1 border border-blue-300 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-md flex items-center gap-1"
            >
              <Trash className="h-4 w-4" />
              Xóa tất cả
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
