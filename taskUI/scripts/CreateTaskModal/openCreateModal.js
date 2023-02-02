const $opemCreateTaskModalButton = document.querySelector(".headerNewTask");
const $closeCreateTaskModalButton = document.querySelector('.cancelCreateButton')


    $opemCreateTaskModalButton.addEventListener("click", () =>{
        const $modalCreateTask = document.querySelector(".modalCreateBox");
        $modalCreateTask.classList.remove("hidden")
    })



$closeCreateTaskModalButton.addEventListener("click",() =>{
    const $modalCreateTask = document.querySelector(".modalCreateBox");
    $modalCreateTask.classList.add("hidden")

})


