import { Button, Drawer, Layout, Modal, Select, Space } from 'antd'
import { useEffect, useState } from 'react'
import { useCrypto } from '../../context/crypto-context'
import AddAssetsForm from '../AddAssetsForm'
import CoinInfoModal from '../CoinInfoModal'

const headerStyle: React.CSSProperties = {
	width: '100%',
	textAlign: 'center',
	height: 60,
	padding: '1rem',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}

export const AppHeader = () => {
	const [select, setSelect] = useState(false)
	const [coin, setCoin] = useState<any | null>(null)
	const [modal, setModal] = useState(false)
	const [drawer, setDrawer] = useState(false)
	const { crypto } = useCrypto()

	useEffect(() => {
		const keypress = (e: KeyboardEvent) => {
			if (e.key === '/') {
				setSelect(prev => !prev)
			}
		}
		document.addEventListener('keypress', keypress)
		return () => document.removeEventListener('keypress', keypress)
	}, [])

	function handleSelect(value: string) {
		console.log(value)
		setCoin(crypto.find(c => c.id === value))
		setModal(prev => !prev)
	}

	return (
		<Layout.Header style={headerStyle}>
			<Select
				style={{ width: 250 }}
				onSelect={handleSelect}
				onClick={() => setSelect(prev => !prev)}
				open={select}
				value='press / to open'
				options={crypto.map(coin => ({
					label: coin.name,
					value: coin.id,
					icon: coin.icon,
				}))}
				optionRender={option => (
					<Space>
						<img
							style={{ width: 30 }}
							src={option.data.icon}
							alt={option.data.label}
						/>
						{option.data.label}
					</Space>
				)}
			/>
			<Button type='primary' onClick={() => setDrawer(prev => !prev)}>
				Add Asset
			</Button>

			<Modal
				open={modal}
				onOk={() => setModal(prev => !prev)}
				onCancel={() => setModal(prev => !prev)}
				footer={null}
			>
				<CoinInfoModal coin={coin} />
			</Modal>

			<Drawer
				title='Add Asset'
				onClose={() => setDrawer(prev => !prev)}
				open={drawer}
				width={600}
			>
				<AddAssetsForm />
			</Drawer>
		</Layout.Header>
	)
}
