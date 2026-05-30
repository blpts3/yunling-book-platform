// 模拟数据 - 导师信息
export interface Mentor {
  id: number
  name: string
  avatar: string
  major: string
  grade: string
  university: string
  achievements: string[]
  tags: string[]
  description: string
  available: boolean
}

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "张学长",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    major: "计算机科学与技术",
    grade: "2020级本科生",
    university: "清华大学 - 计算机系硕士",
    achievements: ["GPA 3.9/4.0", "国家奖学金", "ACM区域赛金牌"],
    tags: ["保研", "计算机", "竞赛"],
    description: "专注于计算机保研经验分享,擅长算法竞赛指导",
    available: true,
  },
  {
    id: 2,
    name: "李学姐",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    major: "交通运输",
    grade: "2019级本科生",
    university: "麻省理工学院 - 交通工程博士",
    achievements: ["托福115", "GRE 330+", "发表SCI论文2篇"],
    tags: ["留学", "交通", "科研"],
    description: "美国Top院校申请经验丰富,专注交通领域留学规划",
    available: true,
  },
  {
    id: 3,
    name: "王学长",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    major: "电气工程",
    grade: "2018级本科生",
    university: "浙江大学 - 电气工程学院硕士",
    achievements: ["保研排名第1", "全国大学生电子设计竞赛一等奖"],
    tags: ["保研", "电气", "科研"],
    description: "电气工程专业保研成功,有丰富的实验室科研经验",
    available: false,
  },
  {
    id: 4,
    name: "陈学姐",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    major: "经济学",
    grade: "2020级本科生",
    university: "伦敦政治经济学院 - 金融硕士",
    achievements: ["雅思8.0", "CFA一级通过", "投行实习经历"],
    tags: ["留学", "金融", "实习"],
    description: "英国G5院校申请专家,金融行业实习资源丰富",
    available: true,
  },
  {
    id: 5,
    name: "刘学长",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    major: "机械工程",
    grade: "2019级本科生",
    university: "上海交通大学 - 机械与动力工程学院硕士",
    achievements: ["挑战杯全国特等奖", "发明专利2项"],
    tags: ["保研", "机械", "创新"],
    description: "机械类专业保研上岸,创新创业项目经验丰富",
    available: true,
  },
  {
    id: 6,
    name: "赵学姐",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    major: "英语",
    grade: "2021级本科生",
    university: "北京大学 - 外国语学院硕士",
    achievements: ["专八优秀", "全国大学生英语竞赛特等奖"],
    tags: ["保研", "语言", "翻译"],
    description: "外语类保研专家,口译笔译经验丰富",
    available: true,
  },
]

// 社团信息
export interface Club {
  id: number
  name: string
  category: string
  members: number
  description: string
  image: string
  contact: string
  leader: {
    name: string
    role: string
    avatar: string
    phone?: string
    email: string
    bio: string
  }
  activities: string[]
  joinRequirements: string
}

