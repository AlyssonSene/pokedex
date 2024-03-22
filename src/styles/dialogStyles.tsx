import styled from 'styled-components'

export const DialogContainer = styled.div`
	background-color: #2a2828;
	border: 2px solid lightgreen;
	height: 400px;
	color: white;
	width: 600px;
	display: flex;
	flex-direction: column;
	.pokemonGif {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		width: 50%;
	}

	h4 {
		color: white;
	}

	span {
		color: white;
	}

	.MuiDialogTitle-root + .css-ypiqx9-MuiDialogContent-root {
		display: flex;
	}
`

export const Informations = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	h4 {
		font-weight: 600;
		font-size: 15px;
		margin-right: 5px;
	}
`

export const Abilities = styled.div`
	display: flex;
	margin-bottom: 10px;

	div {
		display: flex;
		flex-direction: column;
	}
`

export const HeightContainer = styled.div`
	margin: 10px 0;
`

export const WeightContainer = styled.div`
	margin: 10px 0;
`

export const TypesContainer = styled.div`
	display: flex;
	div {
		display: flex;
		flex-direction: column;
	}
	margin: 10px 0;
`
