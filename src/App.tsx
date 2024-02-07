import AppLayout from './components/Layout/AppLayout'
import { CryptoContextProvider } from './context/crypto-context'

const App = () => {
	return (
		<CryptoContextProvider>
			<AppLayout />
		</CryptoContextProvider>
	)
}

export default App
