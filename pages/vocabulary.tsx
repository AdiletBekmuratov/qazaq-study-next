import Card from '@/components/Card'
import Footer from '@/components/Footer'
import MainWrapper from '@/components/MainWrapper'
import { NextPage } from 'next'

const Vocabulary: NextPage = () => {
  return (
    <MainWrapper>
      <section className="container mx-auto flex flex-col space-y-40 px-5 py-10">
        <Card
          qaz_word={'сөз'}
          type={'noun'}
          transcript={'/ soz’ /'}
          eng_word={'word'}
          category={'category'}
          image={<img className="w-full" src="/images/genshin.png" />}
          description={
            'a single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed.'
          }
          example={[
            'Cөз сөзінің қолданылу мысалы осы жерде  - пример',
            'Translation of example of word on the left blablablaa',
          ]}
          synonyms={['сөз, сөздіңсинонимы', 'сөздіңсинонимы2']}
          acronyms={['сөз, сөздіңсинонимы', 'сөздіңсинонимы2']}
        />
        <Card
          qaz_word={'сөз'}
          type={'noun'}
          transcript={'/ soz’ /'}
          eng_word={'word'}
          category={'category'}
          image={
            <img className="w-full object-fill" src="/images/dostar.png" />
          }
          description={
            'express (something spoken or written) in particular words сияқты өтірік сөздер'
          }
          example={[
            'Cөз сөзінің қолданылу мысалы осы жерде  - пример',
            'Translation of example of word on the left blablablaa',
          ]}
          synonyms={['сөз, сөздіңсинонимы', 'сөздіңсинонимы2']}
          acronyms={['сөз, сөздіңсинонимы', 'сөздіңсинонимы2']}
        />
      </section>

      <Footer />
    </MainWrapper>
  )
}

export default Vocabulary
