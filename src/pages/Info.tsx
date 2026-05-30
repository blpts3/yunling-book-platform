import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { infoItems, clubs } from "@/data/mockData"
import { BookOpen, Users, Calendar, Eye, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

type Category = "全部" | "保研" | "留学" | "考研" | "就业"

export default function Info() {
  const [activeTab, setActiveTab] = useState<"articles" | "clubs">("articles")
  const [selectedCategory, setSelectedCategory] = useState<Category>("全部")
  const [searchTerm, setSearchTerm] = useState("")

  const categories: Category[] = ["全部", "保研", "留学", "考研", "就业"]

  const filteredArticles = infoItems.filter(item => {
    const matchesCategory = selectedCategory === "全部" || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">信息中心</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            获取最新的社团信息、保研攻略、留学指南和就业资讯
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b">
          <Button
            variant={activeTab === "articles" ? "default" : "ghost"}
            size="lg"
            onClick={() => setActiveTab("articles")}
            className="rounded-b-none"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            经验分享
          </Button>
          <Button
            variant={activeTab === "clubs" ? "default" : "ghost"}
            size="lg"
            onClick={() => setActiveTab("clubs")}
            className="rounded-b-none"
          >
            <Users className="mr-2 h-5 w-5" />
            社团大全
          </Button>
        </div>

        {activeTab === "articles" ? (
          <>
            {/* Search and Filter */}
            <div className="bg-card rounded-xl shadow-soft p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="搜索文章..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12"
                  />
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

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        article.category === "保研" ? "bg-primary/10 text-primary" :
                        article.category === "留学" ? "bg-accent/10 text-accent" :
                        article.category === "考研" ? "bg-warning/10 text-warning" :
                        "bg-success/10 text-success"
                      }`}>
                        {article.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">{article.summary}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>作者: {article.author}</span>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{article.views}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        阅读更多
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-2">暂无相关文章</h3>
                <p className="text-muted-foreground">尝试调整搜索条件或分类筛选</p>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Clubs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club) => (
                <Card key={club.id} className="overflow-hidden hover-lift">
                  <div className="aspect-video relative">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="text-white text-sm font-medium">{club.category}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{club.name}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{club.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{club.members}人</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>活跃中</span>
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      了解详情
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
