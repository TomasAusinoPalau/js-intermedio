
const monedas = ['ARS', 'USD', 'GBP']

fetch("http://api.exchangeratesapi.io/v1/latest?access_key=ca97578b7c9a08ad676e89eed2d1d1c7", {
})
    .then(response => response.json())
    .then(responseJSON => {
        let nuevaRespuesta = [];

        
        $("h1").text(`Cambios del día ${responseJSON.date} en base ${responseJSON.base}`)



        Object.keys(responseJSON.rates).forEach(moneda => {
            if (monedas.includes(moneda)) {
                $("ul").append($(`<li>${moneda}: ${responseJSON.rates[moneda]}</li>`));
            }
          });

    })
    .catch(error => console.error("FALLÓ", error));