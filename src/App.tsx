import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Mentors from "./pages/Mentors"
import Info from "./pages/Info"
import Match from "./pages/Match"
import Feed from "./pages/Feed"
import Profile from "./pages/Profile"
import Admin from "./pages/Admin"
import Clubs from "./pages/Clubs"
import Friends from "./pages/Friends"
import Messages from "./pages/Messages"
import Notifications from "./pages/Notifications"
import Verification from "./pages/Verification"
import Privacy from "./pages/Privacy"
import Auth from "./pages/Auth"
import GlobalSearch from "./components/GlobalSearch"
import MobileNav from "./components/MobileNav"
import { Button } from "./components/ui/button"
import { BookOpen, Users, Sparkles, Home as HomeIcon, User, Shield, Award, MessageCircle, Bell, LogIn } from "lucide-react"

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-glow">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl gradient-text">云凌书驿</span>
          </Link>
          
          <div className="hidden md:flex flex-1 max-w-xl">
            <GlobalSearch />
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <HomeIcon className="h-4 w-4" />
              首页
            </Link>
            <Link to="/feed" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Sparkles className="h-4 w-4" />
              动态
            </Link>
            <Link to="/clubs" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Award className="h-4 w-4" />
              社团
            </Link>
            <Link to="/mentors" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Users className="h-4 w-4" />
              导师库
            </Link>
            <Link to="/info" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              资源
            </Link>
            <Link to="/match">
              <Button variant="premium" size="sm" className="animate-glow">
                <Sparkles className="mr-2 h-4 w-4" />
                智能匹配
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Link to="/messages">
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <MessageCircle className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            <Link to="/notifications">
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" size="sm" className="gap-2">
                <LogIn className="h-4 w-4" />
                登录
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="ghost" size="icon">
                <Shield className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gradient-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">云凌书驿</span>
            </div>
            <p className="text-sm text-muted-foreground">
              打破信息差,连接每一位学子与优秀导师的社交平台
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">首页</Link></li>
              <li><Link to="/feed" className="hover:text-foreground">动态广场</Link></li>
              <li><Link to="/friends" className="hover:text-foreground">好友</Link></li>
              <li><Link to="/messages" className="hover:text-foreground">消息</Link></li>
              <li><Link to="/mentors" className="hover:text-foreground">导师库</Link></li>
              <li><Link to="/match" className="hover:text-foreground">智能匹配</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">资源分类</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/info" className="hover:text-foreground">保研攻略</Link></li>
              <li><Link to="/info" className="hover:text-foreground">留学指南</Link></li>
              <li><Link to="/info" className="hover:text-foreground">考研经验</Link></li>
              <li><Link to="/info" className="hover:text-foreground">就业指导</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>邮箱: contact@yunling.com</li>
              <li>微信: YunlingBook</li>
              <li>QQ群: 987654321</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 云凌书驿 - Yunling Book Station. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-subtle">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/info" element={<Info />} />
            <Route path="/match" element={<Match />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <MobileNav />
      </div>
    </BrowserRouter>
  )
}

export default App
