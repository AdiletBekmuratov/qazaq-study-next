export interface Option {
  id: number
  text: string
}

export interface Question {
  id: number
  text: string
  image: { id: string }
  options: Option[]
  answers: Option[]
  quizzes: Quiz[]
}

export interface Quiz {
	id: number
  title: string
  description: string
	slug: string
	minScore: number
  image?: { id: string }
  scores: { score?: number }[]
  questions: { question_id: Question }[]
}
