let palabra;
let cant_errores = 0; //cuantes veces me equivoque  
let cant_aciertos = 0; // cuantas letras acerte

const palabras = [
    'jungla',
    'verde',
    'madera',
    'mono',
    'pescado',
    'altura',
    'cueva',
    'cazar',
    'lechuza',
    'boligrafo',
    'cuerda',
    'aire' 
];

const btn = document.getElementById('jugar');
const images = id ('imagen')
const botonLetras = document.querySelectorAll( "#letras button" );
btn.addEventListener('click', iniciar); /*click en iniciar el juego */

function id(str ){
    return document.getElementById(str);
}

function obtener_random(num_min, num_max){
    const amplitud_valores =num_max - num_min;
    const valor_al_azar= Math.floor(Math.random()*amplitud_valores) + num_min;  
return valor_al_azar;

}
/* funcion de inicio */
function iniciar(event){
    imagen.src = 'images/img0.png';
    btn.disabled = true;
    cant_errores = 0; //cuantes veces me equivoque  
    cant_aciertos = 0;
    const parrafo= id ('palabra_a_adivinar');
    parrafo.innerHTML='';

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random(0, cant_palabras);
    
    palabra= palabras[valor_al_azar];
    console.log(palabra);
    const cant_letras =palabra.length;

    for( let i=0 ; i< botonLetras.length ; i++){
        botonLetras [ i ].disabled = false
    }

    for( let i = 0; i < cant_letras; i++){
        const span=document.createElement('span');
        parrafo.appendChild(span);
    }
}

    /* letras */
    for(let i=0; i <botonLetras.length; i++ ){
    botonLetras[i].addEventListener('click', click_letras);

}

function click_letras(event){
    const spans= document.querySelectorAll('#palabra_a_adivinar span');
   const button = event.target;
   button.disabled= true;
   const letras= button.innerHTML.toLocaleLowerCase ( );
   const palabras=palabra.toLocaleLowerCase( );

    let acerto= false;
    for (let i=0 ; i <palabra.length; i++){
        //lel indice coincide con la letra de la palabra y coincide con el span
        if(letras == palabra[i]){
            spans[i].innerHTML= letras;
            cant_aciertos++;
            acerto=true;
        }
    }

        if (acerto == false ){
                cant_errores++;
                const source = `images/img${cant_errores}.png`
                const imagen =id ('images');
                images.src = source
            }


        if( cant_errores == 5 ){
            id('resultado').innerHTML ="La palabra oculta era: " + palabra;
            game_over( );
        }else if( cant_aciertos == palabra.length ){
            id('resultado').innerHTML ='Ganaste!', alert("Felicidades has ganado!");
            game_over( );
        }
        console.log( "la letra " + letras + " en la palabra " + palabra + " ¿existe?: " + acerto );
}
    /* game over */
    function game_over( ){
    for( let i = 0; i < botonLetras.length ; i++ ){
        botonLetras[ i ].disabled = true;
    }

    btn.disabled = false;
}


    game_over( );

        





