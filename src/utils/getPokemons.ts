import axiosInstance from './axiosInstance'

export const getAll = async (baseUrl: string) => {
	try {
		const results = await axiosInstance.get(baseUrl)
		return results.data
	} catch (error) {
		return 'Erro ao buscar lista de pokemons'
	}
}

export const getData = async (baseUrl: string) => {
	const result = await axiosInstance.get(baseUrl)
	return result.data
}
