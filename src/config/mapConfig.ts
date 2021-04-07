import L from 'leaflet'
/** 地图配置对象 https://leafletjs.com/reference-1.6.0.html#map-option*/
const mapInitOptions: L.MapOptions = {
  preferCanvas: true,
  attributionControl: false,
  zoomControl: false,
  // center: [32.983735, 119.486455],
  center: [34.34, 108.94],
  zoom: 4,
  maxZoom: 18,
  minZoom: 5,
  // crs:L.CRS.EPSG4326
}

const mapConfig = {
  mapInitOptions,
}
export default mapConfig
