// Satu
// Button ini digunakan untuk merubah warna background semua paragraph
const p = document.querySelectorAll('p');

const btn1 = document.getElementById('buttonSatu');
btn1.addEventListener('click',
    function () {
        for (let i = 0; i < p.length; i++) {
            p[i].style.backgroundColor = 'lightblue'
        }
    })


// Dua
// Button ini digunakan untuk merubah warna background color dan warna text button "Dua"
const btn2 = document.getElementById('buttonDua');
btn2.addEventListener('click',
    function () {
        btn2.style.backgroundColor = "orange"
        btn2.style.color = "red"
    })


// Tiga
// Button ini digunakan untuk merubah font-family dan warna text semua paragraph
const btn3 = document.getElementById('buttonTiga');
btn3.addEventListener('click',
    function () {
        for (let i = 0; i < p.length; i++) {
            p[i].style.fontFamily = "Impact"
            p[i].style.color = "blue"
        }
    })


// Empat
// Button ini digunakan untuk merubah font-size semua paragraph
const btn4 = document.getElementById('buttonEmpat');
btn4.addEventListener('click',
    function () {
        for (let i = 0; i < p.length; i++) {
            p[i].style.fontSize = '20px'
        }
    })


// Lima
// Button ini digunakan untuk merubah container background-color
const btn5 = document.getElementById('buttonLima');
btn5.addEventListener('click',
    function () {
        container.style.backgroundColor = 'lightblue'
    })


// Enam
// Button ini digunakan untuk merubah tag "p" pada class p1 menjadi "h2"
const sectionA = document.getElementById('a');

const btn6 = document.getElementById('buttonEnam');
btn6.addEventListener('click',
    function () {
        const p1 = sectionA.querySelector('p')[0]
        const h2Baru = document.createElement('h2')
        const teksH2Baru = document.createTextNode('selamat datang di dojobox.id')
        h2Baru.appendChild(teksH2Baru)
        sectionA.replaceWith(h2Baru)
    })


// Tujuh
// Button ini digunakan untuk menambahkan satu nama mentor baru dan menghapus nama mentor pertama

const btn7 = document.getElementById('buttonTujuh');
btn7.addEventListener('click',
    function () {
        const mentorBaru = document.createElement('li')
        const teksMentorBaru = document.createTextNode('Bagus')
        mentorBaru.appendChild(teksMentorBaru)

        const ul = document.querySelector('section#b ul')
        const deletedMentor = document.getElementsByTagName('li')[0]
        ul.removeChild(deletedMentor)
        ul.appendChild(mentorBaru)
    })
const button7 = document.getElementById('buttonTujuh')


// Delapan
// Button ini digunakan untuk mengganti text judul "DOOJOBOX.id" menjadi "Post Test"
const btn8 = document.getElementById('buttonDelapan');
btn8.addEventListener('click',
    function () {
        document.getElementById('judul').innerHTML = "Post Test"
    })


// Sembilan
// Button ini digunakan untuk menghapus link
const btn9 = document.getElementById('buttonSembilan');
btn9.addEventListener('click',
    function () {
        const link = document.getElementsByTagName('a')[0];
        const sectionA = document.getElementById('a');
        sectionA.removeChild(link);
    })


// Sepuluh
// Button ini digunakan untuk menambah link ke github masing masing
const btn10 = document.getElementById('buttonSepuluh')
btn10.addEventListener('click', function () {
    const li = document.querySelector('section#c ul li:nth-child(10)')
    const sectionC = document.getElementById('c')

    const linkGithub = document.createElement('a')
    const linkTextGithub = document.createTextNode('Link Github Post Test Sprint 3 - Miswanto')
    linkGithub.appendChild(linkTextGithub)
    linkGithub.setAttribute('href', 'https://github.com/masmisz')
    linkGithub.setAttribute('title', 'Link Github Post Test Sprint 3 - Miswanto')
    li.appendChild(linkGithub)
})
