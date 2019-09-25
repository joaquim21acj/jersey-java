# Passos para execução do Projeto

- Fazer o Download do projeto;
- Instalar o MySQL e criar um db com o nome "mercado";
- Utilizar um servidor para fazer o uso da aplicação, sugiro usar a IDE Eclipse para Java EE com TomCat, mais informações no item abaixo;

 # Passos para instalção do Eclipse e TomCat
 
 - Fazer o download e Instalar o Eclipse para Java EE;
 - Confirmar se já vem com o EGIT, caso não tenha instalar;
 - Abrir o Eclipse e clicar sobre "Open Perspective", geralmente no canto superior direito, selecionar "Git";
 - Na aba "Git Repositories", clicar em "Clone a Git respository", preencher e clonar;
 - Com o botão direito do mouse, clicar sobre o projeto na perspectiva do Java, na aba de "Package Explorer";
 - No item "Maven", utilizar a opção para atualizar as dependências;
 - Fazer o download do TomCat "https://tomcat.apache.org/download-90.cgi";
 - No campo "servers" na parte inferior do Eclipse, adicionar novo servidor e no campo para adicionar o caminho do TomCat colocar o local de download;
 - Adicionar o projeto ao servidor TomCat;
 - Rodar o servidor e testar.
 
# Rodar os Testes

- 
- Adicionar o teste ao build path na aba source, clicar com o botão direito do mouse em cima do projeto clicar em "Build Path" e depois "configure Build Path...";
- Adicionar o JUnit as bibliotecas usando o build path, na aba libraries;
- Com o Botão direito clicar no projeto, depois em "Run as...", "JUnit Test" (O servidor TomCat já tem que estar rodando);