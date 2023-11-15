/**
 * Gestión de proyectos en una empresa: Tienes dos arrays, uno para los nombres de 
 * proyectos y otro para los estados de los proyectos. Debes crear funciones que 
 * permitan agregar nuevos proyectos, cambiar el estado de un proyecto, asignar un 
 * responsable y generar un resumen de proyectos en curso.
*/


const nombreProyectos =[
    "proyecto1","proyecto2","proyecto3","proyecto4"
];
const estadoProyectos=[
    "estado1","estado2","estado3","estado4"
];

const proyectos=[
    {
        nombre:"proyecto1",
        estado:"estado1",
        responsable:"responsable1"
    },
    {
        nombre:"proyecto2",
        estado:"estado2",
        responsable:"responsable2"
    },
    {
        nombre:"proyecto3",
        estado:"estado3",
        responsable:"responsable3"
    },
    {
        nombre:"proyecto4",
        estado:"estado4",
        responsable:"responsable4"
    },
];

function agregarProyecto(){
    let proyecto={
        nombre:"",
        estado:"",
        responsable:""
    }
    do{
        let nom=prompt("Ingrese nombre del proyecto");
        let est=prompt("ingrese estado del proyecto")
        let res=prompt("ingrese responsable del proyecto")
    
        if(nom=="" || nom==null){
            alert("Error: no se permite guardar nombre de producto")
        }else{
            proyecto.nombre=nom;
            if(est=="" || est==null){
                alert("Error: no se permite guardar estado")
            }else{
                proyecto.estado=est;
                if(res=="" || res==null){
                    alert("Error: no se permite guardar responsable")
                }else{
                    proyecto.responsable=res;
                    proyectos.push(proyecto)
                }
            }
        }
    }while(confirm("Continuar?"));
}

function cambiarEstado(){
    let proyecto = prompt("Que proyecto quiere modificar su estado?");

    for(let i=0;i<nombreProyectos.length;i++){

        if(nombreProyectos[i].toLowerCase().includes(proyecto.toLowerCase())){
            alert("si")
            proyectos[i].estado=prompt("ingrese el nuevo estado");
            estadoProyectos[i]=proyectos[i].estado;
        }
        if(nombreProyectos[i].toLowerCase().includes(proyecto.toLowerCase())==false && i===nombreProyectos.length-1)
        {
            alert("no")
        }
    }
}

function asignarNuevoResponsable(){
    let proyecto = prompt("Que proyecto quiere asignar nuevo responsable?");

    for(let i=0;i<nombreProyectos.length;i++){

        if(nombreProyectos[i].toLowerCase().includes(proyecto.toLowerCase())){
            alert("si")
            proyectos[i].responsable=prompt("ingrese el nuevo responsable");
        }
        if(i===nombreProyectos.length-1)
        {
            alert("no")
        }
    }
}

function listarInfoProyecto(){
    document.write("<h3>lista de proyectos</h3>")
    for(let i=0;i<proyectos.length;i++){
        document.write("<p>proyecto: "+proyectos[i].nombre+"</p>")
        document.write("<p>estado: "+proyectos[i].estado+"</p>")
        document.write("<p>responsable: "+proyectos[i].responsable+"</p>")
        document.write("<p></p><br>")
    }
}


alert("gestor de proyectos");

do{
    let opcion=parseInt(prompt("indique opcion: 1-agregar proyecto ; 2-cambiarEstado ; 3-asignarResponsable , 4-listar Proyectos"));
    switch(opcion){
        case 1 : 
            agregarProyecto()
            break;
        case 2 : 
            cambiarEstado()
            break;
        case 3 : 
            asignarNuevoResponsable()
            break;
        case 4 : 
            listarInfoProyecto()
            break;
        default : 
            break;
    }
}while(confirm("seguir en el sistema?"));