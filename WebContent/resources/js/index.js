var inicio = new Vue({
	el:"#inicio",
    data: {
    	editMode: false,
        listaProdutos: [],
        listaProdutosHeader: [
			{sortable: false, key: "nome", label:"Nome"},
			{sortable: false, key: "fabricante.nome", label:"Fabricante"},
			{sortable: false, key: "volume", label:"Volume"},
			{sortable: false, key: "unidade", label:"Unidade"},
			{sortable: false, key: "estoque", label:"Estoque"}
		],
		produtoEditado: null
    },
    created: function(){
        let vm =  this;
        vm.buscaProdutos();
    },
    methods:{
    	salvar () {
//    		alert(this.produtoEditado.id);
    		axios.put("/mercado/rs/produtos/"+this.produtoEditado.id, this.produtoEditado);
    		location.reload();
        },
        editar (_produto) {
//        	alert("aquiEditar");
        	this.antesDaEdicao = _produto;
            this.produtoEditado = _produto;
          },
        deleta(produto){
        	 axios.delete("/mercado/rs/produtos/"+produto.id);
        	 location.reload();
          },
        mostraAlertaErro(stringA, stringB){
        	alert(stringA+stringB);  
          },
        buscaProdutos: function(){
			const vm = this;
			axios.get("/mercado/rs/produtos")
			.then(response => {vm.listaProdutos = response.data;
			}).catch(function (error) {
				vm.mostraAlertaErro("Erro interno", "Não foi listar natureza de serviços");
			}).finally(function() {
			});
		},
    }
});
//function editaProduto(produto){
//	alert("aqui");
//	alert(produto.id);
//	
//}
