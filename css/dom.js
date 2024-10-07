// Seleccionamos los elementos del DOM
const changeColorBtn = document.getElementById('change-color-btn');
const changeTextBtn = document.getElementById('change-text-btn');
const boxes = document.querySelectorAll('.box');

// Función para cambiar el color de fondo de las cajas
function changeBoxColors() {
  boxes.forEach(box => {
    if (box.style.backgroundColor === 'lightgray' || box.style.backgroundColor === '') {
      box.style.backgroundColor = 'blue';
    } else {
      box.style.backgroundColor = 'lightgray';
    }
  });
}

// Función para cambiar el texto de las cajas
function changeBoxText() {
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    if (box.textContent.includes("Caja")) {
      box.textContent = "Nuevo Texto " + (i + 1);
    } else {
      box.textContent = "Caja " + (i + 1);
    }
  }
}


// Asignamos los eventos a los botones
changeColorBtn.addEventListener('click', changeBoxColors);
changeTextBtn.addEventListener('click', changeBoxText);
