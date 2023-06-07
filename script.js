// Variáveis para os códigos do vídeo e da imagem
var videoCode = "648093cec85c3a000a1a52ad";
var imageCode = "4836b75b-779d-4ed8-a412-0076ae85398a";

// Criar o elemento div
var divElement = document.createElement("div");
divElement.id = "vid_" + videoCode;
divElement.style.position = "relative";
divElement.style.width = "100%";
divElement.style.padding = "56.25% 0 0";

// Criar o elemento img
var imgElement = document.createElement("img");
imgElement.id = "thumb_" + videoCode;
imgElement.src = "https://images.converteai.net/" + imageCode + "/players/" + videoCode + "/thumbnail.jpg";
imgElement.style.position = "absolute";
imgElement.style.top = "0";
imgElement.style.left = "0";
imgElement.style.width = "100%";
imgElement.style.height = "100%";
imgElement.style.objectFit = "cover";
imgElement.style.display = "block";

// Criar o elemento div de fundo
var backdropElement = document.createElement("div");
backdropElement.id = "backdrop_" + videoCode;
backdropElement.style.position = "absolute";
backdropElement.style.top = "0";
backdropElement.style.width = "100%";
backdropElement.style.height = "100%";
backdropElement.style.webkitBackdropFilter = "blur(5px)";
backdropElement.style.backdropFilter = "blur(5px)";

// Adicionar elementos ao div principal
divElement.appendChild(imgElement);
divElement.appendChild(backdropElement);

// Criar o elemento script
var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.id = "scr_" + videoCode;
scriptElement.src = "https://scripts.converteai.net/" + imageCode + "/players/" + videoCode + "/player.js";
scriptElement.async = true;

// Adicionar o elemento script ao cabeçalho do documento
document.head.appendChild(scriptElement);
