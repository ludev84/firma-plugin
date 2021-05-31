const firmaInput = body.querySelector("#form-firma");
const nombreInput = body.querySelector("#form-nombre");
const fechaInput = body.querySelector("#form-fecha");

function doSomething() {
  let signatureData = signaturePad.toDataURL();
  let timeNow = new Date();

  // Acortar la url de la imagen de la firma para solo tener la parte despues de base64
  let signatureDataBase64 = signatureData.slice(22);

  firmaInput.setAttribute("value", signatureDataBase64);
  fechaInput.setAttribute("value", timeNow)
};

function registrar() {
  if (signaturePad.isEmpty()) {
    alert("Ingrese su firma en el recuadro.");
  }
  else if (nombreInput.value == "") {
    alert("Ingrese su nombre completo.");
  }
  else {
    if (document.getElementById('datos-preview').innerHTML.trim().length == 0) {
      console.log("vacio");
      let preview = document.getElementById('datos-preview');
      let signatureData = signaturePad.toDataURL();
      let img = document.createElement("img");
      img.setAttribute("src", signatureData);
      preview.append(img);

      let nombre = document.getElementById("form-nombre").value;
      let p = document.createElement("p");
      p.textContent = "Nombre: " + nombre;
      preview.append(p);
    }
    else {
      console.log("lleno");
      let preview = document.getElementById('datos-preview');
      let signatureData = signaturePad.toDataURL();
      let img = preview.querySelector("img");
      let p = preview.querySelector("p")
      img.setAttribute("src", signatureData);

      let nombre = document.getElementById("form-nombre").value;
      p.textContent = "Nombre: " + nombre;
    };
  };
};