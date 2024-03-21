import React, { useState } from 'react'
import { UseAppContext } from '../../context/hook'
import * as C from '../../styles/homeStyles'
import ButtonAtom from '../atoms/ButtonAtom'
import TextAtom from '../atoms/TextAtom'
import CardsMolecule from '../molecules/CardsMolecule'
import HeaderMolecule from '../molecules/HeaderMolecule'

const HomepageOrganism: React.FC = () => {
	const { state } = UseAppContext()
	const [currentPage, setCurrentPage] = useState(1)
	const startIndex = (currentPage - 1) * 10
	const endIndex = startIndex + 10
	return (
		<C.HomeContainer>
			<HeaderMolecule />
			<C.CardsContainer>
				{state.pokemons &&
					state.pokemons.slice(startIndex, endIndex).map((pokemon, index) => {
						return (
							<CardsMolecule
								gifUrl={pokemon.gifUrl}
								key={index}
								pokemonName={pokemon.name}
								pokemonNumber={pokemon.id}
							/>
						)
					})}
			</C.CardsContainer>
			<C.Footer>
				<C.PaginationContainer>
					<ButtonAtom
						name={'Anterior'}
						handleClick={() => setCurrentPage(currentPage - 1)}
						disabled={currentPage === 1}
					/>
					<C.PageNumber>
						<TextAtom type={'span'} text={currentPage} />
					</C.PageNumber>
					<ButtonAtom
						name={'Próxima'}
						handleClick={() => setCurrentPage(currentPage + 1)}
						disabled={endIndex >= state.pokemons.length}
					/>
				</C.PaginationContainer>
			</C.Footer>
		</C.HomeContainer>
	)
}

export default HomepageOrganism
