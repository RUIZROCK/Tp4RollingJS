/*
Gestión de inventario en una tienda: Tienes dos arrays, uno que representa los productos en 
stock y otro que almacena los precios de los productos. Debes crear funciones que permitan 
agregar nuevos productos al inventario, eliminar productos agotados y calcular el valor total 
del inventario.
*/


const precioProd=[12.12,120];
const stockProd=[
    {
        nombre:"arroz",
        precio:12.12,
        stock:12
    },
    {
        nombre:"lechuga",
        precio:120,
        stock:120
    }
];

function agregarProducto(){
    let producto={
        nombre:"",
        precio:0,
        stock:0
    }
    do{
        let prod=prompt("Ingrese nombre del producto");
        let pre=parseFloat(prompt("ingrese precio"));
        let st=parseInt(prompt("Ingrese stock"));
    
    
        if(prod=="" || prod==null){
            alert("Error: no se permite guardar nombre de producto")
        }else{
            producto.nombre=producto;
            if(pre==null || pre<=0){
                alert("Error: no se permite guardar precio")
            }else{
                producto.precio=pre;
                if(st==null || st<=0){
                    alert("Error: no se permite guardar stock vacio")
                }else{
                    producto.stock=st;
                    stockProd.push(producto);
                    precioProd.push(producto.precio);
                }
            }
        }
    }while(confirm("Continuar?"));
}

function eliminarProducto(){
    let producto = prompt("Que producto quiere borrar?");

    for(let i=0;i<stockProd.length;i++){

        if(stockProd[i].nombre.toLowerCase().includes(producto.toLowerCase())){
            alert("si")
            stockProd.splice(i,1);
            precioProd.splice(i,1);
        }else{
            alert("no")
        }
    }
}

function valorTotalInventario(){
    let total=0;
    for(let i=0;i<precioProd.length;i++){
        total+=precioProd[i];
    }

    alert("Valor total del inventario "+total);
}



alert("Sistema inventario de producto");

do{
    let opcion=parseInt(prompt("indique opcion: 1-agregar producto ; 2-eliminar producto ; 3-valor total del inventario"));
    switch(opcion){
        case 1 : 
            agregarProducto()
            break;
        case 2 : 
            eliminarProducto()
            break;
        case 3 : 
            valorTotalInventario()
            break;
        default : 
            break;
    }
}while(confirm("seguir en el sistema?"));