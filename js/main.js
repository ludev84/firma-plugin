// const firmaInput = body.querySelector("#form-firma");
const nombreInput = body.querySelector("#nombre-completo");
// const fechaInput = body.querySelector("#form-fecha");

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
      // Pre visualizar imagen de firma
      let preview = document.getElementById('datos-preview');
      let signatureData = signaturePad.toDataURL();
      let img = document.createElement("img");
      img.setAttribute("src", signatureData);
      preview.append(img);

      // Pre visualizar nombre
      let nombre = document.getElementById("nombre-completo").value;
      let p = document.createElement("p");
      p.textContent = "Nombre: " + nombre;
      preview.append(p);

      // Crear formulario para pasar los datos por metodo post
      let formulario = document.createElement("form");
      let nombreInput = document.createElement("input");
      let firmaInput = document.createElement("input");
      let fechaInput = document.createElement("input");
      let timeNow = new Date();
      let botonConfirmar = document.createElement("button")

      formulario.id = "formulario-datos-enviar";
      formulario.action = "datos.php";
      formulario.method = "post";

      nombreInput.hidden = true;
      nombreInput.type = "text";
      nombreInput.name = "nombre";
      nombreInput.id = "nombre-form";
      nombreInput.value = nombre;

      firmaInput.hidden = true;
      firmaInput.type = "text";
      firmaInput.name = "firma";
      firmaInput.id = "firma-form";
      firmaInput.value = signatureData.slice(22);

      fechaInput.hidden = true;
      fechaInput.type = "text";
      fechaInput.name = "fecha";
      fechaInput.id = "fecha-form";
      fechaInput.value = timeNow;

      botonConfirmar.onclick = "doSomething()";
      botonConfirmar.type = "submit";
      botonConfirmar.value = "submitButton";
      botonConfirmar.innerHTML = "Registrar datos";
      
      preview.append(formulario);
      formulario.append(nombreInput);
      formulario.append(firmaInput);
      formulario.append(fechaInput);
      formulario.append(botonConfirmar);
    }
    else {
      console.log("Lleno");
      let preview = document.getElementById('datos-preview');
      let signatureData = signaturePad.toDataURL();
      let img = preview.querySelector("img");
      img.setAttribute("src", signatureData);
      
      let p = preview.querySelector("p")
      let nombre = document.getElementById("nombre-completo").value;
      p.textContent = "Nombre: " + nombre;

      // Crear formulario para pasar los datos por metodo post
      let formularioAnterior = document.getElementById("formulario-datos-enviar");
      formularioAnterior.remove();
      let formulario = document.createElement("form");
      let nombreInput = document.createElement("input");
      let firmaInput = document.createElement("input");
      let fechaInput = document.createElement("input");
      let timeNow = new Date();
      let botonConfirmar = document.createElement("button")

      formulario.id = "formulario-datos-enviar";
      formulario.action = "datos.php";
      formulario.method = "post";

      nombreInput.hidden = true;
      nombreInput.type = "text";
      nombreInput.name = "nombre";
      nombreInput.id = "nombre-form";
      nombreInput.value = nombre;

      firmaInput.hidden = true;
      firmaInput.type = "text";
      firmaInput.name = "firma";
      firmaInput.id = "firma-form";
      firmaInput.value = signatureData.slice(22);

      fechaInput.hidden = true;
      fechaInput.type = "text";
      fechaInput.name = "fecha";
      fechaInput.id = "fecha-form";
      fechaInput.value = timeNow;

      botonConfirmar.onclick = "doSomething()";
      botonConfirmar.type = "submit";
      botonConfirmar.value = "submitButton";
      botonConfirmar.innerHTML = "Registrar datos";
      
      preview.append(formulario);
      formulario.append(nombreInput);
      formulario.append(firmaInput);
      formulario.append(fechaInput);
      formulario.append(botonConfirmar);
    };
  };
};