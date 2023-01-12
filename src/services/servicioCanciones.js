export async function consultarcancionestop(){


    const URL="https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz/top-tracks?market=US"

    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQBlikLZvCWwF_jZNlOPV5yVIiXWFtEF8nDWmxXheRBZlLbl_KP9n1csR4l34On1SfqmgDw4K9hEsRtADsT3D7DkPAQpEeBlHel5ZuczhSW6-FcEuv0kkhAKJKiF2_IsY2iJqW7ZI6GgeXfPH6dFZVdVHcRo5W2_V_VZYdZnQhdoFfuRGoENdrFo2FgOrX7MyiI"}
    }

    let respuesta=await fetch(URL,PETICION)

    let canciones=await respuesta.json()

    return canciones 

}