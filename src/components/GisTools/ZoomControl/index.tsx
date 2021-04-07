import React, { Component } from 'react'
import GlobalConfig from '@config/mapConfig'
import L from 'leaflet'
import './index.less'

interface IProps {
	map?: L.Map
}

interface IState {}

export default class ZoomControl extends Component<IProps, IState> {
	handleZoomUp = () => {
		const { map }: any = this.props
		const zoom: any = map?.getZoom()
		const { maxZoom }: any = GlobalConfig.mapInitOptions
		if (zoom < maxZoom) {
			map.setZoom(zoom + 1)
		}
	}

	handleZoomDown = () => {
		const { map }: any = this.props
		const zoom: any = map?.getZoom()
		const { minZoom }: any = GlobalConfig.mapInitOptions
		if (zoom > minZoom) {
			map.setZoom(zoom - 1)
		}
	}

	handleFullMap = () => {
		const { map } = this.props
		const { center, zoom }: any = GlobalConfig.mapInitOptions
		map?.setView(center, zoom)
	}
	render() {
		return (
			<div className='zoom-control-container'>
				<div className='zoom-up'>
					<img
						src={require(`./img/zoom-up.png`)}
						title={'放大'}
						alt={'放大'}
						onClick={this.handleZoomUp}
					/>
				</div>
				<div className='zoom-down'>
					<img
						src={require(`./img/zoom-down.png`)}
						title={'缩小'}
						alt={'缩小'}
						onClick={this.handleZoomDown}
					/>
				</div>
				<div className='full-map'>
					<img
						src={require(`./img/full-map.png`)}
						title={'全图'}
						alt={'全图'}
						onClick={this.handleFullMap}
					/>
				</div>
			</div>
		)
	}
}
