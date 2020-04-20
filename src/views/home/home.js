import './home.scss';

/** Home Page */
const HomePage = () => {
  const home = document.createElement('div');
  home.id = 'home';
  home.className = 'main-container home';

  const h2 = document.createElement('h2');
  h2.innerHTML = 'This is the Best Restaurant Page EVER ! ! !';
  home.appendChild(h2);

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Restaurant Name [HERE]';
  home.appendChild(h1);

  const p = document.createElement('p');
  p.innerHTML = 'A VERY NICE CONTENT TO GET THE ATTENTION OF ALL THE PEOPLE WHO GET IN THE PAGE AND LIKE TO TRAY NEW GOURMETS STUFF AND THINGS LIKE THAT';
  home.appendChild(p);

  const p1 = document.createElement('p');
  p1.innerHTML = 'SOME MORE CONTENT ABOUT A THING THAT I THOUGHTFULLY DO NOT KNOW WHAT. I AM RUNNING OUT OF WORD FOR THIS PAGE BUT . . . . IT IS LOOKING GOOD AND YOU KNOW THAT I AM RIGHT';
  home.appendChild(p1);

  return { home };
};

const initializer = HomePage();
const { home } = initializer;

export default home;
