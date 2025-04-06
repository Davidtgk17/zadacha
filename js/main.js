let taskList = document.querySelector('.taskList')
let button = document.querySelector('button')
let input = document.querySelector('input')
let error = document.querySelector('.error')

let point = 0


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
    
// Новая разметка 
    let newcom = `
        <li class = 'list-group-item'>
            <div class = 'task-title'><span class='point'>${point})</span>${textvalue}</div>
            <div class = 'btn__group'>
                <button class= 'btn__action'>
                    <img src='img/tick.svg' class = 'btn__action'>
                </button>
                <button class= 'btn__action'>
                    <img src='img/cross.svg' class = 'btn__action'>
                </button>
            </div>
        </li>
    `
    taskList.insertAdjacentHTML('beforeend', newcom)

}