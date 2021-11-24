document.querySelector('#dolar').addEventListener('click', function(){
    obtenerDatos('dolar');

});
document.querySelector('#euro').addEventListener('click', function(){
    obtenerDatos('euro');
});
document.querySelector('#bitcoin').addEventListener('click', function(){
    obtenerDatos('bitcoin');
});
function obtenerDatos(valor){

    let url = `https://mindicador.cl/api/${valor}`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){

            let datos = JSON.parse(this.responseText);
            console.log(datos.serie);

            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';
            resultado.innerHTML += `<li class="style-lista !important"> FECHA  | <span class="monto"> MONTO <span></li>`
            let i = 0;

           for(let item of datos.serie){
               i++
               resultado.innerHTML += `<li class="style-lista !important"> ${item.fecha.substr(0,10)}  | <span class="monto"> $${item.valor}<span></li>`
                
               if(i>10){
                   break;
                
               }
            }

          
        }

    }
}