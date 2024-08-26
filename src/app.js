window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
  }

  // Generar y mostrar una excusa aleatoria
  const excuse = `${who[getRandomIndex(who.length)]} ${
    action[getRandomIndex(action.length)]
  } ${what[getRandomIndex(what.length)]} ${when[getRandomIndex(when.length)]}`;

  // Actualizar el contenido del HTML
  document.querySelector("#excusa").innerHTML = excuse;
};
