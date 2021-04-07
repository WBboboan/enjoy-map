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
        'https://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={key}',
      Annotion:
        'https://t{s}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={key}',
    },
    Satellite: {
      Map:
        'https://t{s}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={key}',
      Annotion:
        'https://t{s}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={key}',
    },
    Terrain: {
      Map:
        'https://t{s}.tianditu.gov.cn/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={key}',
      Annotion:
        'https://t{s}.tianditu.gov.cn/cta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={key}',
    },
    Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
    key: '174705aebfe31b79b3587279e211cb9a',
  },
}

L.tileLayer.chinaProvider = function (type, options) {
  return new L.TileLayer.ChinaProvider(type, options)
}

export default L.tileLayer.chinaProvider
