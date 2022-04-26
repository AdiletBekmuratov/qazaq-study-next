import React from 'react'

interface CardInfo {
  qaz_word: String
  type: String
  transcript: String
  eng_word: String
  category: String
  description: String
  image: JSX.Element
  example: String[]
  synonyms: String[]
  acronyms: String[]
}

const Card = ({
  qaz_word,
  type,
  transcript,
  eng_word,
  category,
  description,
  image,
  example,
  synonyms,
  acronyms,
}: CardInfo) => {
  return (
    <>
      <div className="container mx-auto flex flex-col space-y-5 rounded-lg ">
        <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
          <div className="flex w-full flex-col space-y-4 lg:w-1/2">
            <h3>{qaz_word}</h3>
            <h5 className="font-bold text-dark-blue">{type}</h5>
            <div className="flex space-x-4">
              <img className="h-6 w-6" src="/images/sound.png" />
              <h5>{transcript}</h5>
            </div>
            <h3>{eng_word}</h3>
            <h5 className="font-bold text-dark-blue">{category}</h5>
            <p className="text-md xl:text-xl">{description}</p>
          </div>
          <div className="flex h-96 w-full justify-center lg:w-1/2 lg:justify-end">
            {image}
          </div>
        </div>
        <div className="h-1 bg-dark-blue "></div>

        <div className="flex flex-col space-y-8">
          <div>
            <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
              <p className="text-md w-full lg:w-1/2 xl:text-xl">{example[0]}</p>
              <p className="text-md w-full lg:w-1/2 xl:text-xl">{example[1]}</p>
            </div>
            <div className="mt-3 h-px bg-gray-300"></div>
          </div>
          <div>
            <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
              <p className="text-md w-full lg:w-1/2 xl:text-xl">{example[0]}</p>
              <p className="text-md w-full lg:w-1/2 xl:text-xl">{example[1]}</p>
            </div>
            <div className="mt-3 h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="h-1 bg-dark-blue "></div>

        <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-1/2">
            <h4 className="text-2xl text-dark-blue">Synonyms</h4>
            <p className="text-md mt-3 xl:text-xl">
              {synonyms[0]}, {synonyms[1]}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <h4 className="text-2xl text-dark-blue">Acronyms</h4>
            <p className="text-md mt-3 xl:text-xl">
              {acronyms[0]}, {acronyms[1]}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
