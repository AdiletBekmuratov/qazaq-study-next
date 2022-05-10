export interface Categories {
  name: string
}

export interface PartOfSpeech {
  name: string
}

export interface Meanings {
	id: number
  translation: string
  definition: string
  example: string
  exampleTranslated: string
  partOfSpeech: PartOfSpeech
  synonyms: { words_id: Pick<Word, 'word'> }[]
  antonyms: { words_id: Pick<Word, 'word'> }[]
}

export interface Word {
	id: number
  word: string
  phonetic: string
  slug: string
  image: { id: string }
  categories: { categories_id: Categories }[]
  meanings: { meanings_id: Meanings }[]
}
