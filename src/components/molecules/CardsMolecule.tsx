import React from 'react'
import { ICards } from '../../interfaces/atomsInterface'
import * as C from '../../styles/homeStyles'
import TextAtom from '../atoms/TextAtom'

const CardsMolecule: React.FC<ICards> = ({ pokemonName }) => {
	return (
		<C.PokemonCard>
			<div>
				<TextAtom type={'h4'} text={pokemonName} />
			</div>
		</C.PokemonCard>
	)
}

export default CardsMolecule
