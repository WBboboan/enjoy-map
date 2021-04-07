import { Component } from 'react'
import L from 'leaflet'
import 'leaflet.markercluster'
import stations from './stations.json'
import icon from '@assets/images/rainfall_station_default.png'

interface IProps {
  map?: L.Map
}

interface IState {}

const defaultIcon: L.Icon = L.icon({
  iconUrl: icon,
  iconAnchor: [24, 46],
  iconSize: [48, 58],
  popupAnchor: [0, 0],
})
export default class StationDemo extends Component<IProps, IState> {
  componentDidMount() {
    // const { map } = this.props
    // const baseLayer = L.tileLayer(
    //   'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
    // )
    // map?.addLayer(baseLayer)
    this.addMarkersToMap(stations.data)
  }

  addMarkersToMap = (stations: Array<object>) => {
    const map = this.props.map
    map?.setZoom(4)
    const projectPointLayer: L.MarkerClusterGroup = L.markerClusterGroup({
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      chunkedLoading: true,
      maxClusterRadius: 40, //默认80
    })

    this.addProjectClusterLayers(projectPointLayer)
    map?.addLayer(projectPointLayer)
  }

  addProjectClusterLayers = (calusterGroupLayer: L.MarkerClusterGroup) => {
    const markers: Array<L.Marker> = []
    stations.data.forEach((item: any) => {
      if (item.lttd === null || item.lgtd === null) return
      const marker = L.marker([item.lttd, item.lgtd], {
        attribution: item.stcd,
        icon: defaultIcon,
      })
      markers.push(marker)
    })
    calusterGroupLayer.addLayers(markers)
  }
  render() {
    return null
  }
}
