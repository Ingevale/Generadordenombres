function generarNombre() {
  var nombres = [
    "Valeria","Shendell", "Diego", "Juan", "Maria", "Carlos", "Luisa", "Pedro", "Ana", "Miguel", "Laura", "Jose", "Isabella",
    "Alejandro", "Valentina", "Andres", "Camila", "Javier", "Sofia", "Fernando",
    "Lucia", "Ricardo", "Paula", "Hector", "Gabriela", "Pablo", "Martina", "Manuel", "Abril", "Santiago",
    "Emma", "Emilio", "Mia", "Mateo", "Isabel", "Daniel", "Carolina", "Hugo", "Juana", "Reynaldo"
  ];

  var apellidos = [
    "Ku", "Rodriguez", "Lopez", "Perez", "Martinez", "Garcia", "Fernandez", "Gomez", "Torres",
    "Ramirez", "Hernandez", "Sanchez", "Romero", "Diaz", "Vargas", "Ruiz", "Alvarez", "Jimenez",
    "Moreno", "Molina", "Silva", "Ortega", "Navarro", "Rojas", "Cruz", "Guerrero", "Ortiz",
    "Medina", "Castro", "Morales", "Acosta", "Ramos", "Flores", "Chavez", "Vega", "Campos",
    "Reyes", "Vargas", "Delgado"
  ];

  var apellidos2 = [
    "Fernandez", "Gomez", "Torres", "Ramirez", "Hernandez", "Sanchez", "Romero", "Diaz", "Vargas", "Ruiz",
    "Alvarez", "Jimenez", "Moreno", "Molina", "Silva", "Ortega", "Navarro", "Rojas", "Cruz", "Guerrero",
    "Ortiz", "Medina", "Castro", "Morales", "Acosta", "Ramos", "Flores", "Chavez", "Vega", "Campos",
    "Reyes", "Vargas", "Delgado"
  ];

  var nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
  var apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
  var apellidoAleatorio2 = apellidos2[Math.floor(Math.random() * apellidos2.length)];


  var resultado = nombreAleatorio + " " + apellidoAleatorio + " " + apellidoAleatorio2;
  document.getElementById("result").textContent = resultado;
}
