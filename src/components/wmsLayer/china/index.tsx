import React, { Component } from 'react'
import MapInit from '@components/GisTools/MapInits'
import L from 'leaflet'

export default class WMSChina extends Component {
  handAfterMapCreted = (map: L.Map) => {
    const baseUrl = '/summit-gis/summit/wms'
    const chinaOption: L.WMSOptions = {
      id: 'china',
      layers: 'summit:china',
      format: 'image/png',
      transparent: false,
    }
    const china = L.tileLayer.wms(baseUrl, chinaOption)
    map.addLayer(china)
    map.setZoom(4)
  }

  render() {
    return <MapInit onMapCreated={this.handAfterMapCreted} />
  }
}
