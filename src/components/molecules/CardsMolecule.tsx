import React from 'react'
import { ICards } from '../../interfaces/atomsInterface'
import * as C from '../../styles/homeStyles'
import TextAtom from '../atoms/TextAtom'

const CardsMolecule: React.FC<ICards> = ({
	pokemonName,
	pokemonNumber,
	gifUrl
}) => {
	return (
		<C.PokemonCard>
			<C.PokemonNumber>
				<TextAtom type={'span'} text={`#${pokemonNumber.padStart(3, '0')}`} />
				<TextAtom type={'h4'} text={pokemonName} />
			</C.PokemonNumber>
			<div>
				<img src={gifUrl} alt={pokemonName} />
			</div>
		</C.PokemonCard>
	)
}

export default CardsMolecule
