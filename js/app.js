document.querySelector(".day").addEventListener("click", function () {
  let root = document.documentElement;

  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    localStorage.removeItem("mode");
  } else {
    root.classList.add("light");
    localStorage.setItem("mode", "light");
  }

  button.addEventListener("click", rato);
});
document.querySelector(".night").addEventListener("click", function () {
  let root = document.documentElement;

  if (root.classList.contains("light")) {
    root.classList.remove("light");
    localStorage.removeItem("mode");
  } else {
    root.classList.add("dark");
    localStorage.setItem("mode", "dark");
    document.querySelector("button").innerHTML =
      '<i class="fa-solid fa-circle-half-stroke"></i>';
  }
});

let root = document.documentElement;

if (localStorage.getItem("mode") == "dark") {
  root.classList.add("dark");
}

if (localStorage.getItem("mode") == "light") {
  root.classList.add("light");
}

let button = document.querySelector(".button");
