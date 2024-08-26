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

  let rwh = Math.floor(Math.random() * who.length);
  let ra = Math.floor(Math.random() * action.length);
  let rwa = Math.floor(Math.random() * what.length);
  let rwhe = Math.floor(Math.random() * when.length);

  document.querySelector("#excusa").innerHTML =
    who[rwh] + " " + action[ra] + " " + what[rwa] + " " + when[rwhe];
};
