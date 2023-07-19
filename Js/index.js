const logoEl = document.getElementById("logo");
const btnEl = document.getElementById("btn");
const col2El = document.getElementById("col-2");
const productImgEl = document.getElementById("productImg");
const ImgB = document.getElementById("imgB");
const ImgS = document.getElementById("imgS");
const ImgR = document.getElementById("imgR");
const ImgG = document.getElementById("imgG");


imgB.onclick = function() {
    logoEl.src = "./img/nike-logo.png";
    btnEl.style.background = "#ff0000";
    col2El.style.background = "#ff0000";
    productImgEl.src = "./img/nike-vermelho.png";
};

imgS.onclick = function() {
    logoEl.src = "./img/nike-logo-branco.png";
    btnEl.style.background = "#e0dddd";
    col2El.style.background = "#e0dddd";
    productImgEl.src = "./img/nike-ab.png";
};

imgR.onclick = function() {
    logoEl.src = "./img/nike-logo-azul.png";
    btnEl.style.background = "#1837a5";
    col2El.style.background = "#1837a5";
    productImgEl.src = "./img/nike-azul.png";
};

imgG.onclick = function() {
    logoEl.src = "./img/nike-logo-verde.png";
    btnEl.style.background = "#075a19";
    col2El.style.background = "#075a19";
    productImgEl.src = "./img/nike-vd.png";
};
