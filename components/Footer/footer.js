import "./footer.css";

const footer = () => {
  return `

  <div class="footer">
  <form id="form">
  <h3>¡Contacta!</h3>
  <div class="field">
  <label for="Nombre">Nombre:</label>
  <input type="text" name="Nombre" id="Nombre">
   </div>

   <div class="field">
   <label for="email">Email:</label>
   <input  type="text" name="email" id="email">
    </div>

   <div class="field">
   <label for="mensaje">Mensaje:</label>
   <input  type="text" name="mensaje" id="mensaje">
    </div>
    <div class="button-enviar">
    <input type="submit" id="button" value="ENVIAR">
    </form>
</div>
   
    <div class="iconos_redes">
    <div class="iconos_rrss  ">
     <a href="https://www.linkedin.com/in/albamartinezgut/"><img src="/assets/linkedin.png"></a>
     <a href="https://github.com/albamartinez128"><img src="/assets/github.png"></a>
    </div>
    </div>
    </div>
    
    `;
};

export default footer;
