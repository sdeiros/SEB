# Sistema de Login
<li><a href="https://docs.google.com/spreadsheets/d/1Bz1yFGSxaLlvo6MNsiRdqcgNpDf7YbUS358S7lAV1-Y/edit?usp=sharing" target="_blank"><b>Planilha Excel - Google</b></a></li>
<hr>
<h1>Tela de Login</h1>
<p>Na tela de login, o usuário possui dois campos que são obrigatórios para serem preenchidos. No primeiro campo, o usuário deverá preencher com o e-mail institucional ou com o CPF. No campo de login, o usuário pode usar o CPF, pois nem todos os alunos possuem e-mail institucional. 
No segundo campo, o usuário deve preencher com uma senha e caso esta senha esteja correta, o usuário consegue entrar no sistema. Porém, na mesma tela de login, o usuário possui um botão para recuperar a senha, onde, quando ele clicar nesse botão, irá abrir uma tela onde o usuário deverá preencher com o e-mail institucional. Caso este e-mail informado esteja armazenado no sistema, o usuário receberá neste e-mail informado um e-mail com a mensagem que informa a senha para realizar o login.</p>

<h1>Desenvolvimento</h1>
<p>Utilizando a linguagem de programação JavaScript e as Ferramentas de marcação HTML, foi feita esta tela de login, onde o código do repositório online está aqui.
O sistema consulta em uma planilha do Google Sheets (Planilha Excel) para verificar as credenciais informadas pelo usuário. Caso as credenciais informadas estejam corretas, o usuário é redirecionado para a tela index, que por ventura, será a tela oficial com todas as funções do sistema. Caso as credenciais informadas não estejam na planilha, seja o e-mail institucional/CPF ou a senha, aparece uma mensagem de erro, solicitando que o usuário tente realizar o login novamente. 
Se o usuário esqueceu a senha, ele pode solicitar o envio da senha para o e-mail institucional que está armazenado no sistema. Esta mensagem é enviada por e-mail através da API Elastic Email, que faz o envio de e-mails sem a necessidade de outros arquivos, podendo realizar esse sistema de recuperação da senha apenas com JavaScript e HTML.</p>
<hr>
É necessário adicionar o link da planilha + a chave da API do Google Sheets, para conseguir essa chave, siga os passos abaixo: <br><br>
<li>Acesse a página do <a href="https://console.cloud.google.com/">Google Cloud Console</a>.</li>
<li>Clique no botão “Criar projeto” para criar um novo projeto.</li>
<li>Após criar um projeto, clique no ícone de menu no canto superior esquerdo e vá para “APIs e Serviços” > “Biblioteca”.</li>
<li>Na página “Biblioteca”, pesquise por “Google Sheets API” na barra de pesquisa</li>
<li>Clique no resultado “Google Sheets API” quando ele aparecer.</li>
<li>Na página da API do Google Sheets, clique no botão “Ativar” para habilitar a API para o seu projeto.</li>
<li>Após ativar a API, clique no link/botão “Credenciais” no painel esquerdo do navegador.</li>
<li>Na página “Credencias”, clique no botão “Criar credenciais” e selecione “Chave da API”.</li><br>
Será gerada uma chave da API do Google Sheets. Anote o valor da chave e adicione ele ao lado do link da planilha, como está no repositório, que você pode acessá-lo aqui.

Também, é necessário ter uma chave da API Elastic Email. Para obter uma chave da API Elastic Email, siga os passos detalhados abaixo:

<li>Acesse o site da Elastic Email em https://elasticemail.com/.</li>
<li>No canto superior direito da página inicial, clique em "Sign Up" ou "Get Started" para criar uma nova conta.</li>
<li>Preencha o formulário de registro com as informações solicitadas, como nome, endereço de e-mail e senha. Certifique-se de fornecer um endereço de e-mail válido, pois você precisará confirmar a conta por meio dele.</li>
<li>Após preencher o formulário, clique em "Create Account" ou "Sign Up" para criar a conta.</li>
<li>Acesse o e-mail fornecido durante o registro e verifique sua caixa de entrada. Procure por um e-mail da Elastic Email com um link de confirmação. Clique no link para confirmar sua conta e ativar o acesso.</li>
<li>Após confirmar a conta, volte ao site da Elastic Email e faça login usando as credenciais que você criou.</li>
<li>No painel de controle do Elastic Email, você encontrará diferentes seções e configurações. Navegue até a seção "API" ou "API Key". Normalmente, essa seção está localizada no menu principal ou em um submenu.</li>
<li>Dentro da seção "API", você verá a opção de criar uma nova chave da API. Clique em "Create a new API Key" ou "Generate API Key".</li>
<hr>
Será gerada uma nova chave da API. Certifique-se de copiá-la ou anotá-la, pois você precisará dela para autenticar suas solicitações à API Elastic Email.
Guarde sua chave da API em um local seguro. Você poderá usar essa chave para autenticar suas solicitações à Elastic Email API em seu aplicativo ou código. <br><br>Lembre-se de que essas instruções são gerais e podem variar um pouco dependendo do layout e das atualizações dos sites. 
</p>
