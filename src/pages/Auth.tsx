import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { auth } from "@/lib/supabase"
import { BookOpen, Mail, Lock, User, GraduationCap, Building } from "lucide-react"

type AuthMode = "login" | "register"

export default function Auth() {
  const navigate = useNavigate()
  const [mode, setMode] = useState<AuthMode>("login")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    studentId: "",
    university: "",
    major: "",
    grade: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (mode === "login") {
        await auth.signIn(formData.email, formData.password)
        navigate("/")
      } else {
        await auth.signUp(formData.email, formData.password, {
          name: formData.name,
          phone: formData.phone,
          student_id: formData.studentId,
          university: formData.university,
          major: formData.major,
          grade: formData.grade,
        })
        alert("注册成功！请检查邮箱验证账户。")
        setMode("login")
      }
    } catch (err: any) {
      setError(err.message || "操作失败，请重试")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-glow">
              <BookOpen className="h-7 w-7 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">云凌书驿</h1>
          <p className="text-white/80">打破信息差，连接每一位学子</p>
        </div>

        {/* Auth Card */}
        <Card className="social-card">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              {mode === "login" ? "欢迎回来" : "创建账户"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Register Fields */}
              {mode === "register" && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="h-4 w-4" />
                      姓名
                    </label>
                    <Input
                      type="text"
                      placeholder="请输入姓名"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        学号
                      </label>
                      <Input
                        type="text"
                        placeholder="学号"
                        value={formData.studentId}
                        onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">手机号</label>
                      <Input
                        type="tel"
                        placeholder="手机号"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      学校
                    </label>
                    <Input
                      type="text"
                      placeholder="所在学校"
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">专业</label>
                      <Input
                        type="text"
                        placeholder="专业"
                        value={formData.major}
                        onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">年级</label>
                      <Input
                        type="text"
                        placeholder="如：2021级"
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Email & Password (Both modes) */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  邮箱
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  密码
                </label>
                <Input
                  type="password"
                  placeholder={mode === "register" ? "至少6位密码" : "输入密码"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  minLength={6}
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? "处理中..." : mode === "login" ? "登录" : "注册"}
              </Button>

              {/* Toggle Mode */}
              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  {mode === "login" ? "还没有账户？" : "已有账户？"}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setMode(mode === "login" ? "register" : "login")
                    setError("")
                  }}
                  className="ml-2 text-primary hover:underline font-medium"
                >
                  {mode === "login" ? "立即注册" : "去登录"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-white/60 mt-6">
          注册即表示您同意我们的服务条款和隐私政策
        </p>
      </div>
    </div>
  )
}
