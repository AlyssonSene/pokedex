import { Dispatch, SetStateAction, createContext } from 'react'
import { IPokemons } from '../interfaces/pokeInterface'

export interface IAppState {
	pokemons: IPokemons[] | []
	setPokemons: Dispatch<SetStateAction<IPokemons[] | []>>
}

export const INITIAL_STATE: IAppState = {
	pokemons: [],
	setPokemons: () => {}
}

export const AppContext = createContext({ state: INITIAL_STATE })
