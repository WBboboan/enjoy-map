import React, { Component } from 'react'
import L from 'leaflet'
export default class App extends Component {
	mapContainerNode: any

	componentDidMount() {
		const map = L.map(this.mapContainerNode).setView([51.505, -0.09], 13)

		L.tileLayer(
			'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
			{
				maxZoom: 18,
				attribution:
					'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
					'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
					'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
			}
		).addTo(map)
	}

	render() {
		return (
			<div
				style={{ height: '100%' }}
				ref={(node) => (this.mapContainerNode = node)}
			/>
		)
	}
}
