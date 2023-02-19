function typeWriter(element, speed) {
  const text = element.innerHTML;
  element.innerHTML = "";
  
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(intervalId);
    }
  }, speed);
}

const speed = 60; // velocidade em milissegundos

const title = document.getElementById("title");
const bio = document.getElementById("bio");
const bio2 = document.getElementById("bio2");
const bio3 = document.getElementById("bio3");
const bio4 = document.getElementById("bio4");
const hobby1 = document.getElementById("hobby1");
const hobby2 = document.getElementById("hobby2");
const hobby3 = document.getElementById("hobby3");

typeWriter(title, speed);
typeWriter(bio, speed);
typeWriter(bio2, speed);
typeWriter(bio3, speed);
typeWriter(bio4, speed);
typeWriter(hobby1, speed);
typeWriter(hobby2, speed);
typeWriter(hobby3, speed);
