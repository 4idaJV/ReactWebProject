import "./CrearTablas.css";
import { getTodos } from "../../services/recetas.js";
import { useState, useEffect } from "react";
import FiltradoDesayuno from "../../components/Filtrado/FiltradoDesayuno.jsx";
import FiltradoAlmuerzo from "../../components/Filtrado/FiltradoAlmuerzo.jsx";
import FiltradoCena from "../../components/Filtrado/FiltradoCena.jsx";

function CrearTablas() {
  const [recetas, SetRecetas] = useState([]);
  const [boolean, SetBollean] = useState(false);
  const [actu, setActu] = useState(false);
  const [alergenosMenu, SetAlergenosMenu] = useState("");
  const [regimenMenu, SetRegimenMenu] = useState("");

  useEffect(() => {
    TodasRecetas();
  }, []);

  async function TodasRecetas() {
    const data = await getTodos();
    SetRecetas(data);
  }

  function handleclick1(e) {
    SetBollean(true);
    setActu(true);
  }

  function handleClick() {
    if (boolean == true) {
      return (
        <div>
          <div>
            <FiltradoDesayuno
              recetas={recetas}
              regimenMenu={regimenMenu}
              alergenosMenu={alergenosMenu}
              actu={actu}
              setActu={setActu}
            />
          </div>
          <div>
            <FiltradoAlmuerzo
              recetas={recetas}
              regimenMenu={regimenMenu}
              alergenosMenu={alergenosMenu}
              actu={actu}
              setActu={setActu}
            />
          </div>
          <div>
            <FiltradoCena
              recetas={recetas}
              regimenMenu={regimenMenu}
              alergenosMenu={alergenosMenu}
              actu={actu}
              setActu={setActu}
            />
          </div>
        </div>
      );
    } else if (boolean == false) {
      return (
        <div>
          <p></p>
        </div>
      );
    }
  }

  return (
    <>
      <section className="crearTablasMenu">
        <div className="formularioCrearTablas">
          <h1 className="titulosCrearTablas">
          Select the best type of diet that suits you:
          </h1>
          <section className="regimen">
            <div className="agree">
              <input
                type="radio"
                className="check"
                checked={regimenMenu}
                onChange={(event) => SetRegimenMenu(event)}
              />
              <label className="label_CrearTabla">
                {" "}
                <h4 className="tituloscategorias">Omnivore</h4>
                <p>Like meat and fish</p>
              </label>
            </div>

            <div className="agree">
              <input
                type="radio"
                className="check"
                checked={regimenMenu}
                onChange={(event) => SetRegimenMenu(event)}
              />
              <label className="label_CrearTabla">
                {" "}
                <h4 className="tituloscategorias">Vegetarian</h4>
                <p>As foods of plant animal origin</p>
              </label>
            </div>
            <div className="agree">
              <input type="radio" className="check" />
              <label className="label_CrearTabla">
                {" "}
                <h4 className="tituloscategorias">Vegan</h4>
                <p>Do not eat foods of animal origin</p>
              </label>
            </div>
          </section>

          <h1 className="titulosCrearTablas">
          Do you have any allergies or food intolerances?
          </h1>
          <section className="">
    <div className="alergias">
        <div className="fila">
            <div className="agree">
                <input
                    type="radio"
                    className="check"
                    checked={regimenMenu}
                    onChange={(event) => SetRegimenMenu(event)}
                />
                <label className="label_checkbox">
                    <img
                        src="../../../public/imagenes/huevos.png"
                        className="iconAlergic"
                    />{" "}
                    Eggs
                </label>
            </div>

            <div className="agree">
                <input
                    type="radio"
                    className="check"
                    checked={regimenMenu}
                    onChange={(event) => SetRegimenMenu(event)}
                />
                <img
                    src="../../../public/imagenes/almendra.png"
                    className="iconAlergic"
                />
                <label className="label_checkbox"> Nuts</label>
            </div>
        </div>

        <div className="fila">
            <div className="agree">
                <input
                    type="radio"
                    className="check"
                    checked={regimenMenu}
                    onChange={(event) => SetRegimenMenu(event)}
                />
                <label className="label_checkbox">
                    <img
                        src="../../../public/imagenes/trigo.png"
                        className="iconAlergic"
                    />
                    Gluten
                </label>
            </div>

            <div className="agree">
                <input
                    type="radio"
                    className="check"
                    checked={regimenMenu}
                    onChange={(event) => SetRegimenMenu(event)}
                />
                <label className="label_checkbox">
                    <img
                        src="../../../public/imagenes/leche.png"
                        className="iconAlergic"
                    />
                    Lactose
                </label>
            </div>
        </div>
    </div>
</section>


          <section className="aviso">
            <h2>Important announcement</h2>
            <p>
            Our advice has been reviewed by nutrition experts and
              They are intended for guidance only. If you suffer from a
              serious food allergy, we recommend that you always consult
              Talk to your doctor before trying any of our recipes.


            </p>
            <br />
            <p>
            We use this data to determine your needs
              nutritional information and provide you with suggestions tailored to you.
            </p>
          </section>

          <div className="buttonGetMenu">
            <button
              type="button"
              className="SignUp_Button"
              onClick={handleclick1}
            >
              Get Menu
            </button>
          </div>
        </div>
      </section>

      {handleClick()}
    </>
  );
}

export default CrearTablas;
