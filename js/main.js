
let candidato1, candidato2, candidato3, candidato4, candidato5, padron, nrototalvotos, bancas

candidato1 = [Number(document.getElementById('fdt').value)]
candidato2 = [Number(document.getElementById('jxc').value)]
candidato3 = [Number(document.getElementById('fit').value)]
candidato4 = [Number(document.getElementById('lib').value)]
candidato5 = [Number(document.getElementById('mst').value)]

padron = Number(document.getElementById('padron').value)

nrototalvotos = Number(document.getElementById('nrototalvotos').value)

bancas = Number(document.getElementById('bancas').value)

// Acá voy a excluir a los partidos que no hayan obtenido el 3% de los votos del total del padrón electoral

let porcentaje = Number((3 * padron) / 100)

const finalistas = []

switch (porcentaje) {

    case "candidato1 >= porcentaje":
        finalistas.push(candidato1)
        break;

    case "candidato2 <= porcentaje":
        finalistas.push(candidato2)
        break;

    case "candidato3 <= porcentaje":
        finalistas.push(candidato3)
        break;

    case "candidato4 <= porcentaje":
        finalistas.push(candidato4)
        break;
    case "candidato5 <= porcentaje":
        finalistas.push(candidato5)
        break;
}

// Acá se establecen los dividendos 
const dividendos = [] 

for (let i = 1 ; finalistas.length <= bancas ; i++) {

   (votosValidos / i).push(dividendos)

} 


// Asignando cargos a dividendos más altos

const seleccionados = dividendos.sort (function (a, b) {return b - a }) 


for (let i= 0; i < seleccionados.length; i++) {

    if (seleccionados[i] >= bancas) {

        let parrafo = document.createElement ("rdo")
        parrafo.innerHTML = <p>Van a obtener una banca</p>
        document.body.append(parrafo)
    }

}
/* 
// Eventos

let boton = document.getElementById("btnMain")
boton.onclick = () => {console.log("click")}


// Storage

const guardarLocal1 = (seleccionados) => { localStorage.setItem (seleccionados) }
guardarLocal1("ganadores", JSON.stringify(seleccionados)) */