const firmaInput = document.querySelector("#form-firma");
const nombreInput = document.querySelector("#form-nombre");
const fechaInput = document.querySelector("#form-fecha");

function doSomething(){
  let signatureData = signaturePad.toDataURL();
  let timeNow = new Date();

  // Acortar la url de la imagen de la firma para solo tener la parte despues de base64
  let signatureDataBase64 = signatureData.slice(22);

  firmaInput.setAttribute("value", signatureDataBase64);
  fechaInput.setAttribute("value", timeNow)
};