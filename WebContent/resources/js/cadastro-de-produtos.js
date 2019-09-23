var select = document.getElementById("fabricantes");
listaFabricantes = [];
//getListaFabricantes().then((data) => {listaFabricantes = data.data});
 listaFabricantes = ["fabricanteA", "fabricanteB"];
for (var n=0; n<listaFabricantes.length; n++){
    var opt = listaFabricantes[n];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

function Produto(_nome, _volume, _unidade, _estoque) {
	this.nome = _nome;
	this.volume = _volume;
	this.unidade = _unidade;
	this.estoque = _estoque;
}
function Fabricante(_id, _nome) {
	this.Nome = _nome;
	this.Id = _id;
}
// function validateForm() {
// var x = document.forms["formNovoProduto"]["nome"].value;
// if (x == "") {
// alert("aquiiii");
// return false;
// }
// }
function novoProduto() {
	produto = new Produto(document.forms["formNovoProduto"]["nome"].value,
			document.forms["formNovoProduto"]["volume"].value,
			document.forms["formNovoProduto"]["unidade"].value,
			document.forms["formNovoProduto"]["estoque"].value);
	alert(produto.nome);
	axios.post("/mercado/rs/produtos",produto)
	 .then(function(response){
	 console.log('salvo com sucesso')
	 }).catch(function (error) {
	 alert("Erro interno", "Não foi possível salvar novo produto");
	 }).finally(function() {
	 });

}
function carregaProduto(id){
	// axios.get("/mercado/rs/produtos/{id}")
	// .then(response => {listaFabricantes = response.data;
	// }).catch(function (error) {
// vm.mostraAlertaErro("Erro interno", "Não foi listar fabricantes");
	// }).finally(function() {
	// })
	return "ok";
}

function getListaFabricantes(){
	return axios.get("/mercado/rs/fabricantes").then(response => response.data);
}
