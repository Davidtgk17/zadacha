let taskList = document.querySelector('.taskList')
let button = document.querySelector('button')
let input = document.querySelector('input')
let error = document.querySelector('.error')

let tasks = []


let point = localStorage.getItem('point')


button.onclick = function() {
    let textvalue = input.value
    if(textvalue.length < 5){
        error.textContent = 'Ошибка(введите больше 5 символов)'
        return
    } else {
        error.textContent = ''
    }
    point++
    if(point == 1) {
        document.querySelector('.taskList__h3').classList.add('none')
    }

    // Создание объекта
    let task = {
        id: Date.now(),
        text: textvalue,
        pos: false
    }

    let CssClass = ''

    if(task.pos) {
        CssClass = 'task-title task__done'
    } else {
        CssClass = 'task-title'
    }
    tasks.push(task)
    
// Новая разметка 
    let newcom = `
        <li class = 'list-group-item' id='${task.id}'>
            <div class = '${CssClass}'><span class='point'>${point})</span>${task.text}</div>
            <div class = 'btn__group'>
                <button class= 'btn__action' data-action='done'>
                    <img src='img/tick.svg' class = 'btn__action btn__done'>
                </button>
                <button class= 'btn__action' data-action='close'>
                    <img src='img/cross.svg' class = 'btn__action btn__close'>
                </button>
            </div>
        </li>
    `
    taskList.insertAdjacentHTML('beforeend', newcom)
    
    input.value = ''

    // local()
}

// function local() {
//     localStorage.setItem('point', point)
// }

taskList.addEventListener('click', function(e) {
    if(e.target.dataset.action == 'done') {
        let done = e.target.closest('.list-group-item')
        done.classList.toggle('task__done')
    }


})

taskList.addEventListener('click', function(e) {
    if(e.target.dataset.action == 'close') {
            let close = e.target.closest('.list-group-item')    
            let id = close.id
            tasks = tasks.filter(function(item) {
                return item.id != id
            })
            close.remove()
            point--
        }

       
})
   
  