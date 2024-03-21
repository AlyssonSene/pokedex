import axiosInstance from './axiosInstance'

export const getAll = async (baseUrl: string) => {
	const results = await axiosInstance.get(baseUrl)
	return results
}
