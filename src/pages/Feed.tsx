import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { posts } from "@/data/mockData"
import type { Comment } from "@/data/mockData"
import { Heart, MessageCircle, Share2, Send, Image as ImageIcon, MoreHorizontal, CheckCircle, ThumbsUp } from "lucide-react"

export default function Feed() {
  const [feedPosts, setFeedPosts] = useState(posts)
  const [newPost, setNewPost] = useState("")
  const [expandedComments, setExpandedComments] = useState<number[]>([])
  const [commentInputs, setCommentInputs] = useState<{[key: number]: string}>({})

  const handleLike = (postId: number) => {
    setFeedPosts(prev =>
      prev.map(post =>
        post.id === postId
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    )
  }

  const handleCommentLike = (postId: number, commentId: number) => {
    setFeedPosts(prev =>
      prev.map(post => {
        if (post.id !== postId) return post
        const updatedComments = post.commentList?.map(comment =>
          comment.id === commentId
            ? { ...comment, liked: !comment.liked, likes: comment.liked ? comment.likes - 1 : comment.likes + 1 }
            : comment
        )
        return { ...post, commentList: updatedComments }
      })
    )
  }

  const toggleComments = (postId: number) => {
    setExpandedComments(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    )
  }

  const handleCommentSubmit = (postId: number) => {
    const content = commentInputs[postId]?.trim()
    if (!content) return

    const newComment: Comment = {
      id: Date.now(),
      author: {
        name: "云凌管理员",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
        verified: true,
      },
      content,
      timestamp: "刚刚",
      likes: 0,
      liked: false,
    }

    setFeedPosts(prev =>
      prev.map(post => {
        if (post.id !== postId) return post
        const updatedComments = [...(post.commentList || []), newComment]
        return {
          ...post,
          commentList: updatedComments,
          comments: updatedComments.length,
        }
      })
    )

    setCommentInputs(prev => ({ ...prev, [postId]: "" }))
  }

  const handlePublish = () => {
    if (!newPost.trim()) return
    
    const post = {
      id: Date.now(),
      author: {
        name: "云凌管理员",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
        role: "平台管理员",
        verified: true,
      },
      content: newPost,
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: "刚刚",
      tags: [],
      liked: false,
      commentList: [],
    }
    
    setFeedPosts([post, ...feedPosts])
    setNewPost("")
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-2 gradient-text">动态广场</h1>
          <p className="text-muted-foreground text-lg">
            与学长学姐互动,获取最新经验和资讯
          </p>
        </div>

        {/* Create Post */}
        <Card className="social-card mb-8">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"
                alt="Avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <textarea
                  placeholder="分享你的想法、经验或问题..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="w-full min-h-[100px] p-4 rounded-xl bg-secondary/50 border-0 resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <div className="flex justify-between items-center mt-4">
                  <Button variant="ghost" size="sm">
                    <ImageIcon className="mr-2 h-4 w-4" />
                    添加图片
                  </Button>
                  <Button onClick={handlePublish} disabled={!newPost.trim()}>
                    <Send className="mr-2 h-4 w-4" />
                    发布
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-6">
          {feedPosts.map((post) => (
            <Card key={post.id} className="social-card overflow-hidden">
              <CardContent className="p-6">
                {/* Post Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{post.author.name}</h3>
                        {post.author.verified && (
                          <CheckCircle className="h-5 w-5 text-primary fill-primary/20" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{post.author.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">{post.timestamp}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                  <p className="whitespace-pre-line text-foreground leading-relaxed">
                    {post.content}
                  </p>
                </div>

                {/* Post Image */}
                {post.image && (
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-auto max-h-[500px] object-cover"
                    />
                  </div>
                )}

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className={`flex-1 transition-all ${post.liked ? 'text-accent hover:text-accent/80' : ''}`}
                  >
                    <Heart className={`mr-2 h-5 w-5 transition-transform ${post.liked ? 'fill-accent scale-110' : ''}`} />
                    {post.likes}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`flex-1 transition-colors ${expandedComments.includes(post.id) ? 'text-primary bg-primary/10' : ''}`}
                    onClick={() => toggleComments(post.id)}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Share2 className="mr-2 h-5 w-5" />
                    {post.shares}
                  </Button>
                </div>

                {/* Comments Section */}
                {expandedComments.includes(post.id) && (
                  <div className="mt-4 pt-4 border-t space-y-4">
                    {/* Comment List */}
                    <div className="space-y-3 max-h-[400px] overflow-y-auto">
                      {post.commentList && post.commentList.length > 0 ? (
                        post.commentList.map((comment) => (
                          <div key={comment.id} className="flex gap-3 group">
                            <img
                              src={comment.author.avatar}
                              alt={comment.author.name}
                              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="bg-secondary/50 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium text-sm">{comment.author.name}</span>
                                  {comment.author.verified && (
                                    <CheckCircle className="h-3.5 w-3.5 text-primary fill-primary/20" />
                                  )}
                                  <span className="text-xs text-muted-foreground ml-auto">{comment.timestamp}</span>
                                </div>
                                <p className="text-sm whitespace-pre-line">{comment.content}</p>
                              </div>
                              <div className="flex items-center gap-4 mt-1 px-2">
                                <button
                                  onClick={() => handleCommentLike(post.id, comment.id)}
                                  className={`flex items-center gap-1 text-xs transition-colors ${
                                    comment.liked ? 'text-accent' : 'text-muted-foreground hover:text-accent'
                                  }`}
                                >
                                  <ThumbsUp className={`h-3.5 w-3.5 ${comment.liked ? 'fill-accent' : ''}`} />
                                  {comment.likes > 0 && comment.likes}
                                </button>
                                <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                                  回复
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-6 text-muted-foreground">
                          <MessageCircle className="h-8 w-8 mx-auto mb-2 opacity-30" />
                          <p className="text-sm">暂无评论，快来抢沙发吧~</p>
                        </div>
                      )}
                    </div>

                    {/* Comment Input */}
                    <div className="flex gap-2 pt-2 border-t">
                      <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 flex gap-2">
                        <Input
                          placeholder="写下你的评论..."
                          value={commentInputs[post.id] || ""}
                          onChange={(e) => setCommentInputs(prev => ({ ...prev, [post.id]: e.target.value }))}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault()
                              handleCommentSubmit(post.id)
                            }
                          }}
                          className="flex-1"
                        />
                        <Button
                          size="sm"
                          onClick={() => handleCommentSubmit(post.id)}
                          disabled={!commentInputs[post.id]?.trim()}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
