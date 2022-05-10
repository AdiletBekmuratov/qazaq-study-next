import Card from '@/components/Card'
import Footer from '@/components/Footer'
import MainWrapper from '@/components/MainWrapper'
import { getAllWords } from '@/helpers/requests'
import { Word } from '@/types/Words'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

interface VocProps {
  words: Word[]
}

const Vocabulary: NextPage<VocProps> = ({ words }) => {
  const [word, setWord] = useState<Word>(words[0])

  const handleOnSelect = (item: Word) => {
    setWord(item)
  }

  return (
    <MainWrapper>
      <section className="container mx-auto flex flex-col space-y-4 px-5 py-10">
        <ReactSearchAutocomplete<Word>
          items={words}
          onSelect={handleOnSelect}
          fuseOptions={{
            keys: ['word'],
          }}
          resultStringKeyName="word"
        />

        <Card
          id={word.id}
          categories={word.categories}
          image={word.image}
          meanings={word.meanings}
          phonetic={word.phonetic}
          slug={word.slug}
          word={word.word}
        />
      </section>

      <Footer />
    </MainWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  const words = await getAllWords(session?.user?.accessToken)
  return { props: { words } }
}

export default Vocabulary
