const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: "15.99",
        img: "https://recettescookeo.com/wp-content/uploads/2015/03/recettes-plats-cookeo.jpg",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },
    {
        id: 2,
        title: "buttermilk pancakes",
        category: "lunch",
        price: "11.99",
        img: "https://www.leblogdistanbul.com/wp-content/uploads/2014/12/20-plats-turcs-a-tester-absolument.png",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },

    {
        id: 3,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: "17.99",
        img: "https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2020.2F09.2F07.2F04c1a5fd-0468-45e9-8853-32b820da8ede.2Ejpeg/1200x1200/quality/80/crop-from/center/une-semaine-de-plats-vegetariens-a-cuisiner-rapidement-le-midi-en-teletravail.jpeg",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },

    {
        id: 4,
        title: "buttermilk pancakes",
        category: "lunch",
        price: "25.99",
        img: "https://i.notretemps.com/1400x787/smart/2022/02/28/plats-prepares.jpeg",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },

    {
        id: 5,
        title: "buttermilk pancakes",
        category: "shakes",
        price: "355.99",
        img: "https://www.leblogdistanbul.com/wp-content/uploads/2014/12/20-plats-turcs-a-tester-absolument.pngo6.png",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },

    {
        id: 6,
        title: "buttermilk pancakes",
        category: "shakes",
        price: "58.99",
        img: "https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Eohmymag.2Ecom.2Fs3.2Ffromm.2Frecette.2Fdefault_2021-01-27_27a5e1f7-1cc3-485c-90a7-f9db9ab01377.2Ejpeg/1200x675/quality/80/les-10-plats-incontournables-de-la-cuisine-italienne.jpg",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },

    {
        id: 7,
        title: "buttermilk pancakes",
        category: "shakes",
        price: "15.99",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg25tVJzsk4t1xDGbqmTaK-aRd-BfYmnn61Jw2FIpns0oP_xSB30fWLcLkm3ggJu4X2dk&usqp=CAU",
        desc: `lorlkjvjklreflkjlklkazjkfcjkhkjdvjkljzlknrlvljrenlkvkre`,
    },
    {
        id: 8,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: "15.99",
        img: "https://recettes.de/images/blogs/le-blog-de-samar/spaghetti-aux-boulettes-de-viande-a-l-italienne.640x480.jpg",
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