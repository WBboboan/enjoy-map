import { Component } from 'react'
import L from 'leaflet'
import './index.less'
import boundary from './jiangsu.json'
// import * as geojson from 'geojson'

interface IProps {
  map?: L.Map
}

interface IState {}
export default class Kriging extends Component<IProps, IState> {
  componentDidMount() {
    const { map } = this.props
    const baseLayer = L.tileLayer(
      'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}'
    )
    map?.addLayer(baseLayer)
    this.handleAddBoundary()
  }

  /**
   * @description 加载边界
   * @memberof Kriging
   */
  handleAddBoundary = () => {
    // let inspectionBoundary = []
    const boundaryData: any = boundary
    const { map } = this.props
    const boundaryLayer = L.geoJSON(boundaryData, {
      onEachFeature: (feature: any) => {
        // 插值边界
        // inspectionBoundary = feature.geometry.coordinates[0][0]
      },
    })
    map?.addLayer(boundaryLayer)
    // const bounds = boundaryLayer.getBounds()
    // 插值范围经度的范围
    // const xlim = [bounds.getSouthWest().lng, bounds.getNorthEast().lng]
    // 插值范围内纬度的范围
    // const ylim = [bounds.getSouthWest().lat, bounds.getNorthEast().lat]
  }
  render() {
    return null
  }
}
