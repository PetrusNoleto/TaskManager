function getApiLink(){
    const $takeApi = document.querySelector(".connectApiModalLabelInput").value
    console.log($takeApi)

    localStorage.setItem("Api", $takeApi);

    setTimeout(() => {
        document.location.reload();
      }, 300);
 
}

