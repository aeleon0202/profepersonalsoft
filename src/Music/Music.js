import {consultarcancionestop} from '../services/servicioCanciones.js'
import { useState, useEffect } from 'react'

export function Music(){

    //usando el hook useState para almacenar la respuesta del api de forma global

    const [canciones,setCanciones] =useState(null)
    const [estadoCarga, setEstadoCarga] = useState(true)

    //usando el hook useEffect para limitar el consumo del api a una sola vez
    useEffect(function(){
        consultarcancionestop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
        })
    },[])

    //render del componente:
    if(estadoCarga==true){

        return(
            <>
                <h2>Estamos cargando las canciones</h2>
            </>
        )
    }else{
        
        return(
            <>
                <h2 className='text-center'>Canciones de la banda: </h2>

                <div className='row row-cols-1 row-cols-md-5 m-2' >
                {
                    canciones.tracks.map(function(cancion){
                      
                        return(
                            <div className='row m-3 bg-dark'>
                                <img src={cancion.album.images[0].url}></img>
                                <h1 className='text-white text-center'>{cancion.name}</h1>
                                <audio controls src={cancion.preview_url}></audio>
                                <p className='fs-5 text-white'>Pupularidad  {cancion.popularity}</p>
                            </div>
                            
                        )
                    })
                }

                </div>
                
            </>
        )
    }

    

}