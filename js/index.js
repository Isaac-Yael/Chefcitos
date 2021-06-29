
const tacosSuadero = document.getElementById('tacosSuadero');
const tacosCampechanos = document.getElementById('tacosCampechanos');
const volcanes = document.getElementById('volcanes');
const tlacoyos = document.getElementById('tlacoyos');
const listItem = document.getElementById('order_list')

const addTacosSuadero = () => {
    firstOrder = document.createElement('li')
    firstOrder.classList.add('list_style')
    firstOrder.textContent = '2 tacos de Suadero'
    listItem.append(firstOrder)
}

tacosSuadero.addEventListener('click', addTacosSuadero)