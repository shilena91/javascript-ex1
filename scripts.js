let birds = [
  "Crow",
  "Peacock",
  "Dove",
  "Sparrow",
  "Goose",
  "Ostrich",
  "Pigeon",
  "Turkey",
  "Hawk",
  "Raven",
];

const instructions = {
  pressFirst: "Press the key as the first letter of the bird's name",
  pressLast: "Press the key as the last letter of the bird's name",
  pressAny: "Press any key to restart",
};

let firstLetter = true;
let index = 0;

document.getElementById("name").innerText = birds[index];
document.addEventListener("keydown", show);

function show(e) {
  let name = document.getElementById("name").innerText;
  if (name) {
    character = firstLetter
      ? name[0].toLowerCase()
      : name[name.length - 1].toLowerCase();
    if (e.key == character) {
      name = firstLetter ? name.slice(1) : name.slice(0, -1);
      if (!name) {
        next(undefined, true);
      } else {
        firstLetter ? next(name, false) : next(name, true);
      }
    }
  } else {
    next(undefined, true);
  }
}

function next(name, first) {
  if (!name) {
    index++;
    document.getElementById("name").innerText = birds[index]
      ? birds[index]
      : "";
    document.getElementById("press").innerText = birds[index]
      ? instructions["pressFirst"]
      : instructions["pressAny"];
    index = birds[index] ? index : -1;
  } else {
    document.getElementById("name").innerText = name;
    document.getElementById("press").innerText = first
      ? instructions["pressFirst"]
      : instructions["pressLast"];
  }
  firstLetter = first;
}
