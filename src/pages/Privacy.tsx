import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Shield, 
  Lock, 
  Eye, 
  EyeOff, 
  Users, 
  Globe, 
  Bell, 
  MessageSquare, 
  UserCheck,
  Save,
  CheckCircle2
} from "lucide-react"

interface PrivacySettings {
  profileVisibility: 'public' | 'friends' | 'private'
  showEmail: boolean
  showPhone: boolean
  showStudentId: boolean
  allowFriendRequests: 'everyone' | 'verified' | 'none'
  allowMessages: 'everyone' | 'friends' | 'none'
  showOnlineStatus: boolean
  showActivityStatus: boolean
  allowTagging: boolean
  allowMentions: boolean
  emailNotifications: boolean
  pushNotifications: boolean
  smsNotifications: boolean
  newsletterSubscription: boolean
}

export default function Privacy() {
  const [settings, setSettings] = useState<PrivacySettings>({
    profileVisibility: 'public',
    showEmail: true,
    showPhone: false,
    showStudentId: false,
    allowFriendRequests: 'verified',
    allowMessages: 'friends',
    showOnlineStatus: true,
    showActivityStatus: true,
    allowTagging: true,
    allowMentions: true,
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    newsletterSubscription: true,
  })
  
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const updateSetting = (key: keyof PrivacySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
    setSaved(false)
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold gradient-text">隐私设置</h1>
              <p className="text-muted-foreground">控制您的个人信息可见性和通知偏好</p>
            </div>
          </div>
        </div>

        {/* Profile Visibility */}
        <Card className="social-card mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              个人资料可见性
            </CardTitle>
            <CardDescription>
              控制谁可以查看您的个人资料和信息
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium">资料可见范围</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => updateSetting('profileVisibility', 'public')}
                  className={`p-4 rounded-lg border-2 transition-all text-center ${
                    settings.profileVisibility === 'public'
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Globe className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="font-medium text-sm">公开</div>
                  <div className="text-xs text-muted-foreground mt-1">所有人可见</div>
                </button>
                <button
                  onClick={() => updateSetting('profileVisibility', 'friends')}
                  className={`p-4 rounded-lg border-2 transition-all text-center ${
                    settings.profileVisibility === 'friends'
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="font-medium text-sm">好友</div>
                  <div className="text-xs text-muted-foreground mt-1">仅好友可见</div>
                </button>
                <button
                  onClick={() => updateSetting('profileVisibility', 'private')}
                  className={`p-4 rounded-lg border-2 transition-all text-center ${
                    settings.profileVisibility === 'private'
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Lock className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="font-medium text-sm">私密</div>
                  <div className="text-xs text-muted-foreground mt-1">仅自己可见</div>
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <label className="text-sm font-medium">个人信息显示</label>
              <div className="space-y-3">
                <ToggleItem
                  label="显示邮箱地址"
                  description="在个人资料中显示您的邮箱"
                  checked={settings.showEmail}
                  onCheckedChange={(checked) => updateSetting('showEmail', checked)}
                  icon={<MessageSquare className="h-4 w-4" />}
                />
                <ToggleItem
                  label="显示手机号"
                  description="在个人资料中显示您的手机号"
                  checked={settings.showPhone}
                  onCheckedChange={(checked) => updateSetting('showPhone', checked)}
                  icon={<MessageSquare className="h-4 w-4" />}
                />
                <ToggleItem
                  label="显示学号"
                  description="在个人资料中显示您的学号（不推荐）"
                  checked={settings.showStudentId}
                  onCheckedChange={(checked) => updateSetting('showStudentId', checked)}
                  icon={<MessageSquare className="h-4 w-4" />}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interaction Settings */}
        <Card className="social-card mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              互动权限设置
            </CardTitle>
            <CardDescription>
              控制其他人如何与您互动
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium">好友请求</label>
              <div className="space-y-2">
                <RadioOption
                  label="允许所有人发送好友请求"
                  value="everyone"
                  current={settings.allowFriendRequests}
                  onChange={() => updateSetting('allowFriendRequests', 'everyone')}
                />
                <RadioOption
                  label="仅允许已认证用户"
                  value="verified"
                  current={settings.allowFriendRequests}
                  onChange={() => updateSetting('allowFriendRequests', 'verified')}
                />
                <RadioOption
                  label="不接受好友请求"
                  value="none"
                  current={settings.allowFriendRequests}
                  onChange={() => updateSetting('allowFriendRequests', 'none')}
                />
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <label className="text-sm font-medium">私信权限</label>
              <div className="space-y-2">
                <RadioOption
                  label="允许所有人发消息"
                  value="everyone"
                  current={settings.allowMessages}
                  onChange={() => updateSetting('allowMessages', 'everyone')}
                />
                <RadioOption
                  label="仅好友可发消息"
                  value="friends"
                  current={settings.allowMessages}
                  onChange={() => updateSetting('allowMessages', 'friends')}
                />
                <RadioOption
                  label="不接受私信"
                  value="none"
                  current={settings.allowMessages}
                  onChange={() => updateSetting('allowMessages', 'none')}
                />
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <label className="text-sm font-medium">其他互动选项</label>
              <div className="space-y-3">
                <ToggleItem
                  label="显示在线状态"
                  description="让其他人看到您是否在线"
                  checked={settings.showOnlineStatus}
                  onCheckedChange={(checked) => updateSetting('showOnlineStatus', checked)}
                  icon={<Eye className="h-4 w-4" />}
                />
                <ToggleItem
                  label="显示活动状态"
                  description="显示您最近的活跃时间"
                  checked={settings.showActivityStatus}
                  onCheckedChange={(checked) => updateSetting('showActivityStatus', checked)}
                  icon={<Eye className="h-4 w-4" />}
                />
                <ToggleItem
                  label="允许被提及"
                  description="允许他人在动态中@您"
                  checked={settings.allowMentions}
                  onCheckedChange={(checked) => updateSetting('allowMentions', checked)}
                  icon={<MessageSquare className="h-4 w-4" />}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="social-card mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              通知偏好
            </CardTitle>
            <CardDescription>
              选择您希望接收的通知类型
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <ToggleItem
              label="邮件通知"
              description="通过邮箱接收重要通知"
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => updateSetting('emailNotifications', checked)}
              icon={<MessageSquare className="h-4 w-4" />}
            />
            <ToggleItem
              label="推送通知"
              description="在浏览器中接收实时推送"
              checked={settings.pushNotifications}
              onCheckedChange={(checked) => updateSetting('pushNotifications', checked)}
              icon={<Bell className="h-4 w-4" />}
            />
            <ToggleItem
              label="短信通知"
              description="通过短信接收紧急通知"
              checked={settings.smsNotifications}
              onCheckedChange={(checked) => updateSetting('smsNotifications', checked)}
              icon={<MessageSquare className="h-4 w-4" />}
            />
            <ToggleItem
              label="订阅周报"
              description="每周接收平台精选内容和活动推荐"
              checked={settings.newsletterSubscription}
              onCheckedChange={(checked) => updateSetting('newsletterSubscription', checked)}
              icon={<Globe className="h-4 w-4" />}
            />
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end gap-3 sticky bottom-4">
          {saved && (
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/20 px-4 py-2 rounded-lg">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-medium">设置已保存</span>
            </div>
          )}
          <Button size="lg" onClick={handleSave} className="shadow-lg">
            <Save className="mr-2 h-5 w-5" />
            保存设置
          </Button>
        </div>
      </div>
    </div>
  )
}

function ToggleItem({ 
  label, 
  description, 
  checked, 
  onCheckedChange, 
  icon 
}: { 
  label: string
  description: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
      <div className="flex items-start gap-3 flex-1">
        <div className="text-muted-foreground mt-0.5">{icon}</div>
        <div>
          <div className="font-medium text-sm">{label}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </div>
      <button
        onClick={() => onCheckedChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors ${
          checked ? 'bg-primary' : 'bg-muted'
        }`}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  )
}

function RadioOption({
  label,
  value,
  current,
  onChange
}: {
  label: string
  value: string
  current: string
  onChange: () => void
}) {
  return (
    <button
      onClick={onChange}
      className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all text-left ${
        current === value
          ? 'border-primary bg-primary/10'
          : 'border-border hover:border-primary/50'
      }`}
    >
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
        current === value ? 'border-primary' : 'border-muted-foreground'
      }`}>
        {current === value && (
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
        )}
      </div>
      <span className="font-medium text-sm">{label}</span>
    </button>
  )
}
