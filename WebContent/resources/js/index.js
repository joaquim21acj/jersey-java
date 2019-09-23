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
    	      
        },
        editar (produto) {
            this.beforEditCache = produto
            this.produtoEditado = produto
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
//function editaProduto(){
//	alert("aqui");
//}

function editaProduto(produto){
	alert("Aqui");
	alert(nome);
    var par = $(this).parent().parent(); //tr
    var nome = par.children("td:nth-child(1)");
    var nomeFabricante = par.children("td:nth-child(2)");
    var volume = par.children("td:nth-child(3)");
    var unidade = par.children("td:nth-child(4)");
    var estoque = par.children("td:nth-child(5)");
    var salvar = par.children("td:nth-child(6)");
 
    nome.html("<input type='text' id='txtName' value='"+nome.html()+"'/>");
    nomeFabricante.html("<input type='text' id='txtPhone' value='"+nomeFabricante.html()+"'/>");
    volume.html("<input type='text' id='txtEmail' value='"+volume.html()+"'/>");
    unidade.html("<input type='text' id='txtEmail' value='"+unidade.html()+"'/>");
    estoque.html("<input type='text' id='txtEmail' value='"+estoque.html()+"'/>");
    salvar.html("<button>ok</button>");
 
    $(".btnSave").bind("click", Save);

};