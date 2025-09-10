// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://www.planetsport.com/image-library/land/1200/f/france-kylian-mbappe-jun23.webp",
  "https://fifpro.org/media/1w0dfejt/lionel-messi_1.jpg?rxy=0.4619229519611197,0.19443102361750342&width=1600&height=1024&rnd=133770410615370000",
  "https://www.reuters.com/resizer/v2/EISNVDHGHRJVXCH7ZHC7CDQ5FM.jpg?auth=4a417445f0d4e42bd09771e5d559fb0170a82f58507999d69b1119e31c046dbd&width=2287&quality=80",
  "https://ca-times.brightspotcdn.com/dims4/default/0cbd33e/2147483647/strip/true/crop/5331x3554+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd2%2F6d%2F41609aac3a02c9cb2edbe09b8045%2Fdc645ab4775944f4b595d6153ad6d374",
  "https://img.fcbayern.com/image/upload/f_auto/q_auto/t_cms-1x1-seo-thumbnail/v1731174167/cms/public/images/fcbayern-com/homepage/Saison-24-25/Spieler/Musiala/241109-jamal-musiala-ima.jpg",
  "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/03/23/09/MANUEL-NEUER.jpg"
];

const titulos = [
  "kylian Mbappé",
  "Leonel messi",
  "Cristiano Ronaldo",
  "James Rodriguez",
  "Jamal Musiala",
  "Manuel Neuer"
];

const frases = [
  "Juegas en europa en una de las 5 grandes ligas y eres reconocido como el mejor de tu pais",
  "Eres pequeño pero a pesar de eso eres considerado como uno de los mejores del mundo, tu estatura ha sido un problema para los demás, te hace ser muy rapido y agíl",
  "Tu diciplina y constancia te han hecho un lugar como el mejor jugador de todos los tiempos, tu rutina tan exigente y en tu dedicación por lo que te apaciona te ha hecho llegar muy lejos ",
  "Tienes una gran identidad por tu país y has logrado grandes cosas con tu selección",
  "Eres un jugador joven, pero a pesar de eso ya demuestras un gran nivel, logrando asi tener ese don especial para que te consideren de los mejores",
  "Eres un jugador muy seguro de ti mismo, confias en tus habiiidades demostrando ser de los mejores del mundo",
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3, 4, 5, 6

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();