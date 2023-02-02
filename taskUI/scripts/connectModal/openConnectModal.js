const $openConnectModalButton = document.querySelector(".openConnectModal");
const $closeConnectModalButton = document.querySelector('.connectApiModaButtonCancel')




$openConnectModalButton.addEventListener("click", () =>{
        const $modalConnectApi = document.querySelector(".connectApiModalBox");
        $modalConnectApi.classList.remove("hidden")
         const $takeApi = document.querySelector(".connectApiModalLabelInput")
         $takeApi.value =  localStorage.getItem("Api");

        })



    $closeConnectModalButton.addEventListener("click",() =>{
    const $modalConnectApi = document.querySelector(".connectApiModalBox");
    $modalConnectApi.classList.add("hidden")

})