import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { clubs } from "@/data/mockData"
import { Users, Calendar, Mail, Phone, Award, CheckCircle, Search, Filter, MessageCircle, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Clubs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [selectedClub, setSelectedClub] = useState<typeof clubs[0] | null>(null)

  const categories = ["全部", "文化艺术", "体育运动", "公益服务", "学术科技", "创新创业"]
  
  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "全部" || club.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  if (selectedClub) {
    return (
      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => setSelectedClub(null)}
            className="mb-6"
          >
            ← 返回社团列表
          </Button>

          {/* Club Detail */}
          <Card className="social-card overflow-hidden">
            {/* Cover Image */}
            <div className="aspect-video relative">
              <img
                src={selectedClub.image}
                alt={selectedClub.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-4 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-sm font-medium">
                    {selectedClub.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Users className="h-5 w-5" />
                    <span>{selectedClub.members}人</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-2">{selectedClub.name}</h1>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                  {/* Description */}
                  <section>
                    <h2 className="text-2xl font-bold mb-4 gradient-text">社团简介</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedClub.description}
                    </p>
                  </section>

                  {/* Activities */}
                  <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Calendar className="h-6 w-6 text-primary" />
                      主要活动
                    </h2>
                    <div className="grid gap-3">
                      {selectedClub.activities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Join Requirements */}
                  <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Award className="h-6 w-6 text-primary" />
                      加入要求
                    </h2>
                    <div className="p-6 bg-gradient-card rounded-xl border border-primary/20">
                      <p className="text-muted-foreground">{selectedClub.joinRequirements}</p>
                    </div>
                  </section>
                </div>

                {/* Sidebar - Leader Info */}
                <div className="space-y-6">
                  {/* Leader Card */}
                  <Card className="social-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 text-lg">社团负责人</h3>
                      <div className="text-center mb-4">
                        <img
                          src={selectedClub.leader.avatar}
                          alt={selectedClub.leader.name}
                          className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-primary/20 mb-3"
                        />
                        <h4 className="font-bold text-xl">{selectedClub.leader.name}</h4>
                        <p className="text-primary font-medium">{selectedClub.leader.role}</p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4 text-center">
                        {selectedClub.leader.bio}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a href={`mailto:${selectedClub.leader.email}`} className="text-primary hover:underline">
                            {selectedClub.leader.email}
                          </a>
                        </div>
                        {selectedClub.leader.phone && (
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{selectedClub.leader.phone}</span>
                          </div>
                        )}
                      </div>

                      <Button className="w-full mt-6" size="lg">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        咨询负责人
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Contact Info */}
                  <Card className="social-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">联系方式</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a href={`mailto:${selectedClub.contact}`} className="text-primary hover:underline">
                            {selectedClub.contact}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="social-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">快速操作</h3>
                      <div className="space-y-2">
                        <Button className="w-full" variant="outline">
                          申请加入社团
                        </Button>
                        <Button className="w-full" variant="outline">
                          查看活动日历
                        </Button>
                        <Button className="w-full" variant="outline">
                          分享社团
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">社团中心</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            探索丰富多彩的社团活动,找到志同道合的伙伴
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-card rounded-xl shadow-soft p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="搜索社团名称或描述..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">分类:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            找到 <span className="font-semibold text-foreground">{filteredClubs.length}</span> 个社团
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => (
            <Card key={club.id} className="social-card overflow-hidden cursor-pointer group" onClick={() => setSelectedClub(club)}>
              <div className="aspect-video relative">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                    {club.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>{club.members}人</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {club.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {club.description}
                </p>

                {/* Leader Info */}
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg mb-4">
                  <img
                    src={club.leader.avatar}
                    alt={club.leader.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{club.leader.name}</p>
                    <p className="text-xs text-muted-foreground">{club.leader.role}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{club.contact}</span>
                  </div>
                  <Button size="sm" variant="ghost">
                    详情
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredClubs.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">未找到匹配的社团</h3>
            <p className="text-muted-foreground">尝试调整搜索条件或分类筛选</p>
          </div>
        )}
      </div>
    </div>
  )
}
