let km, messagekm, age, messageage;

messagekm = "Inserire il numero di chilometri da percorrere"
messageage = "Inserire età passegero"

verification(km, messagekm)
verification(age, messageage)






function verification(data, message){
    while (isNaN(data)){
        data = parseInt(prompt(message))
        if(isNaN(data)){
            message = "Il numero inserito non è valido. Riprovare: "
        }
    }
}