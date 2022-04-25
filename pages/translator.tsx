import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { VscArrowSwap } from 'react-icons/vsc'
import { IoMdClose } from 'react-icons/io'
import { AiFillSound } from 'react-icons/ai'
import Link from 'next/link'


const translator: NextPage = () => {

	const [reverse, setReverse] = useState(false)
	const [output, setOutput] = useState('')


	const translite_lat: { [key: string]: any } = {
		А: "A", а: "a",
		Ә: "Á", ә: "á",
		Б: "B", б: "b",
		Д: "D", д: "d",
		Е: "E", е: "e",
		Ф: "F", ф: "f",
		"Ғ": "Ǵ", "ғ": "ǵ",
		Г: "G", г: "g",
		Х: "H", х: "h",
		І: "I", i: "i",
		И: "I", и: "ı",
		Й: "I", й: "ı",
		H: "H", h: "h",
		Ж: "J", ж: "j",
		К: "K", к: "k",
		Л: "L", л: "l",
		М: "M", м: "m",
		Н: "N", н: "n",
		Ң: "Ń", ң: "ń",
		О: "O", о: "o",
		Ө: "Ó", ө: "ó",
		П: "P", п: "p",
		Қ: "Q", қ: "q",
		Р: "R", р: "r",
		Ш: "Sh", ш: "sh",
		С: "S", с: "s",
		Т: "T", т: "t",
		Ұ: "U", ұ: "u",
		Ү: "Ú", ү: "ú",
		В: "V", в: "v",
		Ы: "Y", ы: "y",
		У: "Ý", у: "ý",
		З: "Z", з: "z",
		Ч: "Ch", ч: "ch",
		Э: "E", э: "e",
		Щ: "", щ: "",
		ь: '',
		ъ: '',

	};

	const translite_kaz: { [key: string]: any } = {
		"Á": "Ә", "á": "ә",
		"A": "А", "a": "а",
		"B": "Б", "b": "б",
		"D": "Д", "d": "д",
		"E": "Е", "e": "е",
		"F": "Ф", "f": "ф",
		"Ǵ": "Ғ", "ǵ": "ғ",
		"G": "Г", "g": "г",
		"H": "Х", "h": "х",
		"I": "І", "i": "i",
		"İ": "И", "ı": "и",
		"J": "Ж", "j": "ж",
		"K": "К", "k": "к",
		"L": "Л", "l": "л",
		"M": "М", "m": "м",
		"Ń": "Ң", "ń": "ң",
		"N": "Н", "n": "н",
		"Ó": "Ө", "ó": "ө",
		"O": "О", "o": "о",
		"P": "П", "p": "п",
		"Q": "Қ", "q": "қ",
		"R": "Р", "r": "р",
		"Sh": "Ш", "sh": "ш",
		"S": "С", "s": "с",
		"T": "Т", "t": "т",
		"Ú": "Ү", "ú": "ү",
		"U": "Ұ", "u": "ұ",
		"V": "В", "v": "в",
		"Ý": "У", "ý": "у",
		"Z": "З", "z": "з",
		"Ch": "Ч", "ch": "ч",
		"Y": "Ы", "y": "ы",
		"Shc": "Щ", "shc": "щ"

	};

	const _translate_kaz: { [key: string]: any } = {
		"Iá": "Иә", "ıá": "иә",
		"Ia": "Я", "ıa": "я",
		"Iý": "Ю", "ıý": "ю",
	};

	const _translate_lat: { [key: string]: any } = {
		Я: "Ia", я: "ıa",
		Ю: "Iý", ю: "ıý",
		Ц: "Ts", ц: "ts"

	};

	const scriptChange = () => {
		setReverse(!reverse)
	}

	const convert_to_kaz = (text: string) => {
		for (var key in _translate_kaz) {
			text = text.replaceAll(key.toString(), _translate_kaz[key]);
		}

		for (key in translite_kaz) {
			text = text.replaceAll(key.toString(), translite_kaz[key]);
		}

		return text;
	};

	const convert_to_lat = (text: string) => {
		for (var key in _translate_lat) {
			text = text.replaceAll(key.toString(), _translate_lat[key]);
		}

		for (key in translite_lat) {
			text = text.replaceAll(key.toString(), translite_lat[key]);
		}

		return text;
	};

	const translate = (event: { target: { value: any } }) => {
		var result = ''
		if (!reverse) {
			result = convert_to_lat(event.target.value)
		} else {
			result = convert_to_kaz(event.target.value)
		}

		setOutput(result)
	}

	return (
		<>
			<Navbar />
			<section className='w-full px-8 md:px-20 lg:px-40 shadow-2xl py-10'>
				<p className='text-3xl font-semibold py-8'>Cirillyc - Latin Translator</p>
				<div className='border rounded-lg border-gray-300 '>
					<div className='flex flex-wrap'>
						<div className='w-2/5 px-7 py-3'>

							<p className='text-2xl'>{reverse ? 'Latin' : 'Cyrillic'}</p>
						</div>
						<div className='w-1/5 flex justify-center items-center'>
							<Link href={''}>
								<a className=''>
									<VscArrowSwap onClick={scriptChange} className='w-8 h-8' />
								</a>
							</Link>
						</div>
						<div className='w-2/5 py-3'>
							<p className='text-2xl'>{reverse ? 'Cyrillic' : 'Latin'}</p>
						</div>
						<div className='w-full bg-gray-300 h-px'></div>
					</div>
					<div className='flex flex-col md:flex-row'>
						<div className='h-[300px] w-full md:w-1/2 rounded-bl-lg relative'>
							<IoMdClose className='w-8 h-8 absolute right-3 top-3' />
							<textarea placeholder="Type here!" rows={9} className='w-full px-6 py-6 resize-none text-xl border-none rounded-bl-lg' onChange={translate} ></textarea>
							<img className='w-7 h-7 absolute bottom-5 left-5' src="/images/sound.png" />
						</div>
						<p className='w-full md:w-1/2 ml-px relative bg-gray-area h-[300px] rounded-br-lg px-6 py-6  text-xl text-left border-none break-words overflow-y-auto block'>
							<IoMdClose className='w-8 h-8 absolute right-3 top-3' />
							{output}
							<img className='w-7 h-7 absolute bottom-5 left-5' src="/images/sound.png" />

						</p>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default translator