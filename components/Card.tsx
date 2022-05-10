import getImageURL from '@/helpers/getImageURL'
import { Word } from '@/types/Words'
import React from 'react'

const Card = ({
  word,
  categories,
  id,
  image,
  meanings,
  phonetic,
  slug,
}: Word) => {
  return (
    <>
      <div className="container mx-auto flex flex-col space-y-5 rounded-lg">
        <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
          <div className="flex w-full flex-col space-y-4 lg:w-1/2">
            <h3>{word}</h3>
            <h5 className="font-bold text-dark-blue">
              {categories.map((category, index) =>
                index !== 0 ? ', ' + category.categories_id.name : category.categories_id.name
              )}
            </h5>
            <div className="flex space-x-4">
              <img className="h-6 w-6" src="/images/sound.png" />
              <h5>{phonetic}</h5>
            </div>
          </div>
          <div className="flex h-96 w-full justify-center lg:w-1/2 lg:justify-end">
            <img src={getImageURL(image.id, 'fit=cover')} alt={image.id} />
          </div>
        </div>
        <div className="h-1 bg-dark-blue "></div>

        {meanings.map(({ meanings_id }) => (
          <>
            <div className="flex flex-col space-y-8">
              <div>
                <h3>{meanings_id.translation}</h3>
                <h5 className="font-bold text-dark-blue">
                  {meanings_id.partOfSpeech.name}
                </h5>
                <p className="text-md xl:text-xl">{meanings_id.definition}</p>
                <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
                  <p className="text-md w-full lg:w-1/2 xl:text-xl">
                    {meanings_id.example}
                  </p>
                  <p className="text-md w-full lg:w-1/2 xl:text-xl">
                    {meanings_id.exampleTranslated}
                  </p>
                </div>
                <div className="mt-3 h-px bg-gray-300"></div>
              </div>
            </div>

            <div className="h-1 bg-dark-blue "></div>

            <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
              <div className="w-full lg:w-1/2">
                <h4 className="text-2xl text-dark-blue">Synonyms</h4>
                <p className="text-md mt-3 xl:text-xl">
                  {meanings_id.synonyms.map((synonym, index) =>
                    index !== 0
                      ? ', ' + synonym.words_id.word
                      : synonym.words_id.word
                  )}
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <h4 className="text-2xl text-dark-blue">Antonyms</h4>
                <p className="text-md mt-3 xl:text-xl">
                  {meanings_id.antonyms.map((antonym, index) =>
                    index !== 0
                      ? ', ' + antonym.words_id.word
                      : antonym.words_id.word
                  )}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Card
