import { ReactNode, useState } from 'react'
import { AppContext, IAppState } from '.'
import { IPokemons } from '../interfaces/pokeInterface'

interface IPropsProvider {
	children: ReactNode
}

export const AppContextProvider = ({ children }: IPropsProvider) => {
	const [pokemons, setPokemons] = useState<IPokemons[] | []>([])

	const INITIAL_STATE: IAppState = { pokemons, setPokemons }
	return (
		<AppContext.Provider value={{ state: INITIAL_STATE }}>
			{children}
		</AppContext.Provider>
	)
}
