//events handler
const p3 = document.getElementsByClassName('p3')[0];

//bermain dengan warna
function ubahWarna() {
    p3.style.backgroundColor = 'orange'
}

function balikWarna() {
    p3.style.backgroundColor = 'white'
}

p3.onclick = ubahWarna;
p3.ondblclick = balikWarna;


const p2 = document.getElementsByClassName('p2')[0];

function ubahWarnaP2() {
    p2.style.fontFamily = 'calibri'
}

p2.onclick = ubahWarnaP2;


//addEventListener()
const p4 = document.querySelector('#b p')

p4.addEventListener('click', function () {
    // alert('test event listnert');

    const newLi = document.createElement('li')
    const isiNewLi = document.createTextNode('list baru')
    const ul = document.querySelector('#b ul')
    newLi.appendChild(isiNewLi)
    ul.appendChild(newLi)
})

p3.addEventListener('dblclick', function () {
    p3.style.backgroundColor = 'white'
})


function ubahWarna() {
    p3.style.backgroundColor = 'lightblue'
}

function ubahWarna() {
    p3.style.fontColor = 'red'
}

p3.onclick = ubahWarna;

p3.addEventListener('click', function () {
    p3.style.backgroundColor = 'lightblue'
})

p3.addEventListener('click', function () {
    p3.style.color = 'red'
})


p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'red'
})

p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'lightblue'
})
