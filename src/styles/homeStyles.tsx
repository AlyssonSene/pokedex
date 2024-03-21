import styled from 'styled-components'

export const HomeContainer = styled.div`
	height: 100vh;
`

export const CardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	padding: 20px;
`

export const PokemonCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to bottom, rgb(43, 42, 42), rgb(27, 27, 27));
	border-radius: 10px;
	border: 2px solid lightgreen;
	margin: 0.8rem;
	padding: 1.4rem;
	text-align: center;
	color: #f1f1f1;
	width: 220px;
	height: 110px;
	cursor: pointer;
	div {
		h4 {
			transition: font-size 0.1s ease-out;
		}
	}
`

export const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;
	margin-top: 60px;
	bottom: 0;
`

export const PaginationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 350px;

	button {
		padding: 5px 15px;
		border-radius: 10px;
		border: none;
		cursor: pointer;
	}
`

export const PageNumber = styled.div`
	width: 40px;
	text-align: center;
	color: white;
`
