import L from 'leaflet'

/**
 * @description 根据layerid 返回Layer集合
 * @author zcj
 * @export
 * @param {L.Map} map
 * @param {string} id
 * @returns
 */
export function findLayersById(map: L.Map | undefined, id: string) {
	const layers: L.Layer[] = []
	if (map) {
		map.eachLayer((item: any) => {
			if (item.options.id === id) {
				layers.push(item)
			}
		})
	}
	return layers
}
