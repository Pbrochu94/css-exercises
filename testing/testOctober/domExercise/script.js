let textValue = document.querySelector(".textBox")
let addButton = document.querySelector(".promptSection button")
let listContainer = document.querySelector(".listContainer")

addButton.addEventListener("click", addInputToList)
let listSection = document.createElement("ul")
listContainer.append(listSection)

function addInputToList()
{
    let newLi = document.createElement("li")

    let newLiText = document.createElement("div")
    newLiText.textContent = textValue.value
    newLiText.style.display = "inline-block"
    newLi.append(newLiText)
    newLi.classList.add("article")
    newLi.style.paddingBottom = "16px"
    

    let deleteButton = document.createElement("button")
    listSection.append(newLi)
    newLi.append(deleteButton)
    deleteButton.style.height = "16px"
    deleteButton.style.marginLeft = "6px"
    deleteButton.style.paddingBottom = "2px"
    deleteButton.textContent = "Delete"
    deleteButton.style.fontSize = "12px"
    deleteButton.classList.add("buttonDel")
    deleteButton.addEventListener("click", deleteArticle)

    textValue.value = ""
    textValue.focus()
    
}

function deleteArticle(event)
{
    console.log(event.target)
    event.target.parentNode.remove()
}

document.addEventListener("DOMContentLoaded", function(e)
{
    alert("You are loading !")
})