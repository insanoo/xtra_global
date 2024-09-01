//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.scrollY > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

//hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
hamburger.classList.toggle('hamburger-active');
navMenu.classList.toggle('hidden');
});

// click di luar hamburger

window.addEventListener('click', function(e){
    if(e.target != hamburger && navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');   
    }
});

//darkmode toogle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }
  
  // email.js

// Inisialisasi EmailJS dengan User ID Anda
emailjs.init("YOUR_USER_ID");

// Tangani pengiriman formulir
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
      .then(function(response) {
        console.log('Success:', response);
        alert('Pesan Anda telah dikirim!');
        form.reset(); // Mengatur ulang formulir setelah pengiriman
      }, function(error) {
        console.log('Error:', error);
        alert('Terjadi kesalahan saat mengirim pesan.');
      });
  });
});
