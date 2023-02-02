  
  function createNewTask(){
    const $api = localStorage.getItem("Api");
    const form = document.querySelector('#modalCreateForm');
    form.addEventListener('submit', (event) => {
    event.preventDefault(); // evita que o formulário seja enviado pelo navegador
    const $createTaskBtn = document.querySelector(".createTaskButton")  
    const title = document.querySelector('#titleInput').value;
    const dados = { title };

    fetch($api, {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((resultado) => {
      console.log(resultado);
    });

    const $modalCreateTask = document.querySelector(".modalCreateBox");
    $modalCreateTask.classList.add("hidden")

    setTimeout(() => {
      document.location.reload();
    }, 300);
  }        
 )
 }




            
  




