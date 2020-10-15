import React from "react";
import mapMarkerImg from '../images/map-marker.svg'
import {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Marker"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Recife</strong>
                    <span>Pernambuco</span>
                </footer>
            </aside>
            <Map
                center={[-8.0786066,-34.9382238]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker 
                    position= {[-8.0786066,-34.9382238]} 
                    icon={mapIcon}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#fff" />    
                        </Link>
                    </Popup>   
                </Marker>    
            </Map>
            <Link to="/orphanages/create" className="create-orphanage" >
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap
