/**
 * Registro de notas de estudiantes: Tienes dos arrays, uno con nombres de estudiantes y 
 * otro con sus respectivas notas en un curso. Debes crear funciones que calculen el 
 * promedio de notas por estudiante y muestren un resumen con los nombres de los estudiantes 
 * que aprobaron y reprobaron el curso.
 */

const nombres=["sergio","ariel","ruiz"];
const notas=[
    {  
        parcial1:3,
        parcial2:5,
        parcial3:10, 
    },
    {
        parcial1:3,
        parcial2:3,
        parcial3:10,
    },
    {
        parcial1:3,
        parcial2:3,
        parcial3:3,
    },
];

function promedio(){
    for(let i=0;i<nombres.length;i++){
        let promedio=(notas[i].parcial1+notas[i].parcial2+notas[i].parcial3)/3;
        document.write("<tr><td>"+nombres[i]+"</td><td>"+promedio+"</td><td>"+(promedio>=6?"aprobado":"desaprobado")+"</td></tr>");
    }
    document.write("</tbody></table>")
}


document.write("<h1>Lista de alumnos, nota final y condicion</h1>");

document.write("<table><thead><tr><th>alumno</th><th>promedio</th><th>condicion</th></tr></thead><tbody>");

promedio();
