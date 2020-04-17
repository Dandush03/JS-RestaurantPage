import './style.scss';
import * as menuList from './menu.json';


let pageSetup = null;
let createImg = null;
let containers = null;
let map = null;

/** Tab Navigation */
function menuNav() {
  const name = this.innerHTML.toLowerCase();
  createImg.current(name);
  containers.currentMenu(name);
}

/** Embed Google Maps */
const GoogleMaps = () => {
  const mapsContainer = document.createElement('div');
  mapsContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.681918696429!2d-82.05555198448155!3d28.609317691881042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7fabb623b6279%3A0xf09495de73510819!2s99-1%20SE%201st%20St%2C%20Webster%2C%20FL%2033597%2C%20USA!5e0!3m2!1sen!2sve!4v1587148990175!5m2!1sen!2sve" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
  return { mapsContainer };
};

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

  const p1 = document.createElement('p');
  p1.innerHTML = 'SOME MORE CONTENT ABOUT A THING THAT I THOUGHTFULLY DO NOT KNOW WHAT. I AM RUNNING OUT OF WORD FOR THIS PAGE BUT . . . . IT IS LOOKING GOOD AND YOU KNOW THAT I AM RIGHT';
  containers.home.appendChild(p1);
};

/** Menu Page */
const MenuPage = () => {
  Object.keys(menuList).forEach((key) => {
    Object.values(menuList[key]).forEach((menuPlates, index) => {
      /** Create Menu Container */
      const menu = document.createElement('div');
      menu.setAttribute('name', `menu-${index + 1}`);
      menuPlates.forEach((plate, number) => {
        if (number === 0) {
          const h2 = document.createElement('h2');
          h2.innerHTML = plate.title;
          menu.appendChild(h2);
        } else {
        /** Create Plate Container */
          const div = document.createElement('div');
          div.setAttribute('name', `plate-${number + 1}`);
          /** Create Plate Title */
          const h4 = document.createElement('h4');
          h4.innerHTML = plate.title;
          div.appendChild(h4);
          /** Create Plate Description */
          const p = document.createElement('p');
          p.innerHTML = plate.description;
          div.appendChild(p);
          /** Create Plate Price */
          const span = document.createElement('span');
          span.innerHTML = plate.cost;
          div.appendChild(span);
          /** Append To Menu Tab */
          menu.appendChild(div);
        }
      });
      containers.menu.appendChild(menu);
    });
  });
};

/** Contact Page */
const ContactPage = () => {
  const p1 = document.createElement('p');
  p1.innerHTML = 'some contact info (AKA Email)';
  const p2 = document.createElement('p');
  p2.innerHTML = 'some phone';
  const p3 = document.createElement('p');
  p3.innerHTML = 'more phones';
  const p4 = document.createElement('p');
  p4.innerHTML = 'some instagram of facebook things';

  containers.contact.appendChild(p1);
  containers.contact.appendChild(p2);
  containers.contact.appendChild(p3);
  containers.contact.appendChild(p4);
  containers.contact.appendChild(map.mapsContainer);
};

window.onload = () => {
  pageSetup = PageSetup();
  createImg = LeftImgSetUp();
  containers = MainContainer();
  map = GoogleMaps();
  Header();
  HomePage();
  MenuPage();
  ContactPage();
};
