type abilities = {
	ability: { name: string }
}

type types = {
	type: { name: string }
}

export interface PokemonData {
	weight: number
	height: number
	abilities: abilities[]
	types: types[]
}

export interface IDialog {
	isOpen: boolean
	onClose: () => void
	gifUrl: string
	pokemonName: string
	pokemonData: PokemonData
}
