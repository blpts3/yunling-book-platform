import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mentors, clubs, posts, friends } from "@/data/mockData"
import { Search, Users, Award, FileText, ArrowRight, X } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface SearchResults {
  mentors: typeof mentors
  clubs: typeof clubs
  posts: typeof posts
  users: typeof friends
}

export default function GlobalSearch() {
  const [query, setQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const navigate = useNavigate()

  const results: SearchResults = {
    mentors: mentors.filter(m => 
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.major.toLowerCase().includes(query.toLowerCase()) ||
      m.university.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 3),
    
    clubs: clubs.filter(c =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 3),
    
    posts: posts.filter(p =>
      p.content.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    ).slice(0, 3),
    
    users: friends.filter(f =>
      f.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 3),
  }

  const hasResults = results.mentors.length > 0 || 
                    results.clubs.length > 0 || 
                    results.posts.length > 0 ||
                    results.users.length > 0

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setShowResults(e.target.value.length > 0)
  }

  const clearSearch = () => {
    setQuery("")
    setShowResults(false)
  }

  if (!showResults && !query) {
    return null
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 z-50">
      <Card className="shadow-elegant border-0 max-h-[70vh] overflow-y-auto">
        <CardContent className="p-4">
          {!hasResults && query ? (
            <div className="text-center py-8">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <p className="text-muted-foreground">未找到 "{query}" 的相关结果</p>
              <p className="text-sm text-muted-foreground mt-1">尝试其他关键词</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Users */}
              {results.users.length > 0 && (
                <section>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      用户
                    </h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => navigate("/friends")}
                    >
                      查看全部
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {results.users.map(user => (
                      <div
                        key={user.id}
                        className="flex items-center gap-3 p-2 hover:bg-secondary/50 rounded-lg cursor-pointer transition-colors"
                        onClick={() => {
                          navigate("/profile")
                          clearSearch()
                        }}
                      >
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-sm">{user.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {user.mutual_friends} 个共同好友
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Mentors */}
              {results.mentors.length > 0 && (
                <section>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      导师
                    </h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        navigate("/mentors")
                        clearSearch()
                      }}
                    >
                      查看全部
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {results.mentors.map(mentor => (
                      <div
                        key={mentor.id}
                        className="flex items-center gap-3 p-2 hover:bg-secondary/50 rounded-lg cursor-pointer transition-colors"
                        onClick={() => {
                          navigate("/mentors")
                          clearSearch()
                        }}
                      >
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{mentor.name}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {mentor.university}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Clubs */}
              {results.clubs.length > 0 && (
                <section>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent" />
                      社团
                    </h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        navigate("/clubs")
                        clearSearch()
                      }}
                    >
                      查看全部
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {results.clubs.map(club => (
                      <div
                        key={club.id}
                        className="flex items-center gap-3 p-2 hover:bg-secondary/50 rounded-lg cursor-pointer transition-colors"
                        onClick={() => {
                          navigate("/clubs")
                          clearSearch()
                        }}
                      >
                        <img
                          src={club.image}
                          alt={club.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{club.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {club.category} · {club.members}人
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Posts */}
              {results.posts.length > 0 && (
                <section>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <FileText className="h-4 w-4 text-success" />
                      动态
                    </h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        navigate("/feed")
                        clearSearch()
                      }}
                    >
                      查看全部
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {results.posts.map(post => (
                      <div
                        key={post.id}
                        className="p-3 hover:bg-secondary/50 rounded-lg cursor-pointer transition-colors"
                        onClick={() => {
                          navigate("/feed")
                          clearSearch()
                        }}
                      >
                        <p className="text-sm line-clamp-2 mb-2">{post.content}</p>
                        <div className="flex items-center gap-2">
                          <img
                            src={post.author.avatar}
                            alt=""
                            className="w-5 h-5 rounded-full object-cover"
                          />
                          <span className="text-xs text-muted-foreground">
                            {post.author.name}
                          </span>
                          <span className="text-xs text-muted-foreground">·</span>
                          <span className="text-xs text-muted-foreground">
                            {post.timestamp}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
