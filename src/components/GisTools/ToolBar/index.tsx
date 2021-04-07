import React, { Component } from 'react'
import './index.less'
import L from 'leaflet'
import { message } from 'antd'
import turf from '@turf/turf'

interface IProps {
  map?: L.Map
}

interface IState {
  startCalcDistance: boolean
}
export default class ToolBar extends Component<IProps, IState> {
  state = {
    startCalcDistance: false,
  }

  distanceLayer: any
  currentPoints: any
  tempDistanceLayer: any
  tempDistancePoint: any

  /**
   * @description
   * @memberof ToolBar
   */
  handleStartCalcDistance = () => {
    message.info('开始测距')
    this.setState(
      {
        startCalcDistance: true,
      },
      () => {
        const { map } = this.props
        const latlngs: L.LatLng[] = []
        const points: L.Circle[] = []
        map?.on('click', (e: L.LeafletMouseEvent) => {
          if (this.distanceLayer) {
            map?.removeLayer(this.distanceLayer)
          }
          const point = L.circle(e.latlng, {
            weight: 8,
            fill: false,
          })
          points.push(point)
          latlngs.push(e.latlng)
          const polyline = L.polyline(latlngs, { color: 'red' })
          const line = polyline.toGeoJSON()
          const length = turf.lineDistance(line, { units: 'kilometers' })
          this.distanceLayer = polyline
          map.addLayer(polyline)
          map.addLayer(point)
          this.currentPoints = points
          console.log(Math.round(length * 100) / 100)
        })
        map?.on('mousemove', (e: L.LeafletMouseEvent) => {
          let tempLayer = this.tempDistanceLayer
          if (tempLayer) {
            map.removeLayer(tempLayer)
          }
          let tempDistancePoint = this.tempDistancePoint
          if (tempDistancePoint) {
            map.removeLayer(tempDistancePoint)
          }
          const points: L.Circle[] = this.currentPoints
          if (points) {
            const start = points[points.length - 1].getLatLng()
            const line = L.polyline([start, e.latlng])
            const lineString = line.toGeoJSON()
            const length = turf.length(lineString, {
              units: 'kilometers',
            })
            const point = L.circle(e.latlng)
            point
              .bindTooltip(`${Math.round(length * 100) / 100} km`, {
                permanent: true,
                direction: 'top',
              })
              .openTooltip([34.34, 108.94])
            point.addTo(map)
            this.tempDistancePoint = point
            line.addTo(map)
            this.tempDistanceLayer = line
          }
        })
      }
    )
  }
  handleStopCalcDistance = () => {
    this.setState(
      {
        startCalcDistance: false,
      },
      () => {
        const { map } = this.props
        // 清除map上的click事件
        map?.off('click')
        map?.off('mousemove')
        map?.removeLayer(this.distanceLayer)
        map?.removeLayer(this.tempDistanceLayer)
        map?.removeLayer(this.tempDistancePoint)
        this.currentPoints.forEach((el: any) => {
          map?.removeLayer(el)
        })
        this.currentPoints = undefined
      }
    )
  }
  render() {
    const { startCalcDistance } = this.state
    return (
      <div className="tool-bar-container">
        <div className="tool-bar-item">
          <div className="tb-item-icon">
            <img src={require('./img/line_calc.png')} alt="测距" />
          </div>
          <div
            className="tb-item-label"
            title={'测距'}
            onClick={
              startCalcDistance
                ? this.handleStopCalcDistance
                : this.handleStartCalcDistance
            }
          >
            {startCalcDistance ? '结束测距' : '测距'}
          </div>
        </div>
        <div className="tool-bar-item">
          <div className="tb-item-icon">
            <img src={require('./img/polygon_calc.png')} alt="测距" />
          </div>
          <div className="tb-item-label" title={'测面'}>
            测面
          </div>
        </div>
        <div className="tool-bar-item">
          <div className="tb-item-icon">
            <img src={require('./img/clear.png')} alt="清除" />
          </div>
          <div className="tb-item-label" title={'清除'}>
            清除
          </div>
        </div>
      </div>
    )
  }
}
