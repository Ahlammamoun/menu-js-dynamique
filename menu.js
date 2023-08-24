const menu = [
    {
        id: 1,
        title: "chlada",
        category: "déjeuner",
        price: "45.99",
        img: "https://img.over-blog.com/500x350/4/33/47/49/photos-diverses/repas-marocain.jpg",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },
    {
        id: 2,
        title: "robs",
        category: "déjeuner",
        price: "11.99",
        img: "https://assets.afcdn.com/recipe/20200323/109208_w1024h1024c1cx2880cy1920.webp",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },

    {
        id: 3,
        title: "mechoui",
        category: "diner",
        price: "17.99",
        img: "https://m1.zeste.ca/serdy-m-dia-inc/image/upload/f_auto/fl_lossy/q_auto:eco/x_0,y_1404,w_3456,h_1944,c_crop/w_1200,h_630,c_fill/v1543527730/foodlavie/prod/recettes/mechoui-d-agneau-aux-epices-berberes-ca03057c",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },

    {
        id: 4,
        title: "crèpes mille trous",
        category: "petit-déjeuner",
        price: "25.99",
        img: "https://www.lameridionale.fr/sites/default/files/media/image/2022-10/Baghrir.jpg",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },

    {
        id: 5,
        title: "miloui",
        category: "petit-déjeuner",
        price: "55.99",
        img: "https://media.jemepropose.com/offers_pictures/member_584173/offer_611093/offer_611093_picture_673879.png",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },

    {
        id: 6,
        title: "poulet aux olives",
        category: "diner",
        price: "58.99",
        img: "https://marocunivers.com/images/cuisine/%D8%A7%D9%84%D8%AF%D8%AC%D8%A7%D8%AC-%D9%85%D8%AD%D9%85%D8%B1-%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D9%85%D8%BA%D8%B1%D8%A8%D9%8A%D8%A91.jpg",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },

    {
        id: 7,
        title: "tajine",
        category: "déjeuner",
        price: "35.99",
        img: "https://d1bvpoagx8hqbg.cloudfront.net/originals/les-plats-traditionnel-marocains-4afbd21222f26a2affb4edcd88877383.jpg",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },
    {
        id: 8,
        title: "couscous",
        category: "déjeuner",
        price: "15.99",
        img: "https://www.lameridionale.fr/sites/default/files/styles/2000x860_focus/public/media/image/2022-10/couscous.jpg?h=d464d9b4&itok=FKG6FEEm",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },

];


const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");


// load items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();

});

function displayMenuItems(menuItems) {
    //console.log("shake and bake");
    let displayMenu = menuItems.map(function (item) {
        //console.log(item);
        return ` <article class="menu-item">
<img src=${item.img} class="photo" alt=${item.title}>
<div class="item-info">
    <header>
    <h4>${item.title}</h4>
    <h4 class="price">${item.price}</h4>
    </header>
    <p ${item.desc}
    </p>
</div>
</article>`;

    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;

}

function displayMenuButtons(){

    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
        return values
    }, ['all'])
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    })
        .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");
    //filter items
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItems) {
                if (menuItems.category === category) {

                    return menuItems;
                }

            });
            if (category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });




}