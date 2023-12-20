import "./style.css";
import header from "./components/Header/header";
import hero from "./components/Hero/hero";
import container from "./components/Container/container";
import proyectos from "./components/Proyectos/proyectos";
import footer from "./components/Footer/footer";

document.querySelector("#app").innerHTML += header();
document.querySelector("#app").innerHTML += hero();
document.querySelector("#app").innerHTML += container();
document.querySelector("#app").innerHTML += footer();
