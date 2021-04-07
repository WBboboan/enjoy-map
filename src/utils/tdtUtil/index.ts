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

/** 天地图电子地图 */
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

/** 天地图地形图 */
const terrainm = TDTLayerProvider('TianDiTu.Terrain.Map', {
	id: 'terrain',
	maxZoom: 18,
	minZoom: 5,
})
const terraina = TDTLayerProvider('TianDiTu.Terrain.Annotion', {
	id: 'terrain',
	maxZoom: 18,
	minZoom: 5,
})
const terrain = L.layerGroup([terrainm, terraina])

export default {
	normal,
	image,
	terrain,
}
