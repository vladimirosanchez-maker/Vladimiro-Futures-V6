async function actualizarBTC(){

    try{

        const respuesta = await fetch(
            "https://fapi.binance.com/fapi/v1/ticker/price?symbol=BTCUSDT"
        );

        const datos = await respuesta.json();

        const precio = Number(datos.price);

        document.getElementById("btcPrecio").innerHTML =
            precio.toLocaleString(
                "es-CO",
                {
                    minimumFractionDigits:2,
                    maximumFractionDigits:2
                }
            );
            
const ahora = new Date();

document.getElementById("horaActualizacion").innerHTML =
"Actualizado: " +
ahora.toLocaleTimeString("es-CO");

    }catch(error){

        document.getElementById("btcPrecio").innerHTML =
            "Sin conexión";

    }

}

actualizarBTC();

setInterval(actualizarBTC,3000);

async function actualizarETH(){

    try{

        const respuesta = await fetch(
            "https://fapi.binance.com/fapi/v1/ticker/price?symbol=ETHUSDT"
        );

        const datos = await respuesta.json();

        const precio = Number(datos.price);


        document.getElementById("ethPrecio").innerHTML =
        precio.toLocaleString("es-CO",{
            minimumFractionDigits:2,
            maximumFractionDigits:2
        });

        const ahora = new Date();

        document.getElementById("horaETH").innerHTML =
        "Actualizado: " +
        ahora.toLocaleTimeString("es-CO");

    }catch(error){

        document.getElementById("ethPrecio").innerHTML =
        "Sin conexión";

    }

}

actualizarETH();

setInterval(actualizarETH,3000);

async function actualizarSOL(){

    try{

        const respuesta = await fetch(
            "https://fapi.binance.com/fapi/v1/ticker/price?symbol=SOLUSDT"
        );

        const datos = await respuesta.json();

        const precio = Number(datos.price);

        document.getElementById("solPrecio").innerHTML =
        precio.toLocaleString("es-CO",{
            minimumFractionDigits:2,
            maximumFractionDigits:2
        });

        const ahora = new Date();

        document.getElementById("horaSOL").innerHTML =
        "Actualizado: " +
        ahora.toLocaleTimeString("es-CO");

    }catch(error){

        document.getElementById("solPrecio").innerHTML =
        "Sin conexión";

    }

}

actualizarSOL();

setInterval(actualizarSOL,3000);
