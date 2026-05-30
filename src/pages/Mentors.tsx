import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { mentors } from "@/data/mockData"
import { Search, Filter, CheckCircle, Mail, MessageCircle } from "lucide-react"

export default function Mentors() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState<string>("all")

  const allTags = Array.from(new Set(mentors.flatMap(m => m.tags)))
  
  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.university.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = selectedTag === "all" || mentor.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">导师库</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            浏览我们的优秀导师团队,找到最适合你的学长学姐
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-card rounded-xl shadow-soft p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="搜索姓名、专业或院校..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">筛选:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedTag === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag("all")}
              >
                全部
              </Button>
              {allTags.map(tag => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            找到 <span className="font-semibold text-foreground">{filteredMentors.length}</span> 位导师
          </p>
        </div>

        {/* Mentor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="overflow-hidden hover-lift">
              <div className="aspect-video relative">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
                {mentor.available && (
                  <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    可咨询
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{mentor.name}</h3>
                    <p className="text-sm text-muted-foreground">{mentor.major} · {mentor.grade}</p>
                  </div>
                </div>
                
                <p className="text-primary font-medium mb-4 text-sm">{mentor.university}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{mentor.description}</p>
                
                <div className="space-y-2 mb-6">
                  {mentor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    联系导师
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredMentors.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">未找到匹配的导师</h3>
            <p className="text-muted-foreground">尝试调整搜索条件或筛选标签</p>
          </div>
        )}
      </div>
    </div>
  )
}
