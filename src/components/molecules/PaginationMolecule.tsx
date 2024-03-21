import React, { useState } from 'react'
import { UseAppContext } from '../../context/hook'
import ButtonAtom from '../atoms/ButtonAtom'

const PaginationMolecule: React.FC = () => {
	const { state } = UseAppContext()
	const [currentPage, setCurrentPage] = useState(1)
	const startIndex = (currentPage - 1) * 10
	const endIndex = startIndex + 10
	return (
		<div>
			<ButtonAtom
				name={'Anterior'}
				handleClick={() => setCurrentPage(currentPage - 1)}
				disabled={currentPage === 1}
			/>
			<ButtonAtom
				name={'Próxima'}
				handleClick={() => setCurrentPage(currentPage + 1)}
				disabled={endIndex >= state.pokemons.length}
			/>
		</div>
	)
}

export default PaginationMolecule
