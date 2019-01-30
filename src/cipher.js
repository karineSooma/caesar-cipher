function cripto() {
    let message = document.getElementById("enterText").value;
    let offset = parseInt(document.getElementById("enterOffset").value);
    let criptoMessage = cipher(offset, message);
    document.getElementById("resultAnswerCripto").innerHTML = criptoMessage;
}

function descripto() {
    let message = document.getElementById("enterText").value;
    let offset = parseInt(document.getElementById("enterOffset").value);
    let descriptoMessage = decipher(offset, message);
    document.getElementById("resultAnswerDecripto").innerHTML = descriptoMessage;
}

//Função para cifrar mensagem
function cipher (offset, message) {
    let resultMessage = "", code;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        code = (((message.charCodeAt(i) - 65) + offset) % 26) + 65;
      }
      else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
        code = (((message.charCodeAt(i) - 97) + offset) % 26) + 97;
      }
      else if (message.charCodeAt(i) === 32) {
        code = 32;
      }
      resultMessage += String.fromCharCode(code);
    }
    return resultMessage;
}