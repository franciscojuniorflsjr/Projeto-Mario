/* 

Objetivo 1- quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer.

Objetivo 2- quando o usuário clicar no botão  X devemos fechar a modal.


*/

const botaoTrailer = 
document.querySelector('.botao-trailer');
const video = document.getElementById("video");
const modal = 
document.querySelector('.modal');
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList. toggle("aberto");
}

botaoTrailer.addEventListener
("click", () => { alternarModal();
video.setAttribute("src", linkDoVideo);
});



const botaoFecharModal = document.querySelector('.fechar-modal');

botaoFecharModal.addEventListener("click", () =>
 { alternarModal();
video.setAttribute ("src","") });



