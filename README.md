<h1>Task Manager v1.0.0(beta)</h1>
<p> task manager foi criado com a intenção de aprimorar estudos sobre api rest</p>





Navegação:
<ul>
  <li><a href = "#interfaceWeb">interfaceweb</a>
     <ol type = "1">
        <li><a href = "#interfaceWebPaginaInicial">pagina inicial</a></li>
        <li><a href = "#interfaceWebConectandoApi">Conectando Interface WEB a API</a></li>
        <li><a href = "#interfaceWebCreateTask">Criando Uma Nova Tarefa</a></li>
        <li><a href = "#interfaceWebCreatedTask">Tarefa Criada</a></li>
        <li><a href = "#interfaceWebDeleteTask">Deletando Tarefa</a></li>
     </ol>
   </li>
  <li><a href = "#API">api</a>
</ul>



<h2 id = "interfaceWeb">Interface Web</h2>
Funcionalidades:
<ul>
  <li>Conexão com API</li>
  <li>Criar Deletar Tarefas</li>
</ul>


tecnologias ultilizadas:
<ul>
  <li>Html</li>
  <li>css</li>
  <li>Javascript</li>
</ul>
<hr>
<h3 id = "interfaceWebPaginaInicial">Pagina Inicial</h3>
  <p>Essa é a pagina inicial do projeto se for a primeira vez usando a aplicação não haverá nenhuma tarefa criada.</p>
  <p>Primeiro vamos nos conectar a api apertando no icone(nuvem) na parte superior da aplicação.</p>
<img src = "/interface/mainPage.png">
 <h3 id = "interfaceWebConectandoApi">Conectando Interface WEB a API</h3>
 <p>Após ter clicado aparecerá uma tela pedindo o link de conexão para a api </p>
<img src = "/interface/connectapi.png">  
<p>Caso ultilize a api disponibilizada nos arquivos deste projeto o ip padrão será o seu <strong>ipv4:3333/tasks/</strong> ou <strong>localhost:3333/tasks/</strong>.<strong>ATENÇÃO</strong> não conectar api com esse endereço <strong>ipv4:3333/tasks</strong> ou <strong>localhost:3333/tasks</strong>. Caso coloque esse endereços, não será possivel deletar as tarefas.</p>
 <h3 id = "interfaceWebCreateTask">Criando Uma Nova Tarefa</h3>
 <p>Após ter se conectado a api a interface web esta habilitada a criar e deletar tarefas.</p>
 <p>Para criar uma tarefa clique no botão <strong>"criar tarefa"</strong> localizado no canto superior direito da aplicação.</p>
<img src = "/interface/createtask.png"> 
 <p>Após o clique aparecerá a tela de criação de tarefas, atualmente só está disponivel criar tarefas apenas com o titulo, crie um titulo da sua tarefa clique em criar tarefa.</p>
 <h3 id = "interfaceWebCreatedTask">Tarefa Criada</h3>
 <p>Após o clique você poderá ver que a tarefa foi criada. </p>
<img src = "/interface/taskcreated.png"> 
  <h3 id = "interfaceWebDeleteTask">Deletando a Tarefa</h3>
  <p>Para deletar uma tarefa clique no icone(lixeira) e depois clique no botão deletar que irá aparecer junto com a tela de confirmação.</p>
<img src = "/interface/deletetask.png">
<hr>
<h2 id = "API">API</h2>

Funcionalidades:
<ul>
  <li>Receber e enviar dados para uma interface!</li>
  <li>Manipular Banco de Dados</li>
</ul>

tecnologias ultilizadas:
<ul>
  <li>NodeJS</li>
  <li>Express</li>
  <li>Prisma</li>
  <li>Cors</li>
  <li>Typescript <strong>Ferramenta de desenvolvimento</strong></li>
  <li>TS-NODE-DEV <strong>Ferramenta de desenvolvimento</strong></li>
</ul>

Rotas:
<ul>
  <li>GET(tasks/) busca dados no banco</li>
  <li>POST(tasks/) insere um novo dado no banco</li>
  <li>PUT(tasks/:id) edita um determinado dado no banco</li>
  <li>DELETE(tasks/:id) deleta um determinado dado no banco</li>
</ul>



