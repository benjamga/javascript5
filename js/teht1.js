document.querySelectorAll('td')[0].innerHTML = 'Benjamin';
document.querySelectorAll('td')[1].innerHTML = 'Gaskin';
document.querySelectorAll('td')[2].innerHTML = 'Beni';
document.querySelectorAll('td')[3].innerHTML = 'Puutie 3, 07235 Espoo';

const ekaRivi = document.querySelectorAll('tr')[0];
const th = document.createElement('th');
th.innerHTML = 'Puh.';
ekaRivi.appendChild(th);
ekaRivi.removeChild(document.querySelectorAll('th')[2]);
const tokaRivi = document.querySelectorAll('tr')[1];
const td = document.createElement('td');
td.innerHTML = '050 5489235';
tokaRivi.appendChild(td);
tokaRivi.removeChild(document.querySelectorAll('td')[2]);
