
const addTodoButton = document.querySelector('.addButton')
const toDoContainer = document.querySelector('.todos')
const inputText = document.querySelector('.inputText')
const addClearButton = document.querySelector('.clearButton')

addTodoButton.addEventListener('click', function() {
    if(inputText.value === '')
    alert('input boş olamaz')
    else{
        let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML= inputText.value;
    inputText.value = '';


    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through'
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
    })

    addClearButton.addEventListener('click', function() {
            paragraph.remove();
    })
    }
    
    
} )


