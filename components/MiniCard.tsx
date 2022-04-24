import React from 'react'
import Link from 'next/link';
import { IconType } from 'react-icons/lib';



interface data {
	amount: number;
	type: string;
	icon: IconType
}



const MiniCard = (props: data) => {
	return (
		<>
			<div className='border-2 w-56 flex flex-col space-y-3 px-12 py-10 items-center border-gray-200 rounded-lg'>
				<div className='flex space-x-3'>
					<div className='text-red-600 text-4xl'>
						{React.createElement(props.icon)}
					</div>
					<h3>{props.amount}</h3>
				</div>
				<h4 className='text-xl'>{props.type}</h4>
				<Link href={""}>
					<a className='text-dark-blue text-lg underline'>
						More
					</a>
				</Link>

			</div>
		</>
	)
}

export default MiniCard