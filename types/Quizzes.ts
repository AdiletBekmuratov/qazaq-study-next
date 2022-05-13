export interface Option {
  id: number
  text: string
}

export interface Question {
  id: string
  text: string
  image: { id: string }
  options: Option[]
  answers: Option[]
  quizzes: Quiz[]
}

export interface Quiz {
  id: string
  title: string
  description: string
  slug: string
  minScore: number
  image?: { id: string }
  scores: { score?: number }[]
  questions: { questions_id: Question }[]
  achievements: Achievement[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  image: { id: string }
  date_created: string
  userAchievments: { user: string }[]
}
