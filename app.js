const monedas = [
    "BTCUSDT",
    "ETHUSDT",
    "SOLUSDT"
];

const intervalos = {};

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

// NUEVO SISTEMA

async function actualizarMoneda(moneda){

    try{

        const respuesta = await fetch(
            "https://fapi.binance.com/fapi/v1/ticker/price?symbol=" + moneda
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

        console.log("Error:",moneda);

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

console.log("Sistema nuevo funcionando");
