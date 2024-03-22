import React, { useCallback, useEffect, useState } from 'react'
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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const initial_data: PokemonData = {
		weight: 0,
		height: 0,
		abilities: [{ ability: { name: '' } }],
		types: [{ type: { name: '' } }]
	}

	const [pokemonData, setPokemonData] = useState<PokemonData>(initial_data)

	const handleDialog = () => {
		setOpen(!open)
	}

	const getPokemonData = useCallback(async () => {
		const data: PokemonData = await getData(`/${pokemonName}`)
		setPokemonData({
			weight: data.weight,
			height: data.height,
			abilities: [...data.abilities],
			types: [...data.types]
		})
	}, [pokemonName])

	useEffect(() => {
		getPokemonData()
	}, [getPokemonData])

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
