function encryptText() {
    const inputText = document.getElementById("text").value.toLowerCase();
    const resultText = encrypt(inputText);

    // Oculta elementos
    hideElements();

    // Muestra el resultado
    document.getElementById("result").innerText = resultText;
}

function decryptText() {
    const inputText = document.getElementById("text").value.toLowerCase();
    const resultText = decrypt(inputText);

    // Oculta elementos
    hideElements();

    // Muestra el resultado
    document.getElementById("result").innerText = resultText;
}

function hideElements() {
    // Oculta la imagen, el texto y el label
    document.querySelector('.desencrypt-img').style.display = 'none';
    document.getElementById('text-desencrypt').style.display = 'none';
    document.getElementById('input-descrypt').style.display = 'none';
}

function encrypt(text) {
    return text.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}
