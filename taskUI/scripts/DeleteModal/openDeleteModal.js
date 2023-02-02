const $opemDeleteModalButton = document.querySelectorAll(".deleteTask");
const $closeDeleteModalButton = document.querySelector('.cancelButton')

for (const openDeleteModalBtn of $opemDeleteModalButton) {
    openDeleteModalBtn.addEventListener("click", () =>{
        const $deleteModal = document.querySelector(".modalDeleteBox");
        $deleteModal.classList.remove("hidden")
    })
}
$closeDeleteModalButton.addEventListener("click",() =>{
    const $deleteModal = document.querySelector(".modalDeleteBox");
    $deleteModal.classList.add("hidden")

})