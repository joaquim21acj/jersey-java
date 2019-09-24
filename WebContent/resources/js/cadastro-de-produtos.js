function Produto(_nome, _volume, _unidade, _estoque, _fabricante) {
	this.nome = _nome;
	this.volume = _volume;
	this.unidade = _unidade;
	this.estoque = _estoque;
	this.fabricante = _fabricante;
}
function Fabricante(_nomeFab) {
	this.nome = _nomeFab;
}
function validateForm() {
 var x = document.forms["formNovoProduto"]["nome"].value;
 if (x == "") {
 alert("aquiiii");
 return false;
 }
 }
function novoProduto() {
	fabricante = new Fabricante(document.forms["formNovoProduto"]["fabricante"].value);
	produto = new Produto(document.forms["formNovoProduto"]["nome"].value,
			document.forms["formNovoProduto"]["volume"].value,
			document.forms["formNovoProduto"]["unidade"].value,
			document.forms["formNovoProduto"]["estoque"].value,
			fabricante);
	axios.post("/mercado/rs/produtos",produto)
	 .then(function(response){
		 alert("Salvo com sucesso")
	 }).catch(function (error) {
	 alert("Erro interno", "Não foi possível salvar novo produto");
	 }).finally(function() {
		 alert("Salvo com sucesso2")
	 });

}
