
let lista =[];
function adicionar(item) {
    if (localStorage.getItem("lista")) {
        lista = JSON.parse(localStorage.getItem("lista"));
    }
    lista.push(item);
    localStorage.setItem("lista", JSON.stringify(lista));
}

function remover(item) {
    let indice = lista.findIndex((exclui) => exclui.nome === item);
    if(indice>=0){
        lista.splice(indice, 1);
    localStorage.setItem("lista", JSON.stringify(lista));
    }
}

function marcar(item) {
    let indice = lista.findIndex((normal) => normal.nome === item);
    if (indice >= 0) {
        lista[indice].concluido=true;
        localStorage.setItem("lista", JSON.stringify(lista));

    }
}

function desmarcar(item) {
    let indice = lista.findIndex((normal) => normal.nome === item);
    if (indice >= 0) {
        lista[indice].concluido=false;
        localStorage.setItem("lista", JSON.stringify(lista));
    }
}

function listar() {
    return lista;
}
export {adicionar, remover, marcar, desmarcar, listar}