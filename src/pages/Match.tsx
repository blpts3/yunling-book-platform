import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { mentors } from "@/data/mockData"
import { CheckCircle, Sparkles, ArrowRight, User, GraduationCap, Target } from "lucide-react"

interface FormData {
  name: string
  major: string
  grade: string
  goal: string
  interests: string[]
}

export default function Match() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    major: "",
    grade: "",
    goal: "",
    interests: [],
  })
  const [matchedMentors, setMatchedMentors] = useState<typeof mentors>([])

  const goals = ["保研", "考研", "留学", "就业", "竞赛", "科研"]
  const interestOptions = ["计算机", "交通", "电气", "机械", "金融", "语言", "科研", "实习", "创新"]

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleMatch = () => {
    // 简单的匹配逻辑:根据兴趣标签匹配
    const matched = mentors.filter(mentor =>
      mentor.tags.some(tag => formData.interests.includes(tag)) ||
      mentor.major.includes(formData.major) ||
      mentor.tags.some(tag => formData.goal.includes(tag))
    )
    setMatchedMentors(matched.length > 0 ? matched : mentors.slice(0, 3))
    setStep(2)
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 animate-float">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 gradient-text">智能匹配导师</h1>
          <p className="text-muted-foreground text-lg">
            告诉我们你的需求,为你精准推荐最合适的学长学姐
          </p>
        </div>

        {step === 1 ? (
          <Card className="shadow-elegant border-0">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Step Indicator */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      1
                    </div>
                    <span className="font-medium">填写信息</span>
                  </div>
                  <div className="w-16 h-0.5 bg-border"></div>
                  <div className="flex items-center gap-2 opacity-50">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-semibold">
                      2
                    </div>
                    <span>查看结果</span>
                  </div>
                </div>

                {/* Form Fields */}
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    你的姓名
                  </label>
                  <Input
                    placeholder="请输入你的姓名"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    专业
                  </label>
                  <Input
                    placeholder="例如:计算机科学与技术"
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">年级</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["大一", "大二", "大三", "大四"].map((grade) => (
                      <Button
                        key={grade}
                        variant={formData.grade === grade ? "default" : "outline"}
                        onClick={() => setFormData({ ...formData, grade })}
                        className="h-12"
                      >
                        {grade}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    目标方向
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {goals.map((goal) => (
                      <Button
                        key={goal}
                        variant={formData.goal === goal ? "default" : "outline"}
                        onClick={() => setFormData({ ...formData, goal })}
                        className="h-12"
                      >
                        {goal}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">感兴趣的方向(可多选)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interestOptions.map((interest) => (
                      <Button
                        key={interest}
                        variant={formData.interests.includes(interest) ? "default" : "outline"}
                        onClick={() => handleInterestToggle(interest)}
                        className="h-12"
                      >
                        {interest}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full h-14 text-lg mt-8"
                  onClick={handleMatch}
                  disabled={!formData.name || !formData.major || !formData.grade || !formData.goal}
                >
                  开始匹配
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Results Header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full mb-4">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">匹配成功!</span>
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                为你找到 {matchedMentors.length} 位合适的导师
              </h2>
              <p className="text-muted-foreground">
                基于你的专业、目标和兴趣进行智能推荐
              </p>
            </div>

            {/* Matched Mentors */}
            <div className="grid gap-6">
              {matchedMentors.map((mentor, index) => (
                <Card key={mentor.id} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="w-32 h-32 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-xl font-semibold">{mentor.name}</h3>
                              {index === 0 && (
                                <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                                  最佳匹配
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{mentor.major} · {mentor.grade}</p>
                          </div>
                          {mentor.available && (
                            <div className="flex items-center gap-1 text-success text-sm font-medium">
                              <CheckCircle className="h-4 w-4" />
                              可咨询
                            </div>
                          )}
                        </div>
                        
                        <p className="text-primary font-medium mb-3">{mentor.university}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {mentor.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4">{mentor.description}</p>
                        
                        <div className="space-y-1 mb-4">
                          {mentor.achievements.slice(0, 2).map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button size="lg" className="w-full md:w-auto">
                          联系导师
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="lg" onClick={() => setStep(1)}>
                重新匹配
              </Button>
              <Button size="lg">
                查看全部导师
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
