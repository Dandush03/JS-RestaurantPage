import './style.scss';

let pageSetup = null;
let createImg = null;
let containers = null;

function menuNav() {
  const name = this.innerHTML.toLowerCase();
  createImg.current(name);
  containers.currentMenu(name);
}

/** Create Main Page Setup with Quick Access */
const PageSetup = () => {
  const structure = [];

  const header = document.createElement('header');
  const img = document.createElement('div');
  img.className = 'img-container';
  const main = document.createElement('main');
  const footer = document.createElement('footer');

  structure.push(img);
  structure.push(header);
  structure.push(main);
  structure.push(footer);

  const mainContainer = document.getElementById('content');

  structure.forEach((obj) => {
    mainContainer.appendChild(obj);
  });

  return {
    header, img, main, footer,
  };
};

/** Create Main Left Img with Img Controls */
const LeftImgSetUp = () => {
  const div = document.createElement('div');
  div.className = 'main-img';

  const home = document.createElement('img');
  home.src = '../src/img/home.jpg';
  home.className = 'show';
  home.name = 'home';

  const contact = document.createElement('img');
  contact.src = '../src/img/contact.jpg';
  contact.className = 'noshow';
  contact.name = 'contact';

  const menu = document.createElement('img');
  menu.src = '../src/img/menu.jpg';
  menu.className = 'noshow';
  menu.name = 'menu';

  div.appendChild(home);
  div.appendChild(contact);
  div.appendChild(menu);
  pageSetup.img.appendChild(div);

  const current = (name) => {
    const arrOfImg = div.querySelectorAll('img');
    arrOfImg.forEach((img) => {
      if (img.name === name) {
        img.setAttribute('class', 'show');
      } else {
        img.setAttribute('class', 'noshow');
      }
    });
  };

  return { current };
};

/** Create Header Nav Section */
const Header = () => {
  const menuArr = ['Menu', 'Contact', 'Home'];
  const div = document.createElement('div');
  const menu = document.createElement('menu');
  const ul = document.createElement('ul');
  menuArr.forEach((element) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerHTML = element;
    a.href = '#';
    a.onclick = menuNav;
    li.appendChild(a);
    ul.appendChild(li);
  });

  menu.appendChild(ul);
  div.appendChild(menu);

  pageSetup.header.appendChild(div);

  return { div, menuArr };
};

/** Create the Main Container */
const MainContainer = () => {
  const arrElements = [];
  const home = document.createElement('div');
  home.id = 'home';
  home.className = 'main-container home';
  arrElements.push(home);

  const contact = document.createElement('div');
  contact.id = 'contact';
  contact.className = 'main-container contact';
  arrElements.push(contact);

  const menu = document.createElement('div');
  menu.id = 'menu';
  menu.className = 'main-container menu';
  arrElements.push(menu);

  const div = pageSetup.main;
  div.appendChild(home);

  const currentMenu = (name) => {
    arrElements.forEach((element) => {
      if (element.id === name) {
        div.innerHTML = '';
        div.appendChild(element);
      }
    });
  };

  return {
    currentMenu, home, contact, menu,
  };
};


/** Home Page */
const HomePage = () => {
  const h2 = document.createElement('h2');
  h2.innerHTML = 'This is the Best Restaurant Page EVER ! ! !';
  containers.home.appendChild(h2);

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Restaurant Name [HERE]';
  containers.home.appendChild(h1);

  const p = document.createElement('p');
  p.innerHTML = 'A VERY NICE CONTENT TO GET THE ATTENTION OF ALL THE PEOPLE WHO GET IN THE PAGE AND LIKE TO TRAY NEW GOURMETS STUFF AND THINGS LIKE THAT';
  containers.home.appendChild(p);
};

window.onload = () => {
  pageSetup = PageSetup();
  createImg = LeftImgSetUp();
  // eslint-disable-next-line no-unused-vars
  const header = Header();
  containers = MainContainer();
  // eslint-disable-next-line no-unused-vars
  const homePage = HomePage();
};
