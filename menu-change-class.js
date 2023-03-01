const a = ["PONE", "PTWO", "PTHREE", "PFOUR", "PFIVE"];

a.map((element, index) => document.getElementById(element)).map(
  (element, index) => {
    element.addEventListener("click", () => modifyElement(a[index]));
  }
);

function modifyElement(elem) {
  const a = ["PONE", "PTWO", "PTHREE", "PFOUR", "PFIVE"];
  a.splice(a.indexOf(elem), 1);
  document.getElementById(elem).classList.add("type-tour__li__button_active");
  document.getElementById(elem).classList.remove("type-tour__li__button");
  for (let i = 0; i < 4; i++) {
    const b = a[i];
    document.getElementById(b).classList.add("type-tour__li__button");
    document.getElementById(b).classList.remove("type-tour__li__button_active");
  }
}
