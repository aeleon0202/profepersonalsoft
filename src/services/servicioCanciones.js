export async function consultarcancionestop(){


    const URI="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US"

    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQCgFAOXQ9HW1P0p7HcqAafSjG6umUo7L1A4WNyXAGOLRDC5PEa-iLsHksXBlj2P61mKD3_9cnfoUlwr4ADrVyM9GjZQxMuhKpoBxdWX-abB6xpBr1UJX663-2nRDQ8QNNeAWRyk9bSqrwPT2TZfyMuo7Z32fnr4i3V65-8LJG6EkFThHe_wl78"}
    }

    let respuesta=await fetch(URI,PETICION)

    let canciones=await respuesta.json()

    console.log(canciones)

}