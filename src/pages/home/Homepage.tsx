import React, { useCallback, useEffect } from 'react'
import HomepageOrganism from '../../components/organisms/HomepageOrganism'
import { UseAppContext } from '../../context/hook'
import { getAll } from '../../utils/getPokemons'

const Homepage: React.FC = () => {
	const { state } = UseAppContext()
	const getPokemons = useCallback(async () => {
		try {
			const data = await getAll('?limit=100&offset=0')

			state.setPokemons(data.data.results)
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
