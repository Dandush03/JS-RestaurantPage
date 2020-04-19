/** Embed Google Maps */
const GoogleMaps = () => {
  const mapsContainer = document.createElement('div');
  mapsContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.681918696429!2d-82.05555198448155!3d28.609317691881042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7fabb623b6279%3A0xf09495de73510819!2s99-1%20SE%201st%20St%2C%20Webster%2C%20FL%2033597%2C%20USA!5e0!3m2!1sen!2sve!4v1587148990175!5m2!1sen!2sve" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
  return { mapsContainer };
};

/** Contact Page */
const ContactPage = () => {
  const contact = document.createElement('div');
  contact.id = 'contact';
  contact.className = 'main-container contact';

  const p1 = document.createElement('p');
  p1.innerHTML = 'some contact info (AKA Email)';
  const p2 = document.createElement('p');
  p2.innerHTML = 'some phone';
  const p3 = document.createElement('p');
  p3.innerHTML = 'more phones';
  const p4 = document.createElement('p');
  p4.innerHTML = 'some instagram of facebook things';

  const map = GoogleMaps();
  contact.appendChild(p1);
  contact.appendChild(p2);
  contact.appendChild(p3);
  contact.appendChild(p4);
  contact.appendChild(map.mapsContainer);
  return { contact };
};

const contactPage = ContactPage();
const { contact } = contactPage;

export default contact;
