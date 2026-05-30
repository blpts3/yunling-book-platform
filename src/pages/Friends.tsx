import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { friends, friendRequests, recommendedUsers } from "@/data/mockData"
import type { RecommendedUser } from "@/data/mockData"
import { Users, UserPlus, Search, Check, X, MessageCircle, MoreHorizontal, Sparkles, TrendingUp } from "lucide-react"

export default function Friends() {
  const [activeTab, setActiveTab] = useState<"friends" | "requests" | "find">("friends")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortedBy, setSortedBy] = useState<"score" | "mutual">("score")

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // 推荐好友排序逻辑
  const sortedRecommendations = [...recommendedUsers].sort((a, b) => {
    if (sortedBy === "score") {
      return b.match_score - a.match_score
    }
    return b.mutual_friends - a.mutual_friends
  })

  // 获取推荐理由标签颜色
  const getReasonColor = (reason: string) => {
    if (reason.includes("共同好友")) return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
    if (reason.includes("兴趣")) return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
    if (reason.includes("校友") || reason.includes("同校")) return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
    return "bg-primary/10 text-primary"
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-2 gradient-text">好友</h1>
          <p className="text-muted-foreground text-lg">
            连接志同道合的朋友,建立你的人脉网络
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b">
          <Button
            variant={activeTab === "friends" ? "default" : "ghost"}
            size="lg"
            onClick={() => setActiveTab("friends")}
            className="rounded-b-none"
          >
            <Users className="mr-2 h-5 w-5" />
            我的好友 ({friends.length})
          </Button>
          <Button
            variant={activeTab === "requests" ? "default" : "ghost"}
            size="lg"
            onClick={() => setActiveTab("requests")}
            className="rounded-b-none relative"
          >
            <UserPlus className="mr-2 h-5 w-5" />
            好友请求
            {friendRequests.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                {friendRequests.length}
              </span>
            )}
          </Button>
          <Button
            variant={activeTab === "find" ? "default" : "ghost"}
            size="lg"
            onClick={() => setActiveTab("find")}
            className="rounded-b-none"
          >
            <Search className="mr-2 h-5 w-5" />
            发现好友
          </Button>
        </div>

        {/* Friends List */}
        {activeTab === "friends" && (
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="搜索好友..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Friends Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredFriends.map((friend) => (
                <Card key={friend.id} className="social-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <img
                          src={friend.avatar}
                          alt={friend.name}
                          className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                        />
                        {friend.online && (
                          <div className="absolute bottom-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-lg">{friend.name}</h3>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-2">
                          {friend.mutual_friends} 个共同好友
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {friend.common_interests.map((interest, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-xs text-muted-foreground mb-3">
                          {friend.last_active}
                        </p>
                        
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            发消息
                          </Button>
                          <Button variant="outline" size="sm">
                            查看资料
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Friend Requests */}
        {activeTab === "requests" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">待处理的好友请求</h2>
            
            {friendRequests.map((request) => (
              <Card key={request.id} className="social-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={request.from_user.avatar}
                      alt={request.from_user.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{request.from_user.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {request.from_user.mutual_friends} 个共同好友
                      </p>
                      
                      {request.message && (
                        <p className="text-sm bg-secondary/50 p-3 rounded-lg mb-3">
                          "{request.message}"
                        </p>
                      )}
                      
                      <p className="text-xs text-muted-foreground mb-3">
                        {request.timestamp}
                      </p>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Check className="mr-2 h-4 w-4" />
                          接受
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <X className="mr-2 h-4 w-4" />
                          拒绝
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {friendRequests.length === 0 && (
              <div className="text-center py-12">
                <UserPlus className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">暂无好友请求</h3>
                <p className="text-muted-foreground">去发现更多好友吧!</p>
              </div>
            )}
          </div>
        )}

        {/* Find Friends */}
        {activeTab === "find" && (
          <div className="space-y-6">
            {/* Smart Recommendations Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">智能推荐</h2>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={sortedBy === "score" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortedBy("score")}
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  匹配度
                </Button>
                <Button
                  variant={sortedBy === "mutual" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortedBy("mutual")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  共同好友
                </Button>
              </div>
            </div>

            {/* Recommended Users Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {sortedRecommendations.map((user) => (
                <Card key={user.id} className="social-card overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* Avatar with Match Score */}
                      <div className="relative flex-shrink-0">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-20 h-20 rounded-xl object-cover ring-2 ring-primary/20"
                        />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-bold">{user.match_score}</span>
                        </div>
                        {user.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-primary" />
                          </div>
                        )}
                      </div>

                      {/* User Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h3 className="font-semibold text-lg truncate">{user.name}</h3>
                            <p className="text-sm text-muted-foreground truncate">{user.role}</p>
                          </div>
                        </div>

                        {/* University & Major */}
                        {(user.university || user.major) && (
                          <p className="text-xs text-muted-foreground mb-2 truncate">
                            {user.university}{user.university && user.major && " · "}{user.major}
                          </p>
                        )}

                        {/* Mutual Friends */}
                        <p className="text-xs text-muted-foreground mb-2">
                          {user.mutual_friends} 个共同好友
                        </p>

                        {/* Common Interests */}
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {user.common_interests.slice(0, 3).map((interest, index) => (
                            <span
                              key={index}
                              className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>

                        {/* Recommendation Reason */}
                        <div className={`inline-block px-2 py-1 rounded text-xs ${getReasonColor(user.reason)}`}>
                          {user.reason}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full mt-4">
                      <UserPlus className="mr-2 h-4 w-4" />
                      加为好友
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {sortedRecommendations.length === 0 && (
              <div className="text-center py-12">
                <Sparkles className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">暂无推荐</h3>
                <p className="text-muted-foreground">完善个人资料后，我们会为您推荐更匹配的好友</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
