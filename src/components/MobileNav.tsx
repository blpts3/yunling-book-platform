import { Link, useLocation } from "react-router-dom"
import { Home, Sparkles, Users, BookOpen, MessageCircle, Bell, User } from "lucide-react"

export default function MobileNav() {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  const navItems = [
    { path: "/", icon: Home, label: "首页" },
    { path: "/feed", icon: Sparkles, label: "动态" },
    { path: "/clubs", icon: Users, label: "社团" },
    { path: "/mentors", icon: BookOpen, label: "导师" },
    { path: "/messages", icon: MessageCircle, label: "消息", badge: 3 },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t shadow-lg safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.path)
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full relative transition-colors ${
                active ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div className="relative">
                <Icon className={`h-6 w-6 transition-transform ${active ? 'scale-110' : ''}`} />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] mt-0.5 font-medium ${active ? 'text-primary' : ''}`}>
                {item.label}
              </span>
              {active && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          )
        })}
        
        {/* Profile Button - Special styling */}
        <Link
          to="/profile"
          className={`flex flex-col items-center justify-center flex-1 h-full relative transition-colors ${
            isActive('/profile') ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <div className="relative">
            <div className={`w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center transition-transform ${
              isActive('/profile') ? 'scale-110 ring-2 ring-primary/30' : ''
            }`}>
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
          <span className={`text-[10px] mt-0.5 font-medium ${isActive('/profile') ? 'text-primary' : ''}`}>
            我的
          </span>
          {isActive('/profile') && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
          )}
        </Link>
      </div>
    </nav>
  )
}
