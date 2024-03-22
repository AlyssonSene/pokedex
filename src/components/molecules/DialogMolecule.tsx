import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { ReactElement, Ref, forwardRef } from 'react'
import { IDialog } from '../../interfaces/dialogInterface'
import * as C from '../../styles/dialogStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: ReactElement<unknown, string>
	},
	ref: Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />
})

const DialogMolecule: React.FC<IDialog> = ({
	isOpen,
	onClose,
	pokemonData,
	pokemonName,
	gifUrl
}) => {
	return (
		<Dialog
			open={isOpen}
			TransitionComponent={Transition}
			onClose={onClose}
			aria-describedby='alert-dialog-slide-description'
		>
			<C.DialogContainer>
				<DialogTitle>{pokemonName}</DialogTitle>
				<div>
					<div className='pokemonGif'>
						<ImageAtom url={gifUrl} alt={pokemonName} />
					</div>
					<C.Informations>
						<C.Abilities>
							<TextAtom type={'h4'} text={'Habilidades: '} />
							<div>
								{pokemonData?.abilities?.map((item, index) => {
									return (
										<TextAtom
											key={index}
											text={item.ability.name}
											type={'span'}
										/>
									)
								})}
							</div>
						</C.Abilities>
						<C.HeightContainer>
							<TextAtom type={'h4'} text={'Altura: '} />
							<TextAtom type={'span'} text={`${pokemonData.height / 10} M`} />
						</C.HeightContainer>

						<C.WeightContainer>
							<TextAtom type={'h4'} text={'Peso: '} />
							<TextAtom
								type={'span'}
								text={`${pokemonData.weight / 10} Kg` || ''}
							/>
						</C.WeightContainer>
						<C.TypesContainer>
							<TextAtom type={'h4'} text={'Tipo: '} />
							<div>
								{pokemonData?.types?.map((item, index) => {
									return (
										<TextAtom key={index} text={item.type.name} type={'span'} />
									)
								})}
							</div>
						</C.TypesContainer>
					</C.Informations>
				</div>
			</C.DialogContainer>
		</Dialog>
	)
}

export default DialogMolecule
