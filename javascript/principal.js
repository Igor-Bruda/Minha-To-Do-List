import botaoConcluir from "./concluiTarefa.js";
import botaoRemover from "./deletaTarefa.js";
//----------------------------


const inputForm = document.querySelector('#input-add');
inputForm.focus();

const adicionarTarefa = (evento) => {
    evento.preventDefault();

    const inputForm = document.querySelector('#input-add');
    const dadosInput = inputForm.value;
    const lista = document.querySelector('[data-lista]');

    if (dadosInput.length == 0) {
        inputForm.focus();
        inputForm.value = '';
        return;
    };

    const item = document.createElement('li');
    item.classList.add("item");
    item.innerHTML = `<p class="tarefa">${dadosInput}</p><hr>`;

    


    item.appendChild(botaoConcluir());
    item.appendChild(botaoRemover());
    lista.appendChild(item);

    inputForm.focus();
    inputForm.value = '';
};

const botaoAdd = document.querySelector('#botao-add');
botaoAdd.addEventListener('click', adicionarTarefa);


//----------------------------
export { inputForm }
