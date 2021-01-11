const display = {
  // Variable
  widescreen: '',
  time: '',
  greeding: '',
  name: '',
  focus: '',
  date: '',

  // DOM Elements
  fetchElements: function(){
    this.widescreen = document.querySelector('#widescreen');
    this.time     = document.querySelector('#time');
    this.greeding = document.querySelector('#greeding');
    this.name     = document.querySelector('#name');
    this.date    = document.querySelector('#date');
    // console.log(this.time)
  },

// Functions ==================
// Defined hours interval
  hours: function(){
    setInterval(this.timer, 1000);
  },

// Defined Clock
  timer: function(){
    let data = new Date();
     this.time.innerHTML = data.toLocaleTimeString('pt-BR', { hour12: false})
  },

  calendario: function(){
    let data = new Date();
    this.date.innerHTML = data.toLocaleDateString('pt-BR',{
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      year: 'numeric'
    })
  },

// Saluttation
  salutation: function(){

    let hourDate = new Date();
    let hour = hourDate.getHours();

    if (hour < 12) {
      this.greeding.innerText = 'Bom dia';
      document.body.style.backgroundImage = 'url("./assets/img/morning.jpg")';
    } else if (hour < 18) {
      this.greeding.innerText = 'Boa tarde';
      document.body.style.backgroundImage = 'url("./assets/img/afternoon.jpg")';
    } else {
      this.greeding.innerText = 'Boa noite';
      document.body.style.backgroundImage = 'url("./assets/img/nigth.jpg")';
    }
  },

// Setting Name
  getName: function(){
    let name = localStorage.getItem('name') !== null ? localStorage.getItem('name') : '[digite seu nome]';
    this.name.innerText = name;
  },

  setName: function(){
    this.name.addEventListener('keypress', this.addName);
    this.name.addEventListener('blur', this.addName);
  },

  addName: function(el){
    if (el.keyCode == 13 || el.which == 13) {
      localStorage.setItem('name', el.target.textContent)
      el.target.blur();
    }
  },

// Initializable
  init: function(){
    console.log('Projeto Inicializado');
    this.fetchElements();
    this.hours();
    this.calendario();
    this.salutation();
    this.getName();
    this.setName();
  }
}

display.init()
