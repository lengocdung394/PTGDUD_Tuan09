"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export default function Bai03_Theme_Toggle() {
  const [theme, setTheme] = useState("light")

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Apply theme to document body when theme changes
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className={`w-full max-w-md p-6 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">Theme Toggle Demo</h1>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <div className={`p-4 rounded-md ${theme === "dark" ? "bg-gray-700" : "bg-white"}`}>
          <p className="mb-2">
            Current theme: <strong>{theme}</strong>
          </p>
          <p>Click the button in the top-right corner to toggle between light and dark themes.</p>
        </div>
      </div>
    </div>
  )
}