export const clubs: Club[] = [
  {
    id: 1,
    name: "氧气舞蹈团",
    category: "文化艺术",
    members: 85,
    description: "西南交通大学最具活力的舞蹈团体,涵盖街舞、现代舞、民族舞等多种舞种。定期举办舞蹈演出、参加校内外比赛,为舞蹈爱好者提供专业培训和展示平台。",
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=400&fit=crop",
    contact: "oxygendance@swjtu.edu.cn",
    leader: {
      name: "杨凝香",
      role: "指导老师",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      email: "yangningxiang@swjtu.edu.cn",
      bio: "资深舞蹈教师,15年舞蹈教学经验,曾指导学生获得多个国家级舞蹈比赛奖项",
    },
    activities: ["每周二、四晚训练", "月度舞蹈沙龙", "年度专场演出", "校际舞蹈交流"],
    joinRequirements: "热爱舞蹈,有一定基础优先,需参加面试",
  },
  {
    id: 2,
    name: "交大篮球协会",
    category: "体育运动",
    members: 200,
    description: "致力于推广篮球运动,组织校内篮球联赛、训练活动和友谊赛。培养篮球人才,营造校园篮球文化氛围,让每位会员都能享受篮球带来的快乐。",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
    contact: "basketball@swjtu.edu.cn",
    leader: {
      name: "张勇",
      role: "协会会长",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      phone: "138****5678",
      email: "zhangyong@swjtu.edu.cn",
      bio: "校篮球队队长,省级篮球比赛MVP,国家一级篮球裁判",
    },
    activities: ["每周三次常规训练", "校内篮球联赛", "校际友谊赛", "篮球技巧培训"],
    joinRequirements: "热爱篮球运动,身体健康,遵守团队纪律",
  },
  {
    id: 3,
    name: "体育舞蹈协会",
    category: "体育运动",
    members: 120,
    description: "专注于拉丁舞、标准舞等体育舞蹈项目的推广与教学。提供专业的舞蹈训练,组织参加各类体育舞蹈比赛,培养优雅的舞蹈气质和竞技能力。",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&h=400&fit=crop",
    contact: "ballroom@swjtu.edu.cn",
    leader: {
      name: "张光志",
      role: "协会会长",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "zhangguangzhi@swjtu.edu.cn",
      bio: "体育舞蹈国家二级运动员,多次获得省级体育舞蹈比赛冠军",
    },
    activities: ["每周拉丁舞/标准舞训练", "双人舞配对", "季度汇报演出", "体育舞蹈等级考试"],
    joinRequirements: "对体育舞蹈感兴趣,有无基础均可,需保持规律出勤",
  },
  {
    id: 4,
    name: "青年志愿者协会",
    category: "公益服务",
    members: 350,
    description: "传承志愿精神,服务社会大众。开展社区服务、支教助学、环保活动、大型赛事志愿服务等,培养大学生的社会责任感和奉献精神。",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    contact: "volunteer@swjtu.edu.cn",
    leader: {
      name: "谢灵峰",
      role: "协会会长",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      email: "xielingfeng@swjtu.edu.cn",
      bio: "优秀志愿者,累计志愿服务时长超过500小时,获省级优秀志愿者称号",
    },
    activities: ["周末社区服务", "暑期支教", "环保公益活动", "大型赛事志愿服务"],
    joinRequirements: "热心公益,有责任感,每月至少参加一次志愿活动",
  },
  {
    id: 5,
    name: "ACM程序设计协会",
    category: "学术科技",
    members: 120,
    description: "专注于算法竞赛和编程能力提升,定期组织训练和比赛,培养计算机编程人才",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
    contact: "acm@swjtu.edu.cn",
    leader: {
      name: "李教授",
      role: "指导老师",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      email: "li@swjtu.edu.cn",
      bio: "计算机学院教授,ACM竞赛资深教练",
    },
    activities: ["每周算法训练", "月度编程比赛", "暑期集训营"],
    joinRequirements: "对编程有兴趣,有C/C++基础优先",
  },
  {
    id: 6,
    name: "创业协会",
    category: "创新创业",
    members: 150,
    description: "连接创业者与投资人,提供创业指导与资源对接",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    contact: "startup@swjtu.edu.cn",
    leader: {
      name: "王学长",
      role: "会长",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      email: "wang@swjtu.edu.cn",
      bio: "成功创业者,已获得天使投资",
    },
    activities: ["创业讲座", "项目路演", "投资人对接"],
    joinRequirements: "有创业想法或正在创业",
  },
]

// 保研/留学信息
export interface InfoItem {
  id: number
  title: string
  category: "保研" | "留学" | "考研" | "就业"
  summary: string
  content: string
  author: string
  date: string
  views: number
  tags: string[]
}

