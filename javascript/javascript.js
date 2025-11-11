function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let iconElement = document.querySelector('.icon');

    if (menuMobile.classList.contains('open')) {
	menuMobile.classList.remove('open');
	iconElement.src = "img/menu_black_36dp.svg";
} 
	else {
	menuMobile.classList.add('open');
	iconElement.src = "img/close_black_36dp.svg";
}
}

function fecharMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    let iconElement = document.querySelector('.icon');
    menuMobile.classList.remove('open');
    iconElement.src = "img/menu_black_36dp.svg";
}
  // Adicionar eventos de clique aos elementos do menu
  	let menuItems = document.querySelectorAll('.menu-link');
	menuItems.forEach(function(item) {
	item.addEventListener('click', fecharMenu);
});

var contador = 1; //variável pública criada fora da function
var img1="../img/preto1.png";
var img2="../img/roxo2.png";
var img3="../img/branco3.png";
var tempo=4000; //2000(milessegundos) : 1000 (milessegundo) = 2s
var exibir=setInterval("Exibindo()",tempo);
	  
function Exibindo()
{
	document.images["slide"].src=eval("img"+contador);
	if (contador<3)
	contador++;
	else
	contador=1;
}