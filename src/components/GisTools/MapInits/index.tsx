import React, { Component } from 'react'
import './index.less'
import L from 'leaflet'
import mapConfig from '@config/mapConfig'
import baseLayers from '@utils/tdtUtil'

interface IProps {
	/** 底图，内置支持天地图电子地图 'normal'，影像图 'image'，地形图 'terrain */
	baseLayerType?: 'normal' | 'terrain' | 'image'
	/** 底图容器的样式名称 */
	className?: string
	/** map对象创建成功后执行 */
	onMapCreated: (map: L.Map) => void
}

interface IState {}
export default class MapInit extends Component<IProps, IState> {
	mapContainerNode: any
	componentDidMount() {
		const map = L.map(this.mapContainerNode, mapConfig.mapInitOptions)
		//判断是否要加载底图
		const { baseLayerType } = this.props
		if (baseLayerType) {
			let layer
			baseLayerType === 'normal'
				? (layer = baseLayers.normal)
				: baseLayerType === 'image'
				? (layer = baseLayers.image)
				: (layer = baseLayers.terrain)
			map.addLayer(layer)
		}
		this.props.onMapCreated(map)
	}

	render() {
		const { className } = this.props
		return (
			<div
				className={className ? className : 'map-init-container'}
				ref={(node) => (this.mapContainerNode = node)}
			/>
		)
	}
}
