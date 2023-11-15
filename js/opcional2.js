/**
 * Objeto "Lista de Tareas": Crea un objeto listaTareas con una propiedad 
 * tareas que sea un array de tareas, y métodos como agregarTarea, completarTarea 
 * y listarTareas que realicen acciones sobre la lista de tareas.
*/

class tareas{
    tareas=[];

    agregarTarea(tarea){
        this.tareas.push(tarea);
    }

    completarTarea(){
        let tarea = prompt("Que tarea quiere completar?");

        for(let i=0;i<this.tareas.length;i++){

            if(this.tareas[i].toLowerCase().includes(tarea.toLowerCase())){
                alert("si")
                this.tareas[i]=prompt("ingrese el nuevo estado");
            }
            if(this.tareas[i].toLowerCase().includes(tarea.toLowerCase())==false && i===this.tareas.length-1)
            {
                alert("no")
            }
        }
    }

    listarTareas(){
        document.write(`<h3>Lista de tareas</h3>`)
        for(let i=0; i<this.tareas.length;i++){
            document.write(`<p>Tarea: ${this.tareas[i]}</p>`);
        }
    }
}

let listaTareas = new tareas();


do{
    let opcion = parseInt(prompt("Ingrese una opcion: 1-agregar tarea ; 2-completar tarea ; 3-listar tareas"));

    switch(opcion){
        case 1:
            listaTareas.agregarTarea(prompt("ingrese una tarea"));
            break;
        case 2:
            listaTareas.completarTarea();
            break;
        case 3:
            listaTareas.listarTareas();
            break;
        default:
            break;
    }
}while(confirm("continuar?"));






