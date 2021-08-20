// Element Manipulation
const judul = document.getElementById('judul');
const p2 = document.getElementsByClassName('p2')[0];

const alif = document.querySelector('#b ul li:nth-child(2)')
// judul.innerHTML = 'dojobox.id'

//element.innerHTML --> mengubah isi dari tag yang sudah dipilih.
judul.innerHTML = 'dojobox.id'

//element.style.<property> --> mengubah syle dari elemen yang dipilih.
p2.style.backgroundColor = 'orange'

//element.setAttribute() --> menambahkan attribute pada HTML.
alif.setAttribute('id','mentor2')


//element.classList --> memanipulasi kelas

//classList.add() --> menambah kelas baru
p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');
//classList.remove() --> menghilangkan kelas yang ada
//classList.toggle() --> jika elemen kelas tidak ada, method ini akan menambahkan. jika elemen sudah punya, maka akan menghilangkan kelas tertentu.
//classList.contains() --> mengetahui kelas tertentu.
//classList.replace() --> mengganti kelas yang lama ke kelas yang baru.

// Node Manipulation
//document.createElement()
//document.createTextNode()
//node.appendChild() disimpan di akhir sebuah parent
//node.insertBefore() disimapn sebelum element tertentu dalam sebuah parent
//parentNode.removeChild()
//parentNode.replaceChild()
//masih banyak yang lain

//untuk menambahakan paragraph baru
//kita bikin elementya dulu
const pBaru = document.createElement('p')
//bikin tulisannya
const tulisan = document.createTextNode('ini paragrap baru')
//simpan tulisan ke paragraph
//node.appendChild() 
pBaru.appendChild(tulisan)
//cara tampilkan ke document adalah dengan menambahkan pbaru ke sectionA
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)


//bikun element penampung l1
const newLi = document.createElement('li')
//bkin isinya
const isiElement = document.createTextNode('Andika')
//kita gabungkan isi ke element penampung
newLi.appendChild(isiElement)

//cari wadah
const wadahDariLI = document.querySelector('#b ul')

//define lokasi => taruh sebelum li alif
const liAlif = wadahDariLI.querySelector('li:nth-child(2)')

//node.insertBefore(elementYangDitambahkan, ElementTujuan)
wadahDariLI.insertBefore(newLi,liAlif)

//define dulu element yang akan kita hapus
const elementYangAkanDiHapus = document.getElementsByTagName('a')[0]

//define parentNode dari element yang akan dihapus /define node nya
// const sectionA = document.getElementById('a')

//parentNode.removeChild(elementYangAkanDihapus)
sectionA.removeChild(elementYangAkanDiHapus)

//buat element baru berupa h2
const h2 = document.createElement('h2')
//buat node text untuk h2
const tulisanBaru = document.createTextNode('Para Mentor')
//gabungkan node text ke h2
h2.appendChild(tulisanBaru)

//define p4
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

//define parentNode


//replace p4 menjadi h2
sectionB.replaceChild(h2,p4)


//parentNode.replaceChild()
