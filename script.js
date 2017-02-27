var lista = document.getElementById('lista'); //crie um <pre id="lista"> tag para sair como parágrafos em Mardown
var tags = document.getElementsByTagName('a');
for (index of tags) {
    lista.innerHTML += '['+index.innerHTML+']'+'('+index.href+')\r\n\r\n';
}
