import { inputForm } from "./principal.js"
//----------------------------

const botaoConcluir = () => {
    const botao = document.createElement('button');
    botao.innerText = 'CONCLUIR';
    botao.classList.add('botao-concluir-remover');
    botao.addEventListener('click', concluirTarefa);
    return botao;
};

const concluirTarefa = (evento) => {
    const click = evento.target;
    click.parentElement.classList.toggle('tarefa-concluida');
    inputForm.value = '';
    inputForm.focus();
};

//----------------------------
export default botaoConcluir
