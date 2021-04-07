import React, { Component } from 'react'
import './index.less'
import classnames from 'classnames'
import baseLayer from '@utils/tdtUtil'
import { findLayersById } from '@utils/mapUtil/leafletUtil'

interface IProps {
	/** map对象 */
	map?: L.Map
}

interface IState {
	switchType: string
	className: string
}
export default class BaseMapLayerSwitch extends Component<IProps, IState> {
	state = {
		switchType: '',
		className: '',
	}
	handleBaseMapSwitch = (type: string) => {
		const { map } = this.props
		const layers = findLayersById(map, type)
		// 图层类型未发生改变
		if (layers.length > 0) return
		// 添加指定类型的底图,移除其他类型的底图
		switch (type) {
			case 'image':
        map?.addLayer(baseLayer.image)
        map?.removeLayer(baseLayer.normal)
        map?.removeLayer(baseLayer.terrain)
				break
			case 'normal':
        map?.addLayer(baseLayer.normal)
        map?.removeLayer(baseLayer.image)
        map?.removeLayer(baseLayer.terrain)
				break
			case 'terrain':
        map?.addLayer(baseLayer.terrain)
        map?.removeLayer(baseLayer.normal)
        map?.removeLayer(baseLayer.image)
        break
			default:
				break
		}
	}
	render() {
		return (
			<div className={`_baseMapSwitcher ${this.state.className}`}>
				<div className={'baseMapList'}>
					<div
						onClick={() => this.handleBaseMapSwitch('image')}
						className={classnames('baseMapItem', {
							hasSelectedItem: this.state.switchType === 'image',
						})}
						style={{
							background: `url(${require('./img/image.jpg')}) no-repeat 0 0`,
							zIndex: 0,
						}}
					>
						<div className='mask'>
							<span className='label'>卫星地图</span>
						</div>
					</div>
					<div
						onClick={() => this.handleBaseMapSwitch('normal')}
						className={classnames('baseMapItem', {
							hasSelectedItem: this.state.switchType === 'normal',
						})}
						style={{
							background: `url(${require('./img/map.jpg')}) no-repeat 0 0`,
							zIndex: 1,
						}}
					>
						<div className='mask'>
							<span className='label'>电子地图</span>
						</div>
					</div>
					<div
						onClick={() => this.handleBaseMapSwitch('terrain')}
						className={classnames('baseMapItem', {
							hasSelectedItem: this.state.switchType === 'terrain',
						})}
						style={{
							background: `url(${require('./img/terrain.jpg')}) no-repeat 0 0`,
							zIndex: 1,
						}}
					>
						<div className='mask'>
							<span className='label'>地形图</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
