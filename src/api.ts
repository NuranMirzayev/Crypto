import { cryptoAssets, cryptoData } from './db.js'

export function fakeFetchCrypto() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(cryptoData)
		}, 15)
	})
}

export function fetchAssets() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(cryptoAssets)
		}, 2)
	})
}
