import { Layout } from 'antd'

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 'calc(100svh - 60px)',
	color: '#fff',
	backgroundColor: '#001529',
}

export const AppContent = () => {
	return <Layout.Content style={contentStyle}>Content</Layout.Content>
}
