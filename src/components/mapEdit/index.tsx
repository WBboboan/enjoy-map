import React, { Component } from 'react'
import L from 'leaflet'
import originData from './data.json'
import '@geoman-io/leaflet-geoman-free'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'

interface IProps {
	map?: L.Map
}

interface IState {}
const myL : any = L
export default class MapEdit extends Component<IProps, IState> {
	componentDidMount() {
		//绘制geojson图形
		const { map }: any = this.props
		map?.setZoom(10)
		const geoData: any = originData
		const demoLayer: any = myL.geoJSON(geoData, {
			pmIgnore: false,
		})
		map?.addLayer(demoLayer)
		map.pm.addControls({
			position: 'topleft',
			drawCircle: false,
		})
	}

	render() {
		return <div></div>
	}
}
