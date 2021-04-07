import React, { Component } from 'react'
import L from 'leaflet'

interface IProps {
	map?: L.Map
}

interface IState {}
export default class TDTEPSG4326 extends Component<IProps, IState> {
	componentDidMount() {
		const { map } = this.props
		const url =
			'http://t1.tianditu.com/img_c/wmts?layer=img&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=d4a3ea97540bebbd2c400faaeed26986'
		const baseLayer = L.tileLayer(url, {
			maxZoom: 20,
			tileSize: 256,
			zoomOffset: 1,
		})
		map?.addLayer(baseLayer)
	}
	render() {
		return <div></div>
	}
}
