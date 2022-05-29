const list = document.querySelector('.list')
const template = document.querySelector('#template')

// Клонуємо зміст тегу <template>
const item = template.content.cloneNode(true)

// Вставляемо склонованный контент на сторінку
list.append(item)
