import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css'

import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData)
    let datas = jsonData['restaurants']
    let dataList = '';
    datas.forEach(function(data) {
        dataList +=`

        <div class="post-item">
        <div class="post-item__thumbnail">
        <p class="post-item__city">${data['city']}</p>
            <img class="post-item__thumbnail" src="${data['pictureId']}" alt="${data['name']}"">
            </div>
            <div class="post-item__content">
            <p class="post-item__rating">  Rating : ${data['rating']}n</p>
                       

                <h1 class="list_item_title">${data['name']}</h1>
                <div class="post-item__description">${data['description'].slice(0, 150)}...</div>
            </div>
        </div>
        </div>
        `;
    });
    document.querySelector('#restaurant-card').innerHTML = dataList;  
});

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});

