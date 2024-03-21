export interface IImageAtom {
	url: string
	alt: string
}

export interface ITextAtom {
	type: string
	text: string | number
}

export interface ICards {
	pokemonName: string
}

export interface IButton {
	name: string
	handleClick: () => void
	disabled: boolean
}

export interface IPagination {}
