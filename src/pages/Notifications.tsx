import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { notifications } from "@/data/mockData"
import { Bell, Heart, MessageCircle, UserPlus, FileText, Settings, CheckCheck } from "lucide-react"

export default function Notifications() {
  const [filter, setFilter] = useState<"all" | "unread">("all")

  const filteredNotifications = filter === "all" 
    ? notifications 
    : notifications.filter(n => !n.read)

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'friend_request':
        return <UserPlus className="h-5 w-5 text-primary" />
      case 'like':
        return <Heart className="h-5 w-5 text-accent" />
      case 'comment':
        return <MessageCircle className="h-5 w-5 text-secondary" />
      case 'new_post':
        return <FileText className="h-5 w-5 text-success" />
      default:
        return <Bell className="h-5 w-5 text-muted-foreground" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-2 gradient-text">通知</h1>
            <p className="text-muted-foreground text-lg">
              查看你的最新动态和消息
            </p>
          </div>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            设置
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            全部
          </Button>
          <Button
            variant={filter === "unread" ? "default" : "outline"}
            onClick={() => setFilter("unread")}
          >
            未读
            {notifications.filter(n => !n.read).length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-accent text-white text-xs rounded-full">
                {notifications.filter(n => !n.read).length}
              </span>
            )}
          </Button>
        </div>

        {/* Mark All as Read */}
        {notifications.some(n => !n.read) && (
          <Button variant="ghost" size="sm" className="mb-4">
            <CheckCheck className="mr-2 h-4 w-4" />
            全部标记为已读
          </Button>
        )}

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`social-card cursor-pointer transition-all ${
                !notification.read ? 'border-l-4 border-l-primary' : ''
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  {notification.avatar ? (
                    <img
                      src={notification.avatar}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      {getNotificationIcon(notification.type)}
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className={`font-semibold mb-1 ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {notification.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {notification.content}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.timestamp}
                        </p>
                      </div>
                      
                      {!notification.read && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredNotifications.length === 0 && (
            <div className="text-center py-12">
              <Bell className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">暂无通知</h3>
              <p className="text-muted-foreground">当有新通知时会显示在这里</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
