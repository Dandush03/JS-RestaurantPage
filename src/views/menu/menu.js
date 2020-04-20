import './menu.scss';

const menuList = require('./menu.json');

/** Menu Page */
const MenuPage = () => {
  const menu = document.createElement('div');
  menu.id = 'menu';
  menu.className = 'main-container menu';


  Object.keys(menuList).forEach((key) => {
    const menuDiv = document.createElement('div');
    Object.values(menuList[key]).forEach((menuPlates, index) => {
      /** Create Menu Container */
      menuDiv.setAttribute('name', `menu-${index + 1}`);
      Object.keys(menuPlates).forEach((plate, number) => {
        if (number === 0) {
          const h2 = document.createElement('h2');
          h2.innerHTML = menuPlates.title;
          menuDiv.appendChild(h2);
        } else {
        /** Create Plate Container */
          const div = document.createElement('div');
          div.setAttribute('name', `plate-${number + 1}`);
          /** Create Plate Title */
          const h4 = document.createElement('h4');
          h4.innerHTML = menuPlates.title;
          div.appendChild(h4);
          /** Create Plate Description */
          const p = document.createElement('p');
          p.innerHTML = menuPlates.description;
          div.appendChild(p);
          /** Create Plate Price */
          const span = document.createElement('span');
          span.innerHTML = menuPlates.cost;
          div.appendChild(span);
          /** Append To Menu Tab */
          menuDiv.appendChild(div);
        }
      });
    });
    menu.appendChild(menuDiv);
  });

  return { menu };
};

const menuPage = MenuPage();
const { menu } = menuPage;

export default menu;
