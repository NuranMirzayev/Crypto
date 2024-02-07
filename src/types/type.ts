import { valueType } from 'antd/es/statistic/utils'

export interface CryptoResultsType {
	id: string
	icon: string
	name: string
	symbol: string
	rank: number
	price: number
	priceBtc: number
	volume: number
	marketCap: number
	availableSupply: number
	totalSupply: number
	priceChange1h: number
	priceChange1d: number
	priceChange1w: number
	redditUrl: string
	websiteUrl: string
	twitterUrl: string
	contractAddress?: string
	decimals?: number
	explorers: string[]
}

export interface CryptoMetaTypes {
	page: number
	limit: number
	itemCount: number
	pageCount: number
	hasPreviousPage: boolean
	hasNextPage: boolean
}

export interface CryptoDataTypes {
	result: CryptoResultsType[]
	meta: CryptoMetaTypes
}

export interface CryptoAssetsTypes {
	growPercents?: number
	totalProfit?: number
	grow?: number
	totalAmount?: valueType | undefined
	id: string
	amount: number
	price: number
	data: Date
}