export const infoItems: InfoItem[] = [
  {
    id: 1,
    title: "2024年计算机专业保研全流程指南",
    category: "保研",
    summary: "从准备材料到面试技巧,全面解析计算机专业保研的每一个环节",
    content: "详细内容...",
    author: "张学长",
    date: "2024-03-15",
    views: 1234,
    tags: ["计算机", "保研", "面试"],
  },
  {
    id: 2,
    title: "美国Top30院校申请时间线规划",
    category: "留学",
    summary: "提前两年规划,详细到每个月该做什么,助你圆梦名校",
    content: "详细内容...",
    author: "李学姐",
    date: "2024-03-10",
    views: 892,
    tags: ["美国", "留学", "规划"],
  },
  {
    id: 3,
    title: "英国G5院校文书写作技巧分享",
    category: "留学",
    summary: "PS、RL、CV三大文书的核心要点与避坑指南",
    content: "详细内容...",
    author: "陈学姐",
    date: "2024-03-08",
    views: 756,
    tags: ["英国", "文书", "G5"],
  },
  {
    id: 4,
    title: "考研复试面试常见问题汇总",
    category: "考研",
    summary: "整理近五年各大高校复试面试真题,附参考答案",
    content: "详细内容...",
    author: "王学长",
    date: "2024-03-05",
    views: 2341,
    tags: ["考研", "复试", "面试"],
  },
]

// 成功案例
export interface SuccessStory {
  id: number
  studentName: string
  mentorName: string
  fromMajor: string
  toUniversity: string
  result: string
  testimonial: string
  avatar: string
}

export const successStories: SuccessStory[] = [
  {
    id: 1,
    studentName: "小明",
    mentorName: "张学长",
    fromMajor: "软件工程",
    toUniversity: "清华大学",
    result: "成功保研",
    testimonial: "感谢张学长的耐心指导,从简历修改到面试模拟,每一步都给了我很大帮助!",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    studentName: "小红",
    mentorName: "李学姐",
    fromMajor: "土木工程",
    toUniversity: "斯坦福大学",
    result: "获得全奖offer",
    testimonial: "李学姐的留学规划非常专业,帮我拿到了梦校的全奖,太感谢了!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    studentName: "小刚",
    mentorName: "陈学姐",
    fromMajor: "金融学",
    toUniversity: "LSE",
    result: "成功录取",
    testimonial: "文书修改了5遍,终于达到了理想的效果,陈学姐真的很负责!",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop",
  },
]

// 社交动态流数据(类似Facebook)
export interface Comment {
  id: number
  author: {
    name: string
    avatar: string
    verified: boolean
  }
  content: string
  timestamp: string
  likes: number
  liked?: boolean
}

export interface Post {
  id: number
  author: {
    name: string
    avatar: string
    role: string
    verified: boolean
  }
  content: string
  image?: string
  likes: number
  comments: number
  shares: number
  timestamp: string
  tags: string[]
  liked?: boolean
  commentList?: Comment[]
}

