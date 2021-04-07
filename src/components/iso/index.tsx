import React, { Component } from 'react'
import L from 'leaflet'
import isoData from './isoline.json'
import { Modal } from 'antd'

interface IProps {
	map?: L.Map
}

interface IState {}
export default class IsoDemo extends Component<IProps, IState> {
	componentDidMount() {
		const { map }: any = this.props
		const data: any = isoData
		L.geoJSON(data)
			.on('click', (e) => {
				console.log(e.layer.feature.properties)
				Modal.info({
					title: '等值线信息',
					content: `${e.layer.feature.properties.level}`,
				})
			})
			.addTo(map)
	}

	render() {
		return <div>isodemo</div>
	}
}
