var lista = document.getElementById('lista'); //crie um <pre id="lista"> tag para sair como parágrafos em Mardown
var tags = document.getElementsByTagName('a');
var link = [];
var title = [];
for (index of tags) {
    link.push(index.href);
    title.push(index.innerHTML);
}
for(var i=0; i < link.length; i++) {
    lista.innerHTML += '['+title[i]+']'+'('+link[i]+')\r\n\r\n';
}
