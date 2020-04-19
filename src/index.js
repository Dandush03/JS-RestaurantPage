import './index.scss';
import home from './views/home/home';
import contact from './views/contact/contact';
import menu from './views/menu/menu';

let pageSetup = null;
let createImg = null;
let containers = null;

/** Tab Navigation */
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

  const homePic = document.createElement('img');
  homePic.src = '../src/img/home.jpg';
  homePic.className = 'show';
  homePic.name = 'home';

  const contactPic = document.createElement('img');
  contactPic.src = '../src/img/contact.jpg';
  contactPic.className = 'noshow';
  contactPic.name = 'contact';

  const menuPic = document.createElement('img');
  menuPic.src = '../src/img/menu.jpg';
  menuPic.className = 'noshow';
  menuPic.name = 'menu';

  div.appendChild(homePic);
  div.appendChild(contactPic);
  div.appendChild(menuPic);
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
  const menuList = document.createElement('menu');
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

  menuList.appendChild(ul);
  div.appendChild(menuList);

  pageSetup.header.appendChild(div);

  return { div, menuArr };
};

/** Create the Main Container */
const MainContainer = () => {
  const arrElements = [];

  arrElements.push(home);
  arrElements.push(contact);
  arrElements.push(menu);

  const div = pageSetup.main;
  div.appendChild(menu);
  const currentMenu = (name) => {
    arrElements.forEach((element) => {
      if (element.id === name) {
        div.innerHTML = '';
        div.appendChild(element);
      }
    });
  };
  return { currentMenu };
};

window.onload = () => {
  pageSetup = PageSetup();
  createImg = LeftImgSetUp();
  containers = MainContainer();
  Header();
};
