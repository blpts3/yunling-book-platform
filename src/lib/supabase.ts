import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Using mock data mode.')
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

// 类型定义
export interface User {
  id: string
  email: string
  name: string
  avatar_url?: string
  phone?: string
  student_id?: string
  university?: string
  major?: string
  grade?: string
  bio?: string
  is_verified: boolean
  role: 'user' | 'admin' | 'moderator'
  created_at: string
}

export interface Club {
  id: string
  name: string
  category?: string
  description?: string
  image_url?: string
  contact?: string
  leader_name?: string
  leader_phone?: string
  leader_email?: string
  leader_bio?: string
  leader_avatar_url?: string
  member_count: number
  join_requirements?: string
  created_at: string
}

export interface Resource {
  id: string
  title: string
  category: string
  description?: string
  content?: string
  author_id?: string
  author_name?: string
  author_avatar_url?: string
  tags?: string[]
  view_count: number
  like_count: number
  created_at: string
}

export interface Mentor {
  id: string
  name: string
  avatar_url?: string
  major?: string
  grade?: string
  university?: string
  achievements?: string[]
  tags?: string[]
  description?: string
  is_available: boolean
  created_at: string
}

export interface Post {
  id: string
  author_id: string
  author_name: string
  author_avatar_url?: string
  author_role?: string
  author_verified: boolean
  content: string
  image_url?: string
  tags?: string[]
  like_count: number
  comment_count: number
  share_count: number
  created_at: string
}

export interface Comment {
  id: string
  post_id: string
  author_id: string
  author_name: string
  author_avatar_url?: string
  author_verified: boolean
  content: string
  like_count: number
  created_at: string
}

// Auth辅助函数
export const auth = {
  // 注册
  async signUp(email: string, password: string, userData: Partial<User>) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: userData.name,
        },
      },
    })
    
    if (error) throw error
    
    // 创建用户资料
    if (data.user) {
      await supabase.from('users').insert({
        id: data.user.id,
        email,
        name: userData.name,
        phone: userData.phone,
        student_id: userData.student_id,
        university: userData.university,
        major: userData.major,
        grade: userData.grade,
        bio: userData.bio,
        role: 'user',
      })
    }
    
    return data
  },

  // 登录
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return data
  },

  // 登出
  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  // 获取当前用户
  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null
    
    // 获取用户资料
    const { data: profile } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single()
    
    return profile
  },

  // 检查是否为管理员
  async isAdmin(): Promise<boolean> {
    const user = await this.getCurrentUser()
    return user?.role === 'admin'
  },
}

// 数据操作辅助函数
export const db = {
  // 社团
  clubs: {
    async getAll() {
      const { data, error } = await supabase
        .from('clubs')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error
      return data
    },
    async getById(id: string) {
      const { data, error } = await supabase
        .from('clubs')
        .select('*')
        .eq('id', id)
        .single()
      if (error) throw error
      return data
    },
  },

  // 资源
  resources: {
    async getAll(category?: string) {
      let query = supabase.from('resources').select('*').order('created_at', { ascending: false })
      if (category) {
        query = query.eq('category', category)
      }
      const { data, error } = await query
      if (error) throw error
      return data
    },
    async getById(id: string) {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('id', id)
        .single()
      if (error) throw error
      return data
    },
  },

  // 导师
  mentors: {
    async getAll() {
      const { data, error } = await supabase
        .from('mentors')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error
      return data
    },
  },

  // 动态
  posts: {
    async getAll() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error
      return data
    },
    async create(post: Omit<Post, 'id' | 'created_at' | 'like_count' | 'comment_count' | 'share_count'>) {
      const { data, error } = await supabase
        .from('posts')
        .insert(post)
        .select()
        .single()
      if (error) throw error
      return data
    },
  },
}
