const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "img/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`
  },
  {
    id: 2,
    title: "dinner double",
    category: "lunch",
    price: 13.99,
    img: "img/item-2.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "snakes",
    price: 6.99,
    img: "img/item-3.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "img/item-4.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`
  },
  {
    id: 5,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "img/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
]

const menuList = document.querySelector(".menu-list");
const containerBtns = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function() {
  displayMenuItems(menu);
  displayButtonItems();
});

function displayMenuItems(menuItems) {

  let displayMenu = menuItems.map(function(menuItem) {
    return `<article class="menu-item"> 
    <div class="menu-imgblock">
      <img class="menu-img" src=${menuItem.img} alt="">
    </div>
      <div class="menu-item-body">
        <div class="menu-item-header">
          <h3 class="menu-item-title">${menuItem.category}</h3>
          <h3 class="menu-item-price">$${menuItem.price}</h3>
        </div>
        <div class="menu-item-content">
          <p>
          ${menuItem.desc}
          </p>
        </div>
      </div>
    </article>`;
  })
  displayMenu = displayMenu.join('');
  menuList.innerHTML = displayMenu;
}

function displayButtonItems() {

  let categoryBtns = menu.reduce(function(btnArr, menuItem) {

    if (!btnArr.includes(menuItem.category)) {
      btnArr.push(menuItem.category);
    }
    return btnArr;
  }, ["all"]);
  
  let displayButtons = categoryBtns.map(function(categoryBtn) {
    return `<button type="button" class="btn-filter" data-category=${categoryBtn}>${categoryBtn}</button>`;
  });
  displayButtons = displayButtons.join("");
  containerBtns.innerHTML = displayButtons;

  containerBtns.addEventListener("click", function(e){
    let category = e.target.dataset.category;    

    let categoryMenu = menu.filter(function(menuItem) {
      if (menuItem.category === category) {
        return true;
      }
    });    
    displayMenuItems(categoryMenu);

    if (category === "all") {
      displayMenuItems(menu);
    }

  });

}

