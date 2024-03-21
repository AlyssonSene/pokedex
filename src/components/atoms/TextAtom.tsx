import React from 'react'
import { ITextAtom } from '../../interfaces/atomsInterface'

const TextAtom: React.FC<ITextAtom> = ({ type, text }) => {
	const Tag = `${type}` as keyof JSX.IntrinsicElements
	return <Tag>{text}</Tag>
}

export default TextAtom
