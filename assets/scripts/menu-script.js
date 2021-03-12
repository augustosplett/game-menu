const botao = document.querySelector('.jogar');
const nivel = document.querySelector('.niveis');

botao.addEventListener("click", () => alert('teste'));
nivel.addEventListener("click", (el) => {
    console.log(el.parentNode);
    el.target.classList.toggle('selected');
    console.log(el.target.innerText)
});