import L from 'leaflet'

L.TileLayer.ChinaProvider = L.TileLayer.extend({
  initialize: function (type, options) {
    // (type, Object)
    var providers = L.TileLayer.ChinaProvider.providers
    var parts = type.split('.')
    var providerName = parts[0]
    var mapName = parts[1]
    var mapType = parts[2]
    var url = providers[providerName][mapName][mapType]
    options.subdomains = providers[providerName].Subdomains
    options.key = options.key || providers[providerName].key
    L.TileLayer.prototype.initialize.call(this, url, options)
  },
})

L.TileLayer.ChinaProvider.providers = {
  TianDiTu: {
    Normal: {
      Map:
        'http://t0.tianditu.gov.cn/vec_c/wmts?tk=3365bd7b4d175012d57229037769e358',
      Annotion:
        'http://t0.tianditu.gov.cn/cva_c/wmts?tk=3365bd7b4d175012d57229037769e358',
    },
    Satellite: {
      Map:
        'http://t0.tianditu.gov.cn/ter_c/wmts?tk=3365bd7b4d175012d57229037769e358',
      Annotion:
        'http://t0.tianditu.gov.cn/cta_c/wmts?tk=3365bd7b4d175012d57229037769e358',
    },
    Terrain: {
      Map:
        'http://t0.tianditu.gov.cn/img_c/wmts?tk=3365bd7b4d175012d57229037769e358',
      Annotion:
        '	http://t0.tianditu.gov.cn/cia_c/wmts?tk=3365bd7b4d175012d57229037769e358',
    },
    Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
    key: '174705aebfe31b79b3587279e211cb9a',
  },
}

L.tileLayer.chinaProvider = function (type, options) {
  return new L.TileLayer.ChinaProvider(type, options)
}

export default L.tileLayer.chinaProvider
