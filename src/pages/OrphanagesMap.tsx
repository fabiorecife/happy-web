import React, {useEffect, useState} from "react";
import mapMarkerImg from '../images/map-marker.svg'
import {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
    id: number
    latitude: number
    longitude: number
    name: number
}

function OrphanagesMap() {

    const [orphanages, setOrphanages] =  useState<Orphanage[]>([])

    console.log(orphanages)

    useEffect(()=>{
      api.get('orphanages').then(response=>{
          setOrphanages(response.data)
      })      
    }, [])

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
                {
                    orphanages.map(orphanage => {
                        return (
                            <Marker key={orphanage.id}
                    position= {[orphanage.latitude,orphanage.longitude]} 
                    icon={mapIcon}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        {orphanage.name}
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#fff" />    
                        </Link>
                    </Popup>   
                </Marker>  
                        )
                    })
                }  
            </Map>
            <Link to="/orphanages/create" className="create-orphanage" >
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap
