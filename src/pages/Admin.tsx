import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { mentors, posts, clubs, currentUser } from "@/data/mockData"
import { Plus, Edit, Trash2, Users, BookOpen, FileText, Settings, CheckCircle, X, BarChart3, MessageSquare, TrendingUp, Eye, Shield, UserCog, Database } from "lucide-react"

interface MentorForm {
  name: string
  major: string
  grade: string
  university: string
  achievements: string[]
  tags: string[]
  description: string
  available: boolean
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "mentors" | "posts" | "users" | "settings">("dashboard")
  const [showAddModal, setShowAddModal] = useState(false)
  const [formData, setFormData] = useState<MentorForm>({
    name: "",
    major: "",
    grade: "",
    university: "",
    achievements: [],
    tags: [],
    description: "",
    available: true,
  })

  const handleAddMentor = () => {
    console.log("添加导师:", formData)
    alert(`导师 "${formData.name}" 添加成功!`)
    setShowAddModal(false)
    setFormData({
      name: "",
      major: "",
      grade: "",
      university: "",
      achievements: [],
      tags: [],
      description: "",
      available: true,
    })
  }

  // 统计数据
  const stats = {
    totalMentors: mentors.length,
    onlineMentors: mentors.filter(m => m.available).length,
    totalPosts: posts.length,
    totalUsers: 1234,
    totalViews: 45678,
    newUsersToday: 23,
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-2 gradient-text">管理后台</h1>
            <p className="text-muted-foreground text-lg">
              欢迎回来, {currentUser.name}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              系统运行正常
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="social-card">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "dashboard" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("dashboard")}
                  >
                    <BarChart3 className="mr-3 h-5 w-5" />
                    数据概览
                  </Button>
                  <Button
                    variant={activeTab === "mentors" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("mentors")}
                  >
                    <Users className="mr-3 h-5 w-5" />
                    导师管理
                  </Button>
                  <Button
                    variant={activeTab === "posts" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("posts")}
                  >
                    <FileText className="mr-3 h-5 w-5" />
                    内容管理
                  </Button>
                  <Button
                    variant={activeTab === "users" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("users")}
                  >
                    <UserCog className="mr-3 h-5 w-5" />
                    用户管理
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="mr-3 h-5 w-5" />
                    系统设置
                  </Button>
                </nav>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="social-card mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  快捷操作
                </h3>
                <div className="space-y-2">
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={() => {
                      setActiveTab("mentors")
                      setShowAddModal(true)
                    }}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    添加导师
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    <Database className="mr-2 h-4 w-4" />
                    导出数据
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    查看反馈
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-4">
            {/* Dashboard View */}
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="social-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">导师总数</p>
                          <p className="text-3xl font-bold text-primary">{stats.totalMentors}</p>
                        </div>
                        <Users className="h-10 w-10 text-primary/20" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="social-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">在线导师</p>
                          <p className="text-3xl font-bold text-success">{stats.onlineMentors}</p>
                        </div>
                        <CheckCircle className="h-10 w-10 text-success/20" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="social-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">动态总数</p>
                          <p className="text-3xl font-bold text-accent">{stats.totalPosts}</p>
                        </div>
                        <FileText className="h-10 w-10 text-accent/20" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="social-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">总访问量</p>
                          <p className="text-3xl font-bold text-secondary">{stats.totalViews}</p>
                        </div>
                        <Eye className="h-10 w-10 text-secondary/20" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts Placeholder */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="social-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        用户增长趋势
                      </h3>
                      <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-lg">
                        <p className="text-muted-foreground">图表功能待开发</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="social-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        热门导师排行
                      </h3>
                      <div className="space-y-3">
                        {mentors.slice(0, 5).map((mentor, index) => (
                          <div key={mentor.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {index + 1}
                              </div>
                              <div>
                                <p className="font-medium text-sm">{mentor.name}</p>
                                <p className="text-xs text-muted-foreground">{mentor.university}</p>
                              </div>
                            </div>
                            <span className="text-sm text-primary font-medium">
                              {Math.floor(Math.random() * 100 + 50)}次咨询
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="social-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">最近活动</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                        <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm">新导师加入: 张学长 (清华大学)</p>
                          <p className="text-xs text-muted-foreground mt-1">2小时前</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm">新增动态: 保研经验分享</p>
                          <p className="text-xs text-muted-foreground mt-1">5小时前</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm">新用户注册: +23人</p>
                          <p className="text-xs text-muted-foreground mt-1">今天</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Mentors Management */}
            {activeTab === "mentors" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">导师管理</h2>
                  <Button onClick={() => setShowAddModal(true)}>
                    <Plus className="mr-2 h-5 w-5" />
                    添加导师
                  </Button>
                </div>

                <div className="space-y-4">
                  {mentors.map((mentor) => (
                    <Card key={mentor.id} className="social-card">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={mentor.avatar}
                            alt={mentor.name}
                            className="w-16 h-16 rounded-xl object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-lg">{mentor.name}</h3>
                              {mentor.available && (
                                <CheckCircle className="h-5 w-5 text-success" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {mentor.major} · {mentor.grade}
                            </p>
                            <p className="text-sm text-primary font-medium">{mentor.university}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {mentor.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Posts Management */}
            {activeTab === "posts" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">内容管理</h2>
                  <Button>
                    <Plus className="mr-2 h-5 w-5" />
                    发布动态
                  </Button>
                </div>

                <div className="space-y-4">
                  {posts.map((post) => (
                    <Card key={post.id} className="social-card">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h3 className="font-semibold">{post.author.name}</h3>
                                <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="h-4 w-4 text-destructive" />
                                </Button>
                              </div>
                            </div>
                            <p className="text-sm line-clamp-2 mb-3">{post.content}</p>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span>{post.likes} 点赞</span>
                              <span>{post.comments} 评论</span>
                              <span>{post.shares} 分享</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Users Management */}
            {activeTab === "users" && (
              <Card className="social-card">
                <CardContent className="p-8 text-center">
                  <UserCog className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">用户管理</h3>
                  <p className="text-muted-foreground mb-4">
                    当前注册用户: {stats.totalUsers} 人
                  </p>
                  <p className="text-sm text-muted-foreground">
                    今日新增: {stats.newUsersToday} 人
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Settings */}
            {activeTab === "settings" && (
              <Card className="social-card">
                <CardContent className="p-8 text-center">
                  <Settings className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">系统设置</h3>
                  <p className="text-muted-foreground">
                    配置平台参数和功能选项
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Add Mentor Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">添加新导师</h2>
                <Button variant="ghost" size="icon" onClick={() => setShowAddModal(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">姓名 *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="输入导师姓名"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">专业 *</label>
                    <Input
                      value={formData.major}
                      onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                      placeholder="例如:计算机科学与技术"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">年级 *</label>
                    <Input
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      placeholder="例如:2020级本科生"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">录取院校 *</label>
                  <Input
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    placeholder="例如:清华大学 - 计算机系硕士"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">简介 *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="简要介绍导师的背景和专长..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">标签(用逗号分隔)</label>
                  <Input
                    placeholder="例如:保研,计算机,竞赛"
                    onBlur={(e) => {
                      const tags = e.target.value.split(',').map(t => t.trim()).filter(Boolean)
                      setFormData({ ...formData, tags })
                    }}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="available"
                    checked={formData.available}
                    onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <label htmlFor="available" className="text-sm font-medium">
                    当前可接受咨询
                  </label>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1" onClick={handleAddMentor}>
                    确认添加
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => setShowAddModal(false)}>
                    取消
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
