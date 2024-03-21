import React from 'react'
import { ICards } from '../../interfaces/atomsInterface'
import * as C from '../../styles/homeStyles'
import TextAtom from '../atoms/TextAtom'

const CardsMolecule: React.FC<ICards> = ({ pokemonName, pokemonNumber }) => {
	return (
		<C.PokemonCard>
			<C.PokemonNumber>
				<TextAtom type={'span'} text={`#${pokemonNumber.padStart(3, '0')}`} />
			</C.PokemonNumber>
			<div>
				<TextAtom type={'h4'} text={pokemonName} />
			</div>
		</C.PokemonCard>
	)
}

export default CardsMolecule
