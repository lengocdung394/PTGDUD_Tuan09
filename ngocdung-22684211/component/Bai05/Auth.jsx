"use client"
import { useState, useEffect } from "react"
import { LogOut, User } from "lucide-react"

export default function Auth() {
  // State cho thông tin người dùng và trạng thái đăng nhập
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // State cho form đăng nhập
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Kiểm tra nếu người dùng đã đăng nhập trước đó (từ localStorage)
  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      setIsLoggedIn(true)
    }
  }, [])

  // Action: login - Xử lý đăng nhập
  const login = (e) => {
    e.preventDefault()
    setError("")

    // Kiểm tra form
    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ thông tin")
      return
    }

    // Giả lập xác thực (trong thực tế sẽ gọi API)
    if (email === "user@example.com" && password === "password") {
      const userData = {
        id: "1",
        name: "Nguyễn Văn A",
        email: email,
        avatar: "/placeholder.svg?height=40&width=40",
      }

      // Cập nhật state
      setUser(userData)
      setIsLoggedIn(true)

      // Lưu vào localStorage để giữ trạng thái đăng nhập
      localStorage.setItem("user", JSON.stringify(userData))

      // Reset form
      setEmail("")
      setPassword("")
    } else {
      setError("Email hoặc mật khẩu không đúng")
    }
  }

  // Action: logout - Xử lý đăng xuất
  const logout = () => {
    setUser(null)
    setIsLoggedIn(false)
    localStorage.removeItem("user")
  }

  // Action: setUserInfo - Cập nhật thông tin người dùng
  const setUserInfo = (newUserInfo) => {
    const updatedUser = { ...user, ...newUserInfo }
    setUser(updatedUser)
    localStorage.setItem("user", JSON.stringify(updatedUser))
  }

  return (
    <div className="max-w-md mx-auto mt-5 shadow-lg border border-blue-100 rounded-lg bg-white">
      {isLoggedIn ? (
        // Hiển thị giao diện khi đã đăng nhập
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Chào mừng trở lại!</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                {user.avatar ? (
                  <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                  <User className="h-8 w-8 text-gray-500" />
                )}
              </div>
              <div>
                <h3 className="font-medium text-lg">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Thông tin tài khoản</h4>
                <p className="text-sm text-gray-500 mb-1">ID: {user.id}</p>
                <p className="text-sm text-gray-500">Trạng thái: Đang hoạt động</p>
              </div>

              <button
                className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setUserInfo({ lastActive: new Date().toISOString() })}
              >
                Cập nhật thông tin
              </button>

              <button
                className="w-full py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center justify-center"
                onClick={logout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Hiển thị form đăng nhập khi chưa đăng nhập
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b bg-blue-600">
            <h2 className="text-xl font-semibold text-white ">Đăng nhập</h2>
          </div>
          <div className="p-6">
            <form onSubmit={login} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 w-10">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 w-17">
                  Mật khẩu
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {error && <div className="text-sm text-red-600">{error}</div>}

              <div className="text-sm text-gray-500">Sử dụng email: user@example.com và mật khẩu: password</div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
