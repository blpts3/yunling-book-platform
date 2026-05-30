import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { conversations } from "@/data/mockData"
import { Search, Send, Phone, Video, MoreVertical, Image as ImageIcon, Smile, ArrowLeft } from "lucide-react"

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null)
  const [messageInput, setMessageInput] = useState("")

  const selectedConv = selectedConversation !== null 
    ? conversations[selectedConversation]
    : null

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-2 gradient-text">消息</h1>
          <p className="text-muted-foreground text-lg">
            与导师和朋友保持联系
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 h-[calc(100vh-250px)]">
          {/* Conversations List */}
          <Card className={`social-card ${selectedConversation !== null ? 'hidden md:block' : ''}`}>
            <CardContent className="p-4 h-full flex flex-col">
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="搜索消息..."
                  className="pl-9 h-10"
                />
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto space-y-2">
                {conversations.map((conv, index) => (
                  <div
                    key={conv.user.id}
                    onClick={() => setSelectedConversation(index)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedConversation === index 
                        ? 'bg-primary/10 border border-primary/20' 
                        : 'hover:bg-secondary/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <img
                          src={conv.user.avatar}
                          alt={conv.user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {conv.user.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-sm truncate">{conv.user.name}</h3>
                          <span className="text-xs text-muted-foreground">
                            {conv.last_message.timestamp}
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground truncate">
                          {conv.last_message.content}
                        </p>
                        
                        {conv.last_message.unread_count > 0 && (
                          <div className="mt-2">
                            <span className="px-2 py-0.5 bg-primary text-white text-xs rounded-full">
                              {conv.last_message.unread_count}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className={`social-card md:col-span-2 ${selectedConversation === null ? 'hidden md:flex' : 'flex'}`}>
            <CardContent className="p-0 h-full flex flex-col">
              {selectedConv ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="md:hidden"
                        onClick={() => setSelectedConversation(null)}
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </Button>
                      
                      <div className="relative">
                        <img
                          src={selectedConv.user.avatar}
                          alt={selectedConv.user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {selectedConv.user.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="font-semibold">{selectedConv.user.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {selectedConv.user.online ? '在线' : '离线'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {/* Sample Messages */}
                    <div className="flex items-start gap-3">
                      <img
                        src={selectedConv.user.avatar}
                        alt=""
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="max-w-[70%]">
                        <div className="bg-secondary/50 rounded-lg p-3">
                          <p className="text-sm">你好!有什么问题可以问我~</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">10:30</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end">
                      <div className="max-w-[70%]">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3">
                          <p className="text-sm">我想咨询一下保研的事情</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 text-right">10:32</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <img
                        src={selectedConv.user.avatar}
                        alt=""
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="max-w-[70%]">
                        <div className="bg-secondary/50 rounded-lg p-3">
                          <p className="text-sm">好的,你想了解哪方面呢?我可以分享一些经验</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">10:33</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end">
                      <div className="max-w-[70%]">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3">
                          <p className="text-sm">{selectedConv.last_message.content}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 text-right">{selectedConv.last_message.timestamp}</p>
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <ImageIcon className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Smile className="h-5 w-5" />
                      </Button>
                      
                      <Input
                        placeholder="输入消息..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        className="flex-1"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && messageInput.trim()) {
                            setMessageInput("")
                          }
                        }}
                      />
                      
                      <Button 
                        size="icon"
                        disabled={!messageInput.trim()}
                        onClick={() => setMessageInput("")}
                      >
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">开始聊天</h3>
                    <p className="text-muted-foreground">选择一个对话开始聊天</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
