import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import SVG from './SVG';
import "leaflet/dist/leaflet.css"
import './Map.css';

const Map = props => {
    return (
        <div className="leaflet__wrapper">
            <MapContainer
                key={props.point}
                center={props.point.length > 0 ? [props.point[0][0], props.point[0][1]] : [55.190318,30.1834053]}
                zoom={11}
                scrollWheelZoom={false}
                attributionControl={false}
                doubleClickZoom={false}
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    props.point.length > 0 ? <Marker icon={SVG} position={[props.point[0][0], props.point[0][1]]}></Marker> : ''
                }
            </MapContainer>
        </div>
    )
}

export default Map;