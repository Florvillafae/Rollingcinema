const relojTiempo = document.getElementById('tiempo')
 
const reloj = setInterval(() =>{
  const time = new Date();
  relojTiempo.innerHTML = time.toLocaleTimeString();  
}, 1000);
