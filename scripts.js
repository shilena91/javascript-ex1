function App() {
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

  let position = {
    firstLetter: true,
    index: 0,
  };

  document.getElementById("name").innerText = birds[position.index];
  document.addEventListener("keydown", (e) => {
    show(e, position, instructions, birds);
  });
}

function show(e, position, instructions, birds) {
  let name = document.getElementById("name").innerText;
  if (name) {
    character = position.firstLetter
      ? name[0].toLowerCase()
      : name[name.length - 1].toLowerCase();
    if (e.key == character) {
      name = position.firstLetter ? name.slice(1) : name.slice(0, -1);
      if (!name) {
        next(undefined, position, instructions, birds);
      } else {
        next(name, position, instructions, birds);
      }
    }
  } else {
    next(undefined, position, instructions, birds);
  }
}

function next(name, position, instructions, birds) {
  position.firstLetter = name ? !position.firstLetter : true;
  nextUlti(name, position, instructions, birds);
}

function nextUlti(name, position, instructions, birds) {
  if (!name) {
    position.index++;
    document.getElementById("name").innerText = birds[position.index]
      ? birds[position.index]
      : "";
    document.getElementById("press").innerText = birds[position.index]
      ? instructions["pressFirst"]
      : instructions["pressAny"];
    position.index = birds[position.index] ? position.index : -1;
  } else {
    document.getElementById("name").innerText = name;
    document.getElementById("press").innerText = position.firstLetter
      ? instructions["pressFirst"]
      : instructions["pressLast"];
  }
}

App();
