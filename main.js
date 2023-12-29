import "./style.css";
import header from "./components/Header/header";
import hero from "./components/Hero/hero";
import container from "./components/Container/container";
import proyectos from "./components/Proyectos/proyectos";
import footer from "./components/Footer/footer";
import { printProyectos } from "./components/Proyectos/proyectos";
import { linkPage } from "./utils/linkPage";

document.querySelector("header").innerHTML = header();
document.querySelector("#app").innerHTML += hero();
document.querySelector("#app").innerHTML += container();
document.querySelector("footer").innerHTML = footer();

// linkPage("#homelink", hero);
// linkPage("#aboutlink", About);
linkPage("#proyectos", printProyectos);

const getData = () => {
  fetch("http://localhost:3000")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};
getData();
