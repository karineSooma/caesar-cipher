function buttonStart (){
let chooseOption= parseInt(prompt("Escolha uma alternativa: \n 1. Criptografar \n 2. Descriptografar"));
    if (chooseOption===1){
    cipher ();
    } 
    else if (chooseOption===2){
    decipher();
    }
    return alert("Por favor, selecione uma opção para continuar");
    
}
console.log (chooseOption);