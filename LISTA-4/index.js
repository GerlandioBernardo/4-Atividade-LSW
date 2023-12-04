import { adicionar, remover, marcar, desmarcar, listar } from "./lista.js";
let nomeItem = document.querySelector("#nome");
let preço = document.querySelector("#preço");
let codigo = document.querySelector("#codigo");
let nomeRemover = document.querySelector("#itemRemover");
let nomePro= document.querySelector("#nomeP")
let preçoPro = document.querySelector("#preçoP");
let compradoPro = document.querySelector("#compradoP");
let buttonRemover = document.querySelector("#buttonRemover");
let button = document.querySelector("#button");
function adicionarEventos() {
    nomePro.textContent = " ";
    preçoPro.textContent = " ";
    compradoPro.textContent = " ";
    let Lista=listar();
    Lista.forEach((element) => {
        let li1 = document.createElement("li");
        li1.textContent = element.nome;
        nomePro.appendChild(li1);

        let li2 = document.createElement("li");
        li2.textContent = element.preçoItem
        preçoPro.appendChild(li2);

        let inputCheckbox = document.createElement("input");
        inputCheckbox.type = "checkbox";
        inputCheckbox.id = "input";
        let li3= document.createElement("li");
        li3.appendChild(inputCheckbox)
        compradoPro.appendChild(li3);
        
    });
}
window.addEventListener('load', () => {
    const Lista = JSON.parse(localStorage.getItem('lista'));
    if (Lista != null) {
        Lista.forEach((element) => {
            let li1 = document.createElement("li");
            li1.textContent = element.nome;
            nomePro.appendChild(li1);

            let li2 = document.createElement("li");
            li2.textContent =element.preçoItem;
            preçoPro.appendChild(li2);

            let inputCheckbox = document.createElement("input");
            inputCheckbox.type = "checkbox";
            inputCheckbox.id = "input";
            if (element.concluido) {
                inputCheckbox.checked = true;
            }
            let li3 = document.createElement("li");
            li3.appendChild(inputCheckbox);
            compradoPro.appendChild(li3);
        });
    }
} )

buttonRemover.addEventListener("click", function (e) {
    e.preventDefault();
    remover(nomeRemover.value);
    adicionarEventos();
});

button.addEventListener("click", function (e) {
    e.preventDefault();
    adicionar({ 
        nome: nomeItem.value,
        preçoItem:preço.value,
        concluido:false,
    });
    adicionarEventos();
});
adicionarEventos();
