import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { NextPage } from 'next'
import React, { useRef, useState } from 'react'
import { VscArrowSwap } from 'react-icons/vsc'
import { IoMdClose } from 'react-icons/io'
import { AiFillSound } from 'react-icons/ai'
import { MdContentCopy } from 'react-icons/md'
import Link from 'next/link'
import toast from 'react-hot-toast'

const Translator: NextPage = () => {
  const [reverse, setReverse] = useState(false)
  const [output, setOutput] = useState('')
  const inputRef = useRef<HTMLSpanElement | null>(null)
  const outputRef = useRef<HTMLParagraphElement | null>(null)

  const clearInput = () => {
    inputRef!.current!.textContent = ""
    outputRef!.current!.textContent = ""
  }

  const copyText = () => {
    navigator.clipboard.writeText(output)
		toast.success("Copied to clipboard")
  }

  const translite_lat: { [key: string]: any } = {
    А: 'A',
    а: 'a',
    Ә: 'Á',
    ә: 'á',
    Б: 'B',
    б: 'b',
    Д: 'D',
    д: 'd',
    Е: 'E',
    е: 'e',
    Ф: 'F',
    ф: 'f',
    Ғ: 'Ǵ',
    ғ: 'ǵ',
    Г: 'G',
    г: 'g',
    Х: 'H',
    х: 'h',
    І: 'I',
    i: 'i',
    И: 'I',
    и: 'ı',
    Й: 'I',
    й: 'ı',
    H: 'H',
    h: 'h',
    Ж: 'J',
    ж: 'j',
    К: 'K',
    к: 'k',
    Л: 'L',
    л: 'l',
    М: 'M',
    м: 'm',
    Н: 'N',
    н: 'n',
    Ң: 'Ń',
    ң: 'ń',
    О: 'O',
    о: 'o',
    Ө: 'Ó',
    ө: 'ó',
    П: 'P',
    п: 'p',
    Қ: 'Q',
    қ: 'q',
    Р: 'R',
    р: 'r',
    Ш: 'Sh',
    ш: 'sh',
    С: 'S',
    с: 's',
    Т: 'T',
    т: 't',
    Ұ: 'U',
    ұ: 'u',
    Ү: 'Ú',
    ү: 'ú',
    В: 'V',
    в: 'v',
    Ы: 'Y',
    ы: 'y',
    У: 'Ý',
    у: 'ý',
    З: 'Z',
    з: 'z',
    Ч: 'Ch',
    ч: 'ch',
    Э: 'E',
    э: 'e',
    Щ: '',
    щ: '',
    ь: '',
    ъ: '',
  }

  const translite_kaz: { [key: string]: any } = {
    Á: 'Ә',
    á: 'ә',
    A: 'А',
    a: 'а',
    B: 'Б',
    b: 'б',
    D: 'Д',
    d: 'д',
    E: 'Е',
    e: 'е',
    F: 'Ф',
    f: 'ф',
    Ǵ: 'Ғ',
    ǵ: 'ғ',
    G: 'Г',
    g: 'г',
    H: 'Х',
    h: 'х',
    I: 'І',
    i: 'i',
    İ: 'И',
    ı: 'и',
    J: 'Ж',
    j: 'ж',
    K: 'К',
    k: 'к',
    L: 'Л',
    l: 'л',
    M: 'М',
    m: 'м',
    Ń: 'Ң',
    ń: 'ң',
    N: 'Н',
    n: 'н',
    Ó: 'Ө',
    ó: 'ө',
    O: 'О',
    o: 'о',
    P: 'П',
    p: 'п',
    Q: 'Қ',
    q: 'қ',
    R: 'Р',
    r: 'р',
    Sh: 'Ш',
    sh: 'ш',
    S: 'С',
    s: 'с',
    T: 'Т',
    t: 'т',
    Ú: 'Ү',
    ú: 'ү',
    U: 'Ұ',
    u: 'ұ',
    V: 'В',
    v: 'в',
    Ý: 'У',
    ý: 'у',
    Z: 'З',
    z: 'з',
    Ch: 'Ч',
    ch: 'ч',
    Y: 'Ы',
    y: 'ы',
    Shc: 'Щ',
    shc: 'щ',
  }

  const _translate_kaz: { [key: string]: any } = {
    Iá: 'Иә',
    ıá: 'иә',
    Ia: 'Я',
    ıa: 'я',
    Iý: 'Ю',
    ıý: 'ю',
  }

  const _translate_lat: { [key: string]: any } = {
    Я: 'Ia',
    я: 'ıa',
    Ю: 'Iý',
    ю: 'ıý',
    Ц: 'Ts',
    ц: 'ts',
  }

  const scriptChange = () => {
    setReverse(!reverse)
  }

  const convert_to_kaz = (text: string) => {
    for (var key in _translate_kaz) {
      text = text.replaceAll(key.toString(), _translate_kaz[key])
    }

    for (key in translite_kaz) {
      text = text.replaceAll(key.toString(), translite_kaz[key])
    }

    return text
  }

  const convert_to_lat = (text: string) => {
    for (var key in _translate_lat) {
      text = text.replaceAll(key.toString(), _translate_lat[key])
    }

    for (key in translite_lat) {
      text = text.replaceAll(key.toString(), translite_lat[key])
    }

    return text
  }

  const translate = (value: string) => {
    var result = ''
    if (!reverse) {
      result = convert_to_lat(value)
    } else {
      result = convert_to_kaz(value)
    }

    setOutput(result)
  }

  return (
    <>
      <Navbar />
      <section className="flex w-full flex-col space-y-8 px-8 py-10 shadow-2xl md:px-20 lg:px-40">
        <p className="text-3xl font-semibold">Cirillyc - Latin Translator</p>
        <div className="rounded-lg border border-gray-300 ">
          <div className="flex flex-wrap">
            <div className="w-2/5 px-7 py-3 relative">
              <p className="text-2xl">{reverse ? 'Latin' : 'Cyrillic'}</p>
            </div>
            <div className="flex w-1/5 items-center justify-center">
              <Link href={''}>
                <a className="">
                  <VscArrowSwap onClick={scriptChange} className="h-8 w-8" />
                </a>
              </Link>
            </div>
            <div className="w-2/5 py-3">
              <p className="text-2xl">{reverse ? 'Cyrillic' : 'Latin'}</p>
            </div>
            <div className="h-px w-full bg-gray-300"></div>
          </div>
          <div className="flex flex-col md:flex-row min-h-[300px]">
            <div className="relative h-full w-full rounded-bl-lg md:w-1/2 flex p-6">
              <span className="textarea-translator w-[90%] flex-1 min-h-[300px] resize-none overflow-auto bg-transparent outline-none border-none text-xl" role="textbox" contentEditable ref={inputRef} onInput={e => translate(e.currentTarget.textContent as string)}> </span>
              <div>
                <IoMdClose onClick={clearInput} className="h-8 w-8 cursor-pointer" />
              </div>
              {/* <img
                className="absolute bottom-5 left-5 h-7 w-7"
                src="/images/sound.png"
              /> */}
            </div>
            <div className='flex flex-row relative min-h-[300px] w-full md:w-1/2 bg-gray-area p-6 rounded-br-lg border-none '>
              <p className="ml-px block overflow-y-auto break-words text-left text-xl" ref={outputRef}>
                {output}
                {/* <img
                className="absolute bottom-5 left-5 h-7 w-7"
                src="/images/sound.png"
              /> */}
              </p>
              <div>
                <MdContentCopy onClick={copyText} className="absolute bottom-5 right-5 h-8 w-8 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Translator
