let km, messageKm, age, messageAge, price;
let app = document.getElementById("price-calc")
const priceKm= .21;

messagekm = "Inserire il numero di chilometri da percorrere"
messageage = "Inserire età passegero"

km = verification(km, messagekm)
age = verification(age, messageage)

price = km*priceKm
if(age<18){
    price = price*.80
}
if(age>65){
    price = price*.60 
}
price = Math.round(price * 100) / 100


app.innerHTML = 
`
il prezzo totale del viaggio è : <strong>${price}</strong>
`



function verification(data, message){
    while (isNaN(data) || data === 0){
        data = parseInt(prompt(message))
        if(isNaN(data)){
            message = "Il numero inserito non è valido. Riprovare: "
        }
    }
    return data;
}
