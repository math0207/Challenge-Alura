function modificartexto(texto) {
    return texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

}

function modificartexto2(texto) {
    return texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

}

function mostrartexto() {
    var campo = document.querySelector('.texte-area')
    var valor = campo.value;
    var encriptar = modificartexto(valor);
    var revelar = document.querySelector('.mensagem').value = encriptar;
}

function mostrartexto() {
    var campo = document.querySelector('.texte-area')
    var valor = campo.value;
    var encriptar = modificartexto(valor);
    var revelar = document.querySelector('.mensagem').value = encriptar;
    campo.value = '';
}


function mostrartexto2() {
    var campo = document.querySelector('.texte-area')
    var valor = campo.value;
    var encriptar = modificartexto2(valor);
    var revelar = document.querySelector('.mensagem').value = encriptar;
    campo.value = ''
}

function copiarTexto() {
    var campo = document.querySelector('.mensagem')
    
    campo.select();
    campo.setSelectionRange(0, 99999);

    try {
        var sucesso = document.execCommand('copy');
        if (sucesso) {
            alert('Texto copiado com sucesso!');
        } else {
            alert('Falha ao copiar o texto.');
        }
    } catch (err) {
        alert('Erro ao tentar copiar o texto.');
    }

    campo.value = ''
}


    




