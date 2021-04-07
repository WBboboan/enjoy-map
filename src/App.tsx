import React, { Component } from 'react'
import './App.less'
import { Map } from 'leaflet'
import MapInit from '@components/GisTools/MapInits'
// import L from 'leaflet'
import ZoomControl from '@components/GisTools/ZoomControl'
import ToolBar from '@components/GisTools/ToolBar'
import BaseMapLayerSwitch from '@components/GisTools/BaseMapLayerSwitch'
import MapEdit from '@components/mapEdit'
import WMTSLayer from '@components/wmtsLayer'
import StationDemo from '@components/station'
import Kriging from '@components/kriging'

interface IProps {}
interface IState {
  map: Map | undefined
}

export default class App extends Component<IProps, IState> {
  state = {
    map: undefined,
  }
  handleAfterMapCreated = (map: Map) => {
    this.setState({ map: map })
  }

  mapContainerNode: any

  render() {
    const { map } = this.state
    return (
      <div className="map-container">
        <div className="zoom-control-container">
          {map ? <ZoomControl map={map} /> : null}
        </div>
        {/* <div>{map ? <IsoDemo map={map} /> : null}</div> */}
        <div className="map-toolbar">{map ? <ToolBar map={map} /> : null}</div>
        <MapInit
          onMapCreated={this.handleAfterMapCreated}
          // baseLayerType={'image'}
        />
        <div className="base-layer-switch-container">
          {map ? <BaseMapLayerSwitch map={map} /> : null}
        </div>
        {map ? <StationDemo map={map} /> : null}
        {map ? <Kriging map={map} /> : null}
        {/* {map ? <TDTEPSG4326 map={map} /> : null} */}
        {map ? <WMTSLayer map={map} /> : null}
        {/* {map ? <AMapDemo map={map} /> : null} */}
        {map ? <MapEdit map={map} /> : null}
        {/* <div
          style={{ height: '100%' }}
          ref={(node) => (this.mapContainerNode = node)}
        /> */}
      </div>
    )
  }
}
