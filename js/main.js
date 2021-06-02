const nombreInput = body.querySelector("#nombre-completo");

function registrar() {
  if (signaturePad.isEmpty()) {
    alert("Ingrese su firma en el recuadro.");
  }
  else if (nombreInput.value == "") {
    alert("Ingrese su nombre completo.");
  }
  else {
    if (document.getElementById('datos-preview').innerHTML.trim().length > 0) {
      document.getElementById("datos-preview").remove();
      let datosPreview = document.createElement("div");
      datosPreview.id = "datos-preview";
      body.append(datosPreview);
    }
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

    // Crear formulario oculto para pasar los datos por metodo post
    let formulario = document.createElement("form");
    let nombreInput = document.createElement("input");
    let firmaInput = document.createElement("input");
    let fechaInput = document.createElement("input");
    let solicitudIdInput = document.createElement("input");
    let timeNow = new Date();
    let botonConfirmar = document.createElement("button")

    formulario.id = "formulario-datos-enviar";
    formulario.action = "../pdf/solicitudes_pdf.php";
    formulario.method = "post";
    formulario.target = "_blank";

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

    solicitudIdInput.hidden = true;
    solicitudIdInput.type = "text";
    solicitudIdInput.name = "solicitud_id";
    solicitudIdInput.id = "solicitud-id-form";
    // Obtener id de la solicitud desde la URL
    let parameters = new URLSearchParams(window.location.search);
    solicitudIdInput.value = +parameters.get("solicitud_id");

    // botonConfirmar.onclick = "doSomething()";
    botonConfirmar.type = "submit";
    botonConfirmar.value = "submitButton";
    botonConfirmar.innerHTML = "Confirmar datos";
    
    preview.append(formulario);
    formulario.append(nombreInput);
    formulario.append(firmaInput);
    formulario.append(fechaInput);
    formulario.append(solicitudIdInput);
    formulario.append(botonConfirmar);
  }
}