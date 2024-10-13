// Selecionar os elementos do formulário
const form = document.querySelector("form")
const itemName = document.getElementById("itemName")

// Seleciona os elementos da lista
const itemsList = document.querySelector("ul")
const itemsName = document.querySelector("ul li div span")

form.onsubmit = (event) =>{
    event.preventDefault()

    const newItem ={
        id: new Date().getTime(),
        item: itemName.value,
        create_at: new Date(),
    }

    itemAdd(newItem)
}

// Adicionar um novo item na lista
function itemAdd(newItem){
    try {
        // Criar o elemento para adicionar o item (li) na lista (ul)
        const cardItem = document.createElement("li")
        cardItem.classList.add("list")

        //Criar a info
        const itemInfo = document.createElement("div")
        itemInfo.classList.add("left-group")

        // Criar label
        const labelItem = document.createElement("label")
        labelItem.classList.add("radio-image")

        // Criar checkbox
        const itemCheck = document.createElement("input")
        itemCheck.setAttribute("type", "checkbox")
        itemCheck.classList.add("radio-checkbox")

        // Criar o nome do item
        const nameItem = document.createElement("span")
        nameItem.textContent = newItem.item

        // Criar icone de lixo
        const removeIcon = document.createElement("img")
        removeIcon.classList.add("remove-icon")
        removeIcon.setAttribute("src", "assets/icons/Frame-3.png")
        removeIcon.setAttribute("alt", "remover")
        

        itemInfo.append(labelItem, nameItem)

        labelItem.append(itemCheck)

        cardItem.append(itemInfo, removeIcon)

        itemsList.append(cardItem)

        formClear()


    } catch (error) {
        console.log(error)
        alert("Não foi possível adicionar o item na lista. Tente novamente.")
    }
}

// Evento que captura o clique nos itens da lista
itemsList.addEventListener("click", function(event){
    // Verificar se é o ícone de excluir
    if(event.target.classList.contains("remove-icon")){
        // Obtem a li pai do elemento clicado
        const itemM = event.target.closest(".list")

        // Remove o item da lista
        itemM.remove()
        showMessage()

        function showMessage() {
            const message = document.getElementById("alert");
            
            // Altera o display para 'block' para exibir a seção
            message.style.display = "block";
            
            // Após 5 segundos, oculta novamente com 'display: none'
            setTimeout(() => {
                message.style.display = "none";
            }, 3000); // 3000 milissegundos = 3 segundos
        }
    }

})

function formClear(){
    itemName.value = ""

    itemName.focus()

}