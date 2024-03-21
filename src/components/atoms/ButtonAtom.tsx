import React from 'react'
import { IButton } from '../../interfaces/atomsInterface'

const ButtonAtom: React.FC<IButton> = ({ name, handleClick, disabled }) => {
	return (
		<button type='button' onClick={handleClick} disabled={disabled}>
			{name}
		</button>
	)
}

export default ButtonAtom
