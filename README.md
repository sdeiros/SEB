# Sistema de Login
<li>Acesse a Planilha aqui: <a href="https://docs.google.com/spreadsheets/d/1Bz1yFGSxaLlvo6MNsiRdqcgNpDf7YbUS358S7lAV1-Y/edit?usp=sharing" target="_blank"><b>Planilha Excel - Google</b></a></li>
<li>Acesse o Drive aqui: <a href="https://drive.google.com/drive/folders/1HBQi31Er40Nni8uaDzFwUHLl-iirdB-q?usp=sharing" target="_blank"><b>Google Drive - Documentos</b></a></li>
<hr>
<h1>Tela de Login</h1>

<p>Na tela de login, o usuário encontrará dois campos obrigatórios a serem preenchidos. No primeiro campo, o usuário deve inserir o e-mail institucional ou o CPF. No campo de login, o usuário pode utilizar o CPF, já que nem todos os alunos possuem um e-mail institucional. No segundo campo, o usuário deverá digitar a senha. Se a senha estiver correta, o usuário poderá acessar o sistema. Além disso, na mesma tela de login, há um botão para recuperar a senha. Ao clicar nesse botão, será aberta uma nova tela em que o usuário deverá preencher o e-mail institucional. Caso o e-mail informado esteja registrado no sistema, o usuário receberá uma mensagem por e-mail com a senha para realizar o login.</p>

<h1>Desenvolvimento:</h1>

<p>A tela de login foi desenvolvida utilizando as linguagens de programação JavaScript e HTML. O código-fonte do projeto pode ser encontrado neste <a href="https://console.cloud.google.com/">repositório online aqui</a>. O sistema realiza consultas em uma planilha do Google Sheets (similar a uma planilha do Excel) para verificar as credenciais informadas pelo usuário. Se as credenciais estiverem corretas, o usuário é redirecionado para a tela inicial do sistema, que é a tela principal com todas as funcionalidades. Caso as credenciais informadas não estejam na planilha, seja o e-mail institucional/CPF ou a senha, uma mensagem de erro é exibida, solicitando que o usuário tente realizar o login novamente. Se o usuário esquecer a senha, ele pode solicitar o envio da senha para o e-mail institucional registrado no sistema. Essa mensagem é enviada por e-mail utilizando a API do Elastic Email, que permite o envio de e-mails apenas com JavaScript e HTML, sem a necessidade de outros arquivos adicionais.<p>
<hr>
Para que o código funcione corretamente, são necessários alguns passos adicionais:<br>
É necessário adicionar o link da planilha + a chave da API do Google Sheets, para conseguir essa chave, siga os passos abaixo: <br><br>

<h2>Adicionando o link da planilha e a chave da API do Google Sheets:</h2>
<li>Acesse a página do <a href="https://console.cloud.google.com/">Google Cloud Console</a>.</li>
<li>Clique no botão “Criar projeto” para criar um novo projeto.</li>
<li>Após criar um projeto, clique no ícone de menu no canto superior esquerdo e vá para “APIs e Serviços” > “Biblioteca”.</li>
<li>Na página “Biblioteca”, pesquise por “Google Sheets API” na barra de pesquisa</li>
<li>Clique no resultado “Google Sheets API” quando ele aparecer.</li>
<li>Na página da API do Google Sheets, clique no botão “Ativar” para habilitar a API para o seu projeto.</li>
<li>Após ativar a API, clique no link/botão “Credenciais” no painel esquerdo do navegador.</li>
<li>Na página “Credencias”, clique no botão “Criar credenciais” e selecione “Chave da API”.</li><br>
Será gerada uma chave da API do Google Sheets. Anote o valor da chave e adicione ele ao lado do link da planilha, como está no repositório, que você pode acessá-lo aqui.

<hr>
<h2>Configurando a API do Google Drive:</h2>
<li>Acesse a página do <a href="https://console.cloud.google.com/">Google Cloud Console</a> e abra o projeto criado anteriormente.</li>
<li>Na página do projeto, clique no ícone de menu no canto superior esquerdo e vá para "APIs e Serviços" > "Biblioteca".</li>
<li>Na página "Biblioteca", pesquise por "Google Drive API" na barra de pesquisa.</li>
<li>Quando a API do Google Drive for exibida nos resultados, clique nela.</li>
<li>Na página da API do Google Drive, clique no botão "Ativar" para habilitar a API para o seu projeto.</li>
<li>Siga os passos necessários para obter a chave da API do Google Drive e adicione-a ao seu código.</li><br>

Também, é necessário ter uma chave da API Elastic Email. Para obter uma chave da API Elastic Email, siga os passos detalhados abaixo:

<hr>
<h2>Obtendo a chave da API Elastic Email:</h2>
<li>Acesse o site da Elastic Email em https://elasticemail.com/.</li>
<li>No canto superior direito da página inicial, clique em "Sign Up" ou "Get Started" para criar uma nova conta.</li>
<li>Preencha o formulário de registro com as informações solicitadas, como nome, endereço de e-mail e senha. Certifique-se de fornecer um endereço de e-mail válido, pois você precisará confirmar a conta por meio dele.</li>
<li>Após preencher o formulário, clique em "Create Account" ou "Sign Up" para criar a conta.</li>
<li>Acesse o e-mail fornecido durante o registro e verifique sua caixa de entrada. Procure por um e-mail da Elastic Email com um link de confirmação. Clique no link para confirmar sua conta e ativar o acesso.</li>
<li>Após confirmar a conta, volte ao site da Elastic Email e faça login usando as credenciais que você criou.</li>
<li>No painel de controle do Elastic Email, você encontrará diferentes seções e configurações. Navegue até a seção "API" ou "API Key". Normalmente, essa seção está localizada no menu principal ou em um submenu.</li>
<li>Dentro da seção "API", você verá a opção de criar uma nova chave da API. Clique em "Create a new API Key" ou "Generate API Key".</li>
<hr>

Certifique-se de substituir os respectivos valores no código, como o link da planilha, a chave da API do Google Sheets e a chave da API do Elastic Email. Isso permitirá que a integração funcione corretamente.

Lembre-se de que essas instruções são gerais e podem variar um pouco dependendo do layout e das atualizações dos sites.
