/**
 * Catálogo de biblioteca: Tienes un array que almacena títulos de libros en una biblioteca. 
 * Debes crear funciones que permitan a los usuarios buscar libros por título, verificar si 
 * un libro específico está disponible para préstamo y llevar un registro de la 
 * disponibilidad de los libros.
 */

const libros=[
    {
        titulo:"titulo1",
        disponible:true
    },
    {
        titulo:"titulo2",
        disponible:true
    },
    {
        titulo:"titulo3",
        disponible:false
    },
    {
        titulo:"titulo4",
        disponible:false
    },
    {
        titulo:"titulo5",
        disponible:true
    },
    {
        titulo:"titulo6",
        disponible:false
    }
];

function buscador(){
    let titulo = prompt("ingrese titulo");
    for(let i=0;i<libros.length;i++){
        if(libros[i].titulo.toLowerCase().includes(titulo.toLowerCase()) && libros[i].disponible==true){
            alert("si esta disponible");
        }

        if((libros[i].titulo.toLowerCase().includes(titulo.toLowerCase()) == false) && i===libros.length-1){
            alert("no esta disponible");
        }
    }
}

function librosDisponibles(){
    document.write("<h3>Libros disponibles</h3>")
    for(let i=0;i<libros.length;i++){

        if(libros[i].disponible==true){
            document.write("<p>"+libros[i].titulo+"</p>");
        }
    }
}

alert("catalogo de biblioteca");

do{
    let opcion=parseInt(prompt("Ingrese opcion: 1-buscar libro ; 2-libros disponibles"));

    switch(opcion){
        case 1:
            buscador();
            break;
        case 2:
            librosDisponibles();
            break;
        default:
            break;
    }
}while(confirm("continuar?"));