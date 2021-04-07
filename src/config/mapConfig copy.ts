import L from 'leaflet'
import TDTLayerProvider from '@utils/TDTProvider'

/** 天地图影像图层 */
const imgm = TDTLayerProvider('TianDiTu.Satellite.Map', {
  id: 'image',
  maxZoom: 18,
  minZoom: 5,
})
const imga = TDTLayerProvider('TianDiTu.Satellite.Annotion', {
  maxZoom: 18,
  id: 'image',
  minZoom: 5,
})

const image = L.layerGroup([imgm, imga])

const normalm = TDTLayerProvider('TianDiTu.Normal.Map', {
  id: 'normal',
  maxZoom: 18,
  minZoom: 5,
})
const normala = TDTLayerProvider('TianDiTu.Normal.Annotion', {
  id: 'normal',
  maxZoom: 18,
  minZoom: 5,
})
const normal = L.layerGroup([normalm, normala])
const baseLayers = [
  {
    title: '天地图影像图层',
    layers: image,
    visible: true,
  },
  {
    title: '天地图矢量图层',
    layers: normal,
    visible: false,
  },
]
const baseLayer: L.LayerGroup[] = []

/** 可优化的代码 */
baseLayers.map((item: any) => {
  if (item.visible) {
    baseLayer.push(item.layers)
  }
})

/** 地图配置对象 https://leafletjs.com/reference-1.6.0.html#map-option*/
const mapInitOptions: L.MapOptions = {
  preferCanvas: true,
  attributionControl: false,
  zoomControl: false,
  center: [34.34, 108.94],
  zoom: 9,
  layers: baseLayer,
}

const mapConfig = {
  mapInitOptions,
}
export default mapConfig
