import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { currentUser } from "@/data/mockData"
import { Users, BookOpen, Award, MapPin, Calendar, Link as LinkIcon, Mail, Github, MessageCircle, Settings, Edit, BadgeCheck, Shield } from "lucide-react"

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Cover Photo */}
      <div className="relative h-80 bg-gradient-hero">
        <img
          src={currentUser.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Sidebar - Profile Info */}
          <div className="md:col-span-1">
            <Card className="social-card">
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="relative mb-4">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-32 h-32 rounded-2xl object-cover ring-4 ring-white shadow-elegant mx-auto"
                  />
                  <Button
                    size="icon"
                    className="absolute bottom-0 right-1/2 translate-x-16 w-8 h-8 rounded-full"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>

                {/* Name and Bio */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h1 className="text-2xl font-bold">{currentUser.name}</h1>
                    <BadgeCheck className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{currentUser.bio}</p>
                  
                  <div className="flex justify-center gap-6 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-lg">{currentUser.posts}</div>
                      <div className="text-muted-foreground">动态</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg">{currentUser.followers}</div>
                      <div className="text-muted-foreground">关注者</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg">{currentUser.following}</div>
                      <div className="text-muted-foreground">关注中</div>
                    </div>
                  </div>
                </div>

                {/* Info List */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <BookOpen className="h-5 w-5" />
                    <span>{currentUser.major}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5" />
                    <span>{currentUser.grade}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>{currentUser.university}</span>
                  </div>
                  {currentUser.socialLinks.wechat && (
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MessageCircle className="h-5 w-5" />
                      <span>{currentUser.socialLinks.wechat}</span>
                    </div>
                  )}
                  {currentUser.socialLinks.email && (
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="h-5 w-5" />
                      <span>{currentUser.socialLinks.email}</span>
                    </div>
                  )}
                  {currentUser.socialLinks.github && (
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Github className="h-5 w-5" />
                      <span>{currentUser.socialLinks.github}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-6">
                  <Button className="flex-1">
                    <Edit className="mr-2 h-4 w-4" />
                    编辑资料
                  </Button>
                  <Link to="/verification">
                    <Button variant="outline" size="icon" title="实名认证">
                      <Shield className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/privacy">
                    <Button variant="outline" size="icon" title="隐私设置">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="social-card mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-warning" />
                  成就徽章
                </h3>
                <div className="space-y-3">
                  {currentUser.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="social-card mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">兴趣爱好</h3>
                <div className="flex flex-wrap gap-2">
                  {currentUser.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Posts */}
          <div className="md:col-span-2">
            <Card className="social-card mb-6">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <img
                    src={currentUser.avatar}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <textarea
                      placeholder="分享你的想法..."
                      className="w-full min-h-[80px] p-4 rounded-xl bg-secondary/50 border-0 resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <div className="flex justify-end mt-3">
                      <Button size="sm">发布</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sample Posts */}
            <div className="space-y-6">
              <Card className="social-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <img
                      src={currentUser.avatar}
                      alt="Avatar"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{currentUser.name}</h3>
                      <p className="text-sm text-muted-foreground">2小时前</p>
                    </div>
                  </div>
                  <p className="mb-4">
                    🎉 云凌书驿平台正式上线!感谢团队的努力付出,希望能帮助到更多的学弟学妹们。
                    未来我们会持续优化功能,增加更多优质内容和服务。欢迎大家提出建议!💪
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <Button variant="ghost" size="sm">
                      <Heart className="mr-2 h-5 w-5" />
                      128
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      23
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="mr-2 h-5 w-5" />
                      12
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
