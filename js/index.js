
const tacosSuadero = document.getElementById('tacosSuadero');
const tacosCampechanos = document.getElementById('tacosCampechanos');
const volcanes = document.getElementById('volcanes');
const tlacoyos = document.getElementById('tlacoyos');
const listItem = document.getElementById('order_list')
const alertContainer = document.getElementById('alert_container')
let validarComida = 0
const send = document.getElementById('send_number')
let numberOfAnyFood = document.getElementById('numberOfAnyFood')

const addTacosSuadero = () => {
    alertContainer.style.display = 'flex'
    validarComida = 1
}
const addTacosCampechanos = () => {
    alertContainer.style.display = 'flex'
    validarComida = 2
}
const addTlacoyos = () => {
    alertContainer.style.display = 'flex'
    validarComida = 3
}
const addVolcanes = () => {
    alertContainer.style.display = 'flex'
    validarComida = 4
}
const enviarPedido = () => {
    if (validarComida == 1) {
        firstOrder = document.createElement('li')
        firstOrder.classList.add('list_style')
        if (numberOfAnyFood.value == 1) {
            firstOrder.textContent = `${numberOfAnyFood.value} Taco de Suadero`
        } else {
            firstOrder.textContent = `${numberOfAnyFood.value} Tacos de Suadero`
        }
        listItem.append(firstOrder)
    }
    if (validarComida == 2) {
        firstOrder = document.createElement('li')
        firstOrder.classList.add('list_style')
        if (numberOfAnyFood.value == 1) {
            firstOrder.textContent = `${numberOfAnyFood.value} Taco Campechano`
        } else {
            firstOrder.textContent = `${numberOfAnyFood.value} Tacos Campechanos`
        }
        listItem.append(firstOrder)
    }
    if (validarComida == 3) {
        firstOrder = document.createElement('li')
        firstOrder.classList.add('list_style')
        if (numberOfAnyFood.value == 1) {
            firstOrder.textContent = `${numberOfAnyFood.value} Tlacoyo`
        } else {
            firstOrder.textContent = `${numberOfAnyFood.value} Tlacoyos`
        }
        listItem.append(firstOrder)
    }
    if (validarComida == 4) {
        firstOrder = document.createElement('li')
        firstOrder.classList.add('list_style')
        if (numberOfAnyFood.value == 1) {
            firstOrder.textContent = `${numberOfAnyFood.value} Volcán`
        } else {
            firstOrder.textContent = `${numberOfAnyFood.value} Volcanes`
        }
        listItem.append(firstOrder)
    }
    alertContainer.style.display = 'none'
}

tacosSuadero.addEventListener('click', addTacosSuadero)
tacosCampechanos.addEventListener('click', addTacosCampechanos)
tlacoyos.addEventListener('click', addTlacoyos)
volcanes.addEventListener('click', addVolcanes)
send.addEventListener('click', enviarPedido)