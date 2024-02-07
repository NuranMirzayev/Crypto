import { Layout, Spin } from 'antd'
import { useContext } from 'react'
import { CryptoContext } from '../../context/crypto-context'
import { AppContent } from './AppContent'
import { AppHeader } from './AppHeader'
import { AppSider } from './AppSider'

const layoutStyle = {}

const AppLayout = () => {
	const { loading } = useContext(CryptoContext)

	if (loading) {
		return <Spin fullscreen />
	}

	return (
		<Layout style={layoutStyle}>
			<AppHeader />
			<Layout>
				<AppSider />
				<AppContent />
			</Layout>
		</Layout>
	)
}

export default AppLayout
