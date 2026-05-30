import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { mentors, successStories, posts } from "@/data/mockData"
import { Users, BookOpen, Trophy, ArrowRight, Star, CheckCircle, Sparkles, MessageCircle, Heart } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with gradient and animations */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20 animate-pulse-slow"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">云凌书驿 - 你的成长伙伴</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                打破信息差
                <br />
                <span className="bg-gradient-to-r from-white via-accent-light to-white bg-clip-text text-transparent animate-glow">
                  连接每一位追梦学子
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                与优秀学长学姐面对面,获取保研、留学、就业的一手经验
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/mentors">
                  <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90 border-0 shadow-neon">
                    寻找导师
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/feed">
                  <Button variant="hero" size="xl" className="bg-white/20 hover:bg-white/30">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    浏览动态
                  </Button>
                </Link>
                <Link to="/match">
                  <Button variant="hero" size="xl">
                    <Sparkles className="mr-2 h-5 w-5" />
                    智能匹配
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover-lift">
                <div className="text-4xl md:text-5xl font-bold mb-2">{mentors.length}+</div>
                <div className="text-white/80">优秀导师</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover-lift">
                <div className="text-4xl md:text-5xl font-bold mb-2">{successStories.length}+</div>
                <div className="text-white/80">成功案例</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover-lift">
                <div className="text-4xl md:text-5xl font-bold mb-2">{posts.length}+</div>
                <div className="text-white/80">经验分享</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">为什么选择云凌书驿?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              我们致力于消除信息不对称,让每位同学都能获得最优质的指导资源
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-elegant social-card">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 animate-glow">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">精准匹配</h3>
                <p className="text-muted-foreground">
                  根据你的专业、目标和需求,智能推荐最适合的学长学姐导师
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant social-card">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-social rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">一手经验</h3>
                <p className="text-muted-foreground">
                  所有导师都是亲身经历者,分享最真实、最新的申请和备考经验
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant social-card">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-success to-primary rounded-2xl flex items-center justify-center mb-6">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">成功案例</h3>
                <p className="text-muted-foreground">
                  数百名同学通过平台成功上岸清华、北大、MIT等顶尖院校
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 gradient-text">优秀导师</h2>
              <p className="text-muted-foreground text-lg">来自顶尖院校的学长学姐</p>
            </div>
            <Link to="/mentors">
              <Button variant="outline" size="lg">
                查看全部
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.slice(0, 3).map((mentor) => (
              <Card key={mentor.id} className="overflow-hidden social-card">
                <div className="aspect-video relative group">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {mentor.available && (
                    <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      可咨询
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{mentor.major} · {mentor.grade}</p>
                  <p className="text-primary font-medium mb-4">{mentor.university}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{mentor.description}</p>
                  <div className="space-y-2">
                    {mentor.achievements.slice(0, 2).map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts - Social Feed Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">最新动态</h2>
            <p className="text-muted-foreground text-lg">看看学长学姐们在分享什么</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {posts.slice(0, 2).map((post) => (
              <Card key={post.id} className="social-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{post.author.name}</h4>
                        {post.author.verified && (
                          <CheckCircle className="h-4 w-4 text-primary fill-primary/20" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-4 line-clamp-3 whitespace-pre-line">{post.content}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                    <Link to="/feed" className="text-primary hover:underline">
                      查看更多
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/feed">
              <Button variant="premium" size="lg">
                <Sparkles className="mr-2 h-5 w-5" />
                浏览更多动态
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">成功案例</h2>
            <p className="text-muted-foreground text-lg">听听他们怎么说</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.id} className="border-0 shadow-elegant social-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={story.avatar}
                      alt={story.studentName}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold">{story.studentName}</h4>
                      <p className="text-sm text-muted-foreground">{story.fromMajor}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-5 w-5 fill-warning text-warning" />
                      <span className="font-medium">{story.result}</span>
                    </div>
                    <p className="text-primary font-semibold">{story.toUniversity}</p>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic border-l-4 border-primary/20 pl-4">
                    "{story.testimonial}"
                  </blockquote>
                  
                  <div className="mt-4 text-sm text-muted-foreground">
                    导师: {story.mentorName}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-4xl font-bold mb-6">准备好开始了吗?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            立即加入云凌书驿,与优秀学长学姐建立联系,开启你的成功之路
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/mentors">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                浏览导师库
              </Button>
            </Link>
            <Link to="/match">
              <Button variant="hero" size="xl">
                <Sparkles className="mr-2 h-5 w-5" />
                智能匹配导师
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
