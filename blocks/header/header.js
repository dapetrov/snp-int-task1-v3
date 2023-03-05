const distance = 450;
addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  if (scrollDistance >= distance) {
    document.getElementById("header").className = "header_scroll";
    const nav_li = document.getElementsByClassName("navigation__li");
    Array.from(nav_li).forEach((element) => {
      element.className = "navigation__li_del-border";
    });
    document.getElementById("header-logo").className = "header__logo_black";
  } else {
    document.getElementById("header").className = "header";
    const nav_li_back = document.getElementsByClassName(
      "navigation__li_del-border"
    );
    Array.from(nav_li_back).forEach((element) => {
      element.className = "navigation__li";
    });
    document.getElementById("header-logo").className = "header__logo";
  }
});
