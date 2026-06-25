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

    }catch(error){

        document.getElementById("btcPrecio").innerHTML =
            "Sin conexión";

    }

}

actualizarBTC();

setInterval(actualizarBTC,3000);