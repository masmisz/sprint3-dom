//DOM Selection

//getElementById() --> memilih elemen yang ada di dalam DOM berdasarkan id.
const sectionA = document.getElementById('a');


//getElementsByTagName --> memilih elemen yang ada di dalam DOM berdasarkan tag tertentu.
const paragraph = document.getElementsByTagName('p');
const paragraphIndex = document.getElementsByTagName('p')['1'];


//getElementsByClassName --> memilih elemen yang ada di dalam DOM berdasarkan class tertentu.
const paragraf1 = document.getElementsByClassName('a');


//querySelector() --> mencari elemen berdasarkan selektor
const jojo = document.querySelector('section#b ul li:nth-child(1)');

//querySelectorAll() --> mencari elemen berdasarkan selector
const mentor = document.querySelectorAll('section#b ul li');

