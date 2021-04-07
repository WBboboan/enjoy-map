import React, { Component } from 'react'
import L from 'leaflet'
import wmtsProvider from '@utils/wmtsProvider'

interface IProps {
  map?: L.Map
}

interface IState {}
export default class WMTSLayer extends Component<IProps, IState> {
  componentDidMount() {
    const { map } = this.props
    const url =
      'http://t0.tianditu.gov.cn/vec_c/wmts?tk=3365bd7b4d175012d57229037769e358'
    const matrixIds = []
    for (let i = 0; i < 22; ++i) {
      matrixIds[i] = {
        identifier: '' + i,
        topLeftCorner: new L.LatLng(90, -180),
      }
    }
    const options = {
      layer: 'chinaMap:chinaHydroMap',
      tilematrixSet: 'EPSG:4326',
      matrixIds: matrixIds,
    }
    const layer = wmtsProvider(url, options)
    map?.addLayer(layer)
  }

  render() {
    return <div></div>
  }
}
