const monedas = [
    "BTCUSDT",
    "ETHUSDT",
    "SOLUSDT",
    "XRPUSDT",
    "ADAUSDT"
];


// NUEVO SISTEMA

async function actualizarMoneda(moneda){

    try{

        const respuesta = await fetch(
            "https://fapi.binance.com/fapi/v1/ticker/24hr?symbol=" + moneda
        );

        const datos = await respuesta.json();

        const precio = Number(datos.price);

        const simbolo = moneda.replace("USDT","").toLowerCase();

        const idPrecio = simbolo + "Precio";

const idHora = "hora" + simbolo.toUpperCase();

const ahora = new Date();        

document.getElementById(idPrecio).innerHTML =
            precio.toLocaleString("es-CO",{
                minimumFractionDigits:2,
                maximumFractionDigits:2
            });
            
 document.getElementById(idHora).innerHTML =
    "Actualizado: " +
    ahora.toLocaleTimeString("es-CO");           

    }catch(error){

    console.log("Error:", moneda, error);

    const simbolo = moneda.replace("USDT","").toLowerCase();

    const idPrecio = simbolo + "Precio";

    document.getElementById(idPrecio).innerHTML =
    "ERROR";
 }

}


for (const moneda of monedas){

    actualizarMoneda(moneda);

}

setInterval(function(){

    for (const moneda of monedas){

        actualizarMoneda(moneda);

    }

},3000);

console.log("V6 ACTUALIZADA - ADA");
