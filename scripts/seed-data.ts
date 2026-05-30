// 数据迁移脚本 - 将模拟数据导入Supabase
// 使用方法: npx tsx scripts/seed-data.ts

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import { clubs as mockClubs, mentors as mockMentors } from '../src/data/mockData'

dotenv.config()

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 需要service_role密钥才能插入数据
)

// 导入社团数据
async function seedClubs() {
  console.log('开始导入社团数据...')
  
  const clubData = mockClubs.map(club => ({
    name: club.name,
    category: club.category,
    description: club.description,
    image_url: club.image,
    contact: club.contact,
    leader_name: club.leader.name,
    leader_phone: club.leader.phone || null,
    leader_email: club.leader.email,
    leader_bio: club.leader.bio,
    member_count: club.members,
    join_requirements: club.joinRequirements,
  }))

  const { error } = await supabase.from('clubs').insert(clubData)
  
  if (error) {
    console.error('社团数据导入失败:', error)
    return false
  }
  
  console.log(`成功导入 ${clubData.length} 个社团`)
  return true
}

// 导入导师数据
async function seedMentors() {
  console.log('开始导入导师数据...')
  
  const mentorData = mockMentors.map(mentor => ({
    name: mentor.name,
    avatar_url: mentor.avatar,
    major: mentor.major,
    grade: mentor.grade,
    university: mentor.university,
    achievements: mentor.achievements,
    tags: mentor.tags,
    description: mentor.description,
    is_available: mentor.available,
  }))

  const { error } = await supabase.from('mentors').insert(mentorData)
  
  if (error) {
    console.error('导师数据导入失败:', error)
    return false
  }
  
  console.log(`成功导入 ${mentorData.length} 个导师`)
  return true
}

// 主函数
async function main() {
  console.log('🚀 开始数据迁移...\n')
  
  const clubsSuccess = await seedClubs()
  const mentorsSuccess = await seedMentors()
  
  if (clubsSuccess && mentorsSuccess) {
    console.log('\n✅ 数据迁移完成！')
  } else {
    console.log('\n❌ 数据迁移失败，请检查错误信息')
    process.exit(1)
  }
}

main().catch(console.error)
