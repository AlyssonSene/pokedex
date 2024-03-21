import React from 'react'
import { IImageAtom } from '../../interfaces/atomsInterface'

const ImageAtom: React.FC<IImageAtom> = ({ url, alt }) => {
	return <img alt={alt} src={url} />
}

export default ImageAtom
