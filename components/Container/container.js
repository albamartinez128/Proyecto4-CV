import "./container.css";

const container = () => {
  return `
  <div class="contenedor_global">
  
    <div class="container">
    <img src="/assets/alba.jpeg" alt="img_alba">
    <p>
    Mi nombre es Alba, estudiante Full Stack en ThePower Business School y graduada en Periodismo y Marketing Digital.
    Durante mis primeros años de carrera tuve la oportunidad de trabajar en el sector del marketing. Fue en ese momento cuando comencé a sentir curiosidad por el mundo del desarrollo web. <br><br>
  Ahora mismo todo mi interés, crecimiento profesional e ilusión está puesto en la programación. </p>
    </div>
    
    <div class="tecnologias">
    <p> < MIS TECNOLOGÍAS ></p>
    <div class="img_tecnologias">
    <img src="/assets/html.png" alt="html">
    <img src="/assets/css.png" alt="css">
    <img src="/assets/js.png" alt="js">
    </div>
    </div>
  <div class="bloque_cv">
  <img src="/assets/curriculum-vitae.png">
    <button class="button_cv">
    <a href="https://drive.google.com/file/d/1dlXTJP8gLr-lMwcRyqt7Oe8j2XFRRQrD/view?usp=drive_link">Curriculum Vitae</a>
    </button>
    <img src="/assets/computacion-en-la-nube.png">
   </div> 
    
    </div>
    `;
};

export default container;
