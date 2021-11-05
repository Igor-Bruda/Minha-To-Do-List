import { inputForm } from "./principal.js"
//----------------------------

const botaoRemover = () => {
    const botao = document.createElement('button');
    botao.innerText = 'REMOVER';
    botao.classList.add('botao-concluir-remover');
    botao.addEventListener('click', removerTarefa);
    return botao;
}

const removerTarefa = (evento) => {
    const click = evento.target;
    click.parentElement.classList.add('fadeOut');

    setTimeout(() => {
        evento.target.parentNode.remove();
    }, 500);

    inputForm.value = '';
    inputForm.focus();
};

//----------------------------
export default botaoRemover