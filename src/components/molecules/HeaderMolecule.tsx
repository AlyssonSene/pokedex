import React from 'react'
import * as C from '../../styles/headerStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'
import pokemonLogo from '/images/pokemonLogo.png'

const HeaderMolecule: React.FC = () => {
	return (
		<C.HeaderContainer>
			<C.LogoContainer>
				<ImageAtom url={pokemonLogo} alt={'pokemon logo'} />
			</C.LogoContainer>
			<C.HeaderTitle>
				<TextAtom type={'h1'} text={'Pokedex'} />
			</C.HeaderTitle>
		</C.HeaderContainer>
	)
}

export default HeaderMolecule
