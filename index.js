function toggleMode() {
  const html = document.documentElement
  const mode = html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (mode) {
    //attribute adiciona um atributo
    img.setAttribute("src", "./assets/modoLight.jpg")
  }else{
    img.setAttribute("src","./assets/foto.jpg")
  }
  /* condição 
   if (html.classList.contains("light")) {
    html.classList.remove("light")
  }else{
    html.classList.add("light")
  }
  */
}
