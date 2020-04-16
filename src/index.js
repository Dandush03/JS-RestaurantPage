const PageSetup = () => {
  
  const structure = [];

  const header = document.createElement('header')
  const main = document.createElement('main')
  const footer = document.createElement('footer')

  structure.push(header)
  structure.push(main)
  structure.push(footer)

  const mainContainer = document.getElementById('content')

  structure.forEach(obj => {
    mainContainer.appendChild(obj)
  });

  return {header,main,footer}
}

window.onload = () => {
  const pageSetup = PageSetup();
}
