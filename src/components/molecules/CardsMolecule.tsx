import React, { useCallback, useState } from 'react'
import { ICards } from '../../interfaces/atomsInterface'
import { PokemonData } from '../../interfaces/dialogInterface'
import * as C from '../../styles/homeStyles'
import { getData } from '../../utils/getPokemons'
import TextAtom from '../atoms/TextAtom'
import DialogMolecule from './DialogMolecule'

const CardsMolecule: React.FC<ICards> = ({
	pokemonName,
	pokemonNumber,
	gifUrl
}) => {
	const [open, setOpen] = useState(false)
	const [pokemonData, setPokemonData] = useState<PokemonData | null>(null)

	const handleDialog = () => {
		setOpen(!open)
	}

	const getPokemonData = useCallback(async () => {
		if (pokemonData == null) {
			const data: PokemonData = await getData(`/${pokemonName}`)
			setPokemonData(data)
		}
	}, [pokemonData, pokemonName])

	return (
		<C.PokemonCard
			onClick={() => {
				handleDialog()
				getPokemonData()
			}}
		>
			<C.PokemonNumber>
				<TextAtom type={'span'} text={`#${pokemonNumber.padStart(3, '0')}`} />
				<TextAtom type={'h4'} text={pokemonName} />
			</C.PokemonNumber>
			<DialogMolecule
				gifUrl={gifUrl}
				pokemonName={pokemonName}
				isOpen={open}
				onClose={handleDialog}
				pokemonData={pokemonData}
			/>
		</C.PokemonCard>
	)
}

export default CardsMolecule
