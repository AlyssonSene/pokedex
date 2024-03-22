import React, { useCallback, useEffect } from 'react'
import HomepageOrganism from '../../components/organisms/HomepageOrganism'
import { UseAppContext } from '../../context/hook'
import { IPokemons } from '../../interfaces/pokeInterface'
import { getAll } from '../../utils/getPokemons'

const Homepage: React.FC = () => {
	const { state } = UseAppContext()
	const getPokemons = useCallback(async () => {
		try {
			const data = await getAll('?limit=100&offset=0')
			const pokemonsWithId = data.results.map(
				(pokemon: IPokemons, index: number) => ({
					...pokemon,
					id: (index + 1).toString(),
					gifUrl: `/pokemons/poke_${index + 1}.gif`
				})
			)
			state.setPokemons(pokemonsWithId)
		} catch (error) {
			console.log(error)
		}
	}, [state])

	useEffect(() => {
		if (state.pokemons.length === 0 || state.pokemons == null) {
			getPokemons()
		}
	})
	return <HomepageOrganism />
}

export default Homepage