export const posts: Post[] = [
  {
    id: 1,
    author: {
      name: "张学长",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      role: "清华大学硕士",
      verified: true,
    },
    content: "🎉 喜报!今年帮助学弟成功保研到清华大学计算机系!从大一开始规划,经过三年的努力,终于圆梦。想分享给大家几点经验:\n\n1️⃣ GPA是基础,一定要保持在前10%\n2️⃣ 竞赛很重要,ACM/数学建模至少参加一个\n3️⃣ 科研经历必不可少,尽早进实验室\n4️⃣ 英语不能放松,六级550+是标配\n\n有任何问题欢迎私信咨询!💪",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    likes: 234,
    comments: 3,
    shares: 23,
    timestamp: "2小时前",
    tags: ["保研", "清华", "计算机"],
    liked: false,
    commentList: [
      {
        id: 1,
        author: {
          name: "李明",
          avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=400&h=400&fit=crop",
          verified: false,
        },
        content: "太厉害了！请问学长，大二开始准备来得及吗？",
        timestamp: "1小时前",
        likes: 12,
        liked: false,
      },
      {
        id: 2,
        author: {
          name: "王小红",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
          verified: true,
        },
        content: "收藏了！正在准备保研，这些经验很有帮助 🙏",
        timestamp: "45分钟前",
        likes: 8,
        liked: false,
      },
      {
        id: 3,
        author: {
          name: "张学长",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
          role: "清华大学硕士",
          verified: true,
        },
        content: "@李明 大二开始完全来得及！关键是做好规划，先把GPA提上去，然后参加1-2个有含金量的竞赛。加油！",
        timestamp: "30分钟前",
        likes: 15,
        liked: false,
      },
    ],
  },
  {
    id: 2,
    author: {
      name: "李学姐",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      role: "MIT博士",
      verified: true,
    },
    content: "✈️ 刚收到MIT的offer!回想申请季真的感慨万千。分享几个关键点:\n\n📝文书要突出个人特色,不要千篇一律\n🎯选校要有梯度,冲刺+匹配+保底\n💰奖学金要多关注,能省不少钱\n🗣️面试要提前准备,模拟练习很重要\n\n接下来会详细写一篇申请经验分享,敬请期待!",
    likes: 567,
    comments: 2,
    shares: 45,
    timestamp: "5小时前",
    tags: ["留学", "MIT", "美国"],
    liked: true,
    commentList: [
      {
        id: 4,
        author: {
          name: "赵同学",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
          verified: false,
        },
        content: "恭喜学姐！想问一下GRE需要考多少分？",
        timestamp: "4小时前",
        likes: 23,
        liked: false,
      },
      {
        id: 5,
        author: {
          name: "李学姐",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
          role: "MIT博士",
          verified: true,
        },
        content: "@赵同学 GRE我考了332（V162+Q170），但分数只是门槛，更重要的是科研经历和推荐信。建议把重心放在提升综合实力上~",
        timestamp: "3小时前",
        likes: 34,
        liked: false,
      },
    ],
  },
  {
    id: 3,
    author: {
      name: "王学长",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      role: "浙江大学硕士",
      verified: true,
    },
    content: "📚 今天整理了电气工程专业保研的核心知识点,包括:\n\n• 电路原理重点公式汇总\n• 电机学常见题型解析\n• 电力系统分析思维导图\n• 模电数电易错点整理\n\n需要的同学可以私信我获取PDF版本!祝大家保研顺利!🎓",
    likes: 189,
    comments: 2,
    shares: 67,
    timestamp: "昨天",
    tags: ["电气", "保研", "资料"],
    liked: false,
    commentList: [
      {
        id: 6,
        author: {
          name: "陈同学",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
          verified: false,
        },
        content: "已私信！求PDF资料，谢谢学长！",
        timestamp: "20小时前",
        likes: 5,
        liked: false,
      },
      {
        id: 7,
        author: {
          name: "林华",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
          verified: false,
        },
        content: "电气保研竞争好激烈，这些资料太及时了 👍",
        timestamp: "18小时前",
        likes: 7,
        liked: false,
      },
    ],
  },
  {
    id: 4,
    author: {
      name: "陈学姐",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      role: "LSE金融硕士",
      verified: true,
    },
    content: "💼 分享一下我在投行实习的经历:\n\n第一周:熟悉业务流程,学习估值模型\n第二周:开始参与项目,做行业研究\n第三周:独立搭建DCF模型\n第四周:向MD汇报分析结果\n\n最大的收获:\n✅ 专业技能大幅提升\n✅ 建立了宝贵的人脉网络\n✅ 明确了职业发展方向\n\n想去金融行业的同学一定要尽早实习!",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    likes: 345,
    comments: 1,
    shares: 34,
    timestamp: "2天前",
    tags: ["金融", "实习", "投行"],
    liked: false,
    commentList: [
      {
        id: 8,
        author: {
          name: "金融学渣",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
          verified: false,
        },
        content: "学姐太强了！请问投行实习怎么找的啊？有什么渠道推荐吗？",
        timestamp: "1天前",
        likes: 18,
        liked: false,
      },
    ],
  },
  {
    id: 5,
    author: {
      name: "刘学长",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      role: "上海交大硕士",
      verified: true,
    },
    content: "🏆 挑战杯全国特等奖作品分享!\n\n项目名称:智能交通信号优化系统\n核心技术:\n• 深度学习图像识别\n• 强化学习算法优化\n• 物联网数据采集\n• 大数据分析与预测\n\n团队历时8个月,迭代了十几个版本。过程中遇到了很多困难,但坚持下来就是胜利!有对创新创业感兴趣的同学可以交流~",
    likes: 278,
    comments: 0,
    shares: 45,
    timestamp: "3天前",
    tags: ["创新", "竞赛", "挑战杯"],
    liked: false,
    commentList: [],
  },
]

