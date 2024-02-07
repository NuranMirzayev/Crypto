import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'
import { fakeFetchCrypto, fetchAssets } from '../api'
import { CryptoAssetsTypes, CryptoResultsType } from '../types/type'
import { percentDifference } from '../utils'

interface CryptoContextProps {
	assets: CryptoAssetsTypes[]
	crypto: CryptoResultsType[]
	loading: boolean
}

export const CryptoContext = createContext<CryptoContextProps>({
	assets: [],
	crypto: [],
	loading: false,
})

interface CryptoContextProviderProps {
	children: ReactNode
}

export function CryptoContextProvider({
	children,
}: CryptoContextProviderProps) {
	const [loading, setLoading] = useState<boolean>(false)
	const [crypto, setCrypto] = useState<CryptoResultsType[]>([])
	const [assets, setAssets] = useState<CryptoAssetsTypes[]>([])

	useEffect(() => {
		async function preload(): Promise<void> {
			try {
				setLoading(true)
				const { result }: any = await fakeFetchCrypto()
				const assetsD: any = await fetchAssets()

				setCrypto(result)
				setAssets(
					assetsD.map((asset: CryptoAssetsTypes) => {
						const coin = result.find((c: { id: string }) => c.id === asset.id)

						return {
							grow: asset.price < coin.price,
							growPercents: percentDifference(asset.price, coin.price),
							totalAmount: asset.amount * coin.price,
							totalProfit:
								asset.amount * coin.price - asset.amount * asset.price,
							...asset,
						}
					})
				)

				setLoading(false)
			} catch (error) {
				console.error('Error fetching data:', error)
				setLoading(false)
			}
		}

		preload() // Call the preload function

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []) // Empty dependency array to run the effect only once

	return (
		<CryptoContext.Provider value={{ loading, crypto, assets }}>
			{children}
		</CryptoContext.Provider>
	)
}

///Life Hack

export function useCrypto() {
	return useContext(CryptoContext)
}
