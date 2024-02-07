import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { Card, Layout, List, Statistic, Tag, Typography } from 'antd'
import React, { useContext } from 'react'
import { CryptoContext } from '../../context/crypto-context'
import { capitalize } from '../../utils'

const siderStyle: React.CSSProperties = {
	padding: '1rem',
	color: 'white',
}

export const AppSider = () => {
	const { assets } = useContext(CryptoContext)

	return (
		<Layout.Sider width='25%' style={siderStyle}>
			{assets.map(asset => (
				<Card key={asset.id} style={{ marginBottom: '1rem' }}>
					<Statistic
						title={capitalize(asset.id)}
						value={asset.totalAmount}
						precision={2}
						valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322' }}
						prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
						suffix='$'
					/>
					<List
						size='small'
						dataSource={[
							{
								title: 'Total Profit',
								value: asset.totalProfit!,
								isPlane: false,
								withTag: true,
							},
							{
								title: 'Asset Amount',
								value: asset.amount,
								isPlane: true,
								withTag: false,
							},
							// {
							// 	title: 'Difference',
							// 	value: asset.growPercents,
							// 	isPlane: false,
							// 	withTag: false,
							// },
						]}
						renderItem={(item: {
							title: string
							value: number
							isPlane: boolean
							withTag: boolean
						}) => (
							<List.Item>
								<span>{item.title}</span>
								<span>
									{item.withTag && (
										<Tag color={asset.grow ? 'green' : 'red'}>
											{asset.growPercents!.toFixed(2)}%
										</Tag>
									)}
									{item.isPlane && item.value}
									{!item.isPlane && (
										<Typography.Text type={asset.grow ? 'success' : 'danger'}>
											{item.value.toFixed(2)}$
										</Typography.Text>
									)}
								</span>
							</List.Item>
						)}
					/>
				</Card>
			))}
		</Layout.Sider>
	)
}
