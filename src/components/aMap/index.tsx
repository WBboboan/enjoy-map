import React, { Component } from 'react'
import L from 'leaflet'

interface IProps {
	map?: L.Map
}
interface IState {}
export default class AMapDemo extends Component<IProps, IState> {
	componentDidMount() {
		const { map } = this.props
		const layer = L.tileLayer(
			'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
			{
				subdomains: ['1', '2', '3', '4'],
				minZoom: 1,
				maxZoom: 19,
			}
		)
		map?.addLayer(layer)
		// https://abc.amap.com/tile?x=[x]&y=[y]&z=[z]
	}

	render() {
		return <div></div>
	}
}
