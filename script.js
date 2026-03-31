function generateNumber(){
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    if(min >= max){
        alert("O valor mínimo deve ser menor que o valor máximo")
    }
    console.log(min, max)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    const mensagem = result
    document.querySelector('#result').textContent = mensagem
    

    }