// 用户个人资料
export interface UserProfile {
  id: number
  name: string
  avatar: string
  coverPhoto: string
  bio: string
  major: string
  grade: string
  university: string
  interests: string[]
  followers: number
  following: number
  posts: number
  achievements: string[]
  socialLinks: {
    wechat?: string
    email?: string
    github?: string
  }
}

export const currentUser: UserProfile = {
  id: 1,
  name: "云凌管理员",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
  coverPhoto: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=400&fit=crop",
  bio: "云凌书驿创始人 | 致力于打破信息差,连接每一位学子",
  major: "计算机科学与技术",
  grade: "2020级",
  university: "西南交通大学",
  interests: ["编程", "创业", "摄影", "旅行"],
  followers: 1234,
  following: 567,
  posts: 89,
  achievements: ["平台创始人", "优秀创业者", "技术达人"],
  socialLinks: {
    wechat: "yunling2024",
    email: "admin@yunling.com",
    github: "yunling",
  },
}

// 好友系统数据
export interface FriendRequest {
  id: number
  from_user: {
    id: number
    name: string
    avatar: string
    mutual_friends: number
  }
  message?: string
  timestamp: string
}

export interface Friend {
  id: number
  name: string
  avatar: string
  mutual_friends: number
  common_interests: string[]
  last_active: string
  online: boolean
}

export const friendRequests: FriendRequest[] = [
  {
    id: 1,
    from_user: {
      id: 2,
      name: "李学姐",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      mutual_friends: 5,
    },
    message: "你好!我是MIT的李学姐,很高兴认识你!",
    timestamp: "2小时前",
  },
  {
    id: 2,
    from_user: {
      id: 3,
      name: "王学长",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      mutual_friends: 3,
    },
    timestamp: "昨天",
  },
]

export const friends: Friend[] = [
  {
    id: 2,
    name: "李学姐",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    mutual_friends: 5,
    common_interests: ["留学", "科研"],
    last_active: "在线",
    online: true,
  },
  {
    id: 3,
    name: "王学长",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    mutual_friends: 3,
    common_interests: ["保研", "电气"],
    last_active: "5分钟前",
    online: true,
  },
  {
    id: 4,
    name: "陈学姐",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    mutual_friends: 8,
    common_interests: ["金融", "留学"],
    last_active: "1小时前",
    online: false,
  },
  {
    id: 5,
    name: "刘学长",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    mutual_friends: 2,
    common_interests: ["创新", "竞赛"],
    last_active: "3小时前",
    online: false,
  },
]

// 推荐好友数据
export interface RecommendedUser {
  id: number
  name: string
  avatar: string
  role: string
  university?: string
  major?: string
  mutual_friends: number
  common_interests: string[]
  reason: string
  match_score: number
  verified: boolean
}

export const recommendedUsers: RecommendedUser[] = [
  {
    id: 10,
    name: "赵学姐",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    role: "北京大学硕士",
    university: "北京大学",
    major: "外国语学院",
    mutual_friends: 4,
    common_interests: ["编程", "摄影"],
    reason: "与您有4个共同好友，且都对摄影感兴趣",
    match_score: 92,
    verified: true,
  },
  {
    id: 11,
    name: "孙同学",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    role: "西南交通大学本科生",
    university: "西南交通大学",
    major: "软件工程",
    mutual_friends: 2,
    common_interests: ["编程", "创业"],
    reason: "同校校友，专业相关，有共同兴趣",
    match_score: 88,
    verified: false,
  },
  {
    id: 12,
    name: "周学长",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    role: "清华大学博士",
    university: "清华大学",
    major: "人工智能",
    mutual_friends: 6,
    common_interests: ["编程", "旅行"],
    reason: "与您有6个共同好友，AI领域专家",
    match_score: 95,
    verified: true,
  },
  {
    id: 13,
    name: "吴同学",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    role: "复旦大学本科生",
    university: "复旦大学",
    major: "计算机科学",
    mutual_friends: 1,
    common_interests: ["编程", "摄影", "旅行"],
    reason: "与您有3个共同兴趣，可能认识的人",
    match_score: 78,
    verified: false,
  },
  {
    id: 14,
    name: "郑学姐",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    role: "斯坦福大学硕士",
    university: "斯坦福大学",
    major: "计算机科学",
    mutual_friends: 3,
    common_interests: ["创业", "旅行"],
    reason: "创业领域前辈，有共同兴趣",
    match_score: 85,
    verified: true,
  },
]

// 通知系统数据
export interface Notification {
  id: number
  type: 'friend_request' | 'message' | 'like' | 'comment' | 'mention' | 'system' | 'new_post'
  title: string
  content: string
  avatar?: string
  link?: string
  read: boolean
  timestamp: string
}

export const notifications: Notification[] = [
  {
    id: 1,
    type: 'friend_request',
    title: '新的好友请求',
    content: '李学姐想要加你为好友',
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    link: '/friends/requests',
    read: false,
    timestamp: '2小时前',
  },
  {
    id: 2,
    type: 'like',
    title: '有人赞了你的动态',
    content: '张学长等12人赞了你的动态',
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    link: '/feed',
    read: false,
    timestamp: '3小时前',
  },
  {
    id: 3,
    type: 'comment',
    title: '新评论',
    content: '王学长评论了你的动态: "写得很好!"',
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    link: '/feed',
    read: false,
    timestamp: '5小时前',
  },
  {
    id: 4,
    type: 'new_post',
    title: '好友发布了新动态',
    content: '陈学姐分享了留学申请经验',
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    link: '/feed',
    read: true,
    timestamp: '昨天',
  },
  {
    id: 5,
    type: 'system',
    title: '系统通知',
    content: '欢迎加入云凌书驿!完善资料可获得VIP体验券',
    link: '/profile',
    read: true,
    timestamp: '昨天',
  },
]

// 私信聊天数据
export interface Message {
  id: number
  sender_id: number
  receiver_id: number
  content: string
  type: 'text' | 'image'
  read: boolean
  timestamp: string
}

export interface Conversation {
  user: {
    id: number
    name: string
    avatar: string
    online: boolean
  }
  last_message: {
    content: string
    timestamp: string
    unread_count: number
  }
}

export const conversations: Conversation[] = [
  {
    user: {
      id: 2,
      name: "李学姐",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      online: true,
    },
    last_message: {
      content: "好的,有问题随时联系我!",
      timestamp: "10分钟前",
      unread_count: 2,
    },
  },
  {
    user: {
      id: 3,
      name: "王学长",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      online: true,
    },
    last_message: {
      content: "保研面试要注意这几点...",
      timestamp: "1小时前",
      unread_count: 0,
    },
  },
  {
    user: {
      id: 4,
      name: "陈学姐",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      online: false,
    },
    last_message: {
      content: "文书修改好了,发你看看",
      timestamp: "昨天",
      unread_count: 1,
    },
  },
]
