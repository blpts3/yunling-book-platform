import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BadgeCheck, GraduationCap, Shield, CheckCircle, XCircle, AlertCircle } from "lucide-react"

type VerificationStep = 'intro' | 'student-id' | 'email' | 'success' | 'failed'

interface VerificationState {
  step: VerificationStep
  studentId: string
  email: string
  isVerifying: boolean
}

export default function Verification() {
  const [state, setState] = useState<VerificationState>({
    step: 'intro',
    studentId: '',
    email: '',
    isVerifying: false,
  })

  const handleStudentIdSubmit = () => {
    if (!state.studentId.trim()) return
    
    setState(prev => ({ ...prev, isVerifying: true }))
    
    // 模拟验证过程
    setTimeout(() => {
      // 简单的验证逻辑：学号长度至少8位
      if (state.studentId.length >= 8) {
        setState(prev => ({ 
          ...prev, 
          step: 'email',
          isVerifying: false 
        }))
      } else {
        setState(prev => ({ 
          ...prev, 
          step: 'failed',
          isVerifying: false 
        }))
      }
    }, 1500)
  }

  const handleEmailSubmit = () => {
    if (!state.email.trim() || !state.email.includes('@')) return
    
    setState(prev => ({ ...prev, isVerifying: true }))
    
    // 模拟邮箱验证
    setTimeout(() => {
      setState(prev => ({ 
        ...prev, 
        step: 'success',
        isVerifying: false 
      }))
    }, 1500)
  }

  const resetVerification = () => {
    setState({
      step: 'intro',
      studentId: '',
      email: '',
      isVerifying: false,
    })
  }

  // 介绍页面
  if (state.step === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="social-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-2">实名认证</h1>
                <p className="text-muted-foreground">验证您的学生身份，解锁更多平台功能</p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                  <BadgeCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">为什么要认证？</h3>
                    <p className="text-sm text-muted-foreground">
                      实名认证可以确保平台用户的真实性，建立可信赖的校园社交网络。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">认证后权益</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 获得官方认证标识</li>
                      <li>• 解锁私信聊天功能</li>
                      <li>• 参与社团活动报名</li>
                      <li>• 发布求助和互助信息</li>
                      <li>• 提升个人账号可信度</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">隐私保护</h3>
                    <p className="text-sm text-muted-foreground">
                      我们承诺严格保护您的个人信息，学号和邮箱仅用于身份验证，不会对外公开。
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full"
                onClick={() => setState(prev => ({ ...prev, step: 'student-id' }))}
              >
                开始认证
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // 学号验证页面
  if (state.step === 'student-id') {
    return (
      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="social-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                步骤 1：验证学号
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">请输入您的学生证号或学号</p>
                <p className="text-xs text-muted-foreground">
                  示例：20210001（8位或以上数字）
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">学号</label>
                <Input
                  type="text"
                  placeholder="请输入学号"
                  value={state.studentId}
                  onChange={(e) => setState(prev => ({ ...prev, studentId: e.target.value }))}
                  className="text-lg"
                  disabled={state.isVerifying}
                />
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setState(prev => ({ ...prev, step: 'intro' }))}
                  disabled={state.isVerifying}
                >
                  返回
                </Button>
                <Button 
                  className="flex-1"
                  onClick={handleStudentIdSubmit}
                  disabled={!state.studentId.trim() || state.isVerifying}
                >
                  {state.isVerifying ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
                      验证中...
                    </>
                  ) : (
                    '下一步'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // 邮箱验证页面
  if (state.step === 'email') {
    return (
      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="social-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BadgeCheck className="h-6 w-6 text-primary" />
                步骤 2：验证邮箱
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">学号验证成功！</span>
                </div>
              </div>

              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">请输入您的学校邮箱</p>
                <p className="text-xs text-muted-foreground">
                  示例：student@swjtu.edu.cn
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">学校邮箱</label>
                <Input
                  type="email"
                  placeholder="example@swjtu.edu.cn"
                  value={state.email}
                  onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
                  className="text-lg"
                  disabled={state.isVerifying}
                />
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setState(prev => ({ ...prev, step: 'student-id' }))}
                  disabled={state.isVerifying}
                >
                  上一步
                </Button>
                <Button 
                  className="flex-1"
                  onClick={handleEmailSubmit}
                  disabled={!state.email.trim() || state.isVerifying}
                >
                  {state.isVerifying ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
                      验证中...
                    </>
                  ) : (
                    '完成认证'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // 认证成功页面
  if (state.step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="social-card">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
              
              <h1 className="text-3xl font-bold mb-2 text-green-600 dark:text-green-400">
                认证成功！
              </h1>
              <p className="text-muted-foreground mb-8">
                恭喜您已完成实名认证，现在可以享受全部平台功能
              </p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6 rounded-lg mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <BadgeCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <span className="font-semibold text-lg">已认证用户</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-muted-foreground mb-1">学号</div>
                    <div className="font-mono">{state.studentId}</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-muted-foreground mb-1">邮箱</div>
                    <div className="font-mono text-xs">{state.email}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button size="lg" className="w-full">
                  返回首页
                </Button>
                <Button variant="outline" className="w-full" onClick={resetVerification}>
                  重新认证
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // 认证失败页面
  if (state.step === 'failed') {
    return (
      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="social-card">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <XCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
              </div>
              
              <h1 className="text-3xl font-bold mb-2 text-red-600 dark:text-red-400">
                认证失败
              </h1>
              <p className="text-muted-foreground mb-8">
                学号格式不正确或不存在，请检查后重试
              </p>

              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg mb-8 text-left">
                <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">可能的原因：</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 学号输入有误，请检查是否包含空格或特殊字符</li>
                  <li>• 学号长度不足，应为8位或以上数字</li>
                  <li>• 该学号尚未在系统中注册</li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => setState(prev => ({ ...prev, step: 'student-id' }))}
                >
                  重新输入
                </Button>
                <Button variant="outline" className="w-full" onClick={resetVerification}>
                  返回首页
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return null
}
