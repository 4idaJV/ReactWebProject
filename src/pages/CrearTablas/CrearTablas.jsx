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

  const [alergenosMenu1, SetAlergenosMenu1] = useState(false);
  const [alergenosMenu2, SetAlergenosMenu2] = useState(false);
  const [alergenosMenu3, SetAlergenosMenu3] = useState(false);
  const [alergenosMenu4, SetAlergenosMenu4] = useState(false);

  const [regimenMenu, SetRegimenMenu] = useState("");

  const [regimenMenu1, SetRegimenMenu1] = useState(false);
  const [regimenMenu2, SetRegimenMenu2] = useState(false);
  const [regimenMenu3, SetRegimenMenu3] = useState(false);

  console.log(regimenMenu);
  console.log(alergenosMenu);
  useEffect(() => {
    TodasRecetas();
  }, []);

  async function TodasRecetas() {
    const data = await getTodos();
    SetRecetas(data);
  }

  function handleclick1() {
    SetBollean(true);
    setActu(true);
  }

  function handleCheckbox() {
    if (regimenMenu1) {
      SetRegimenMenu1(!regimenMenu1);
      SetRegimenMenu("");
    } else {
      SetRegimenMenu1(!regimenMenu1);
      SetRegimenMenu2(false);
      SetRegimenMenu3(false);
      SetRegimenMenu("Omnivoro");
    }
  }
  function handleCheckbox2() {
    if (regimenMenu2 == true) {
      SetRegimenMenu2(!regimenMenu2);
      SetRegimenMenu("");
    } else if (regimenMenu2 == false) {
      SetRegimenMenu2(!regimenMenu2);
      SetRegimenMenu1(false);
      SetRegimenMenu3(false);
      SetRegimenMenu("vegetariano");
    }
  }

  function handleCheckbox3() {
    if (regimenMenu3 == true) {
      SetRegimenMenu3(!regimenMenu3);
      SetRegimenMenu("");
    } else if (regimenMenu3 == false) {
      SetRegimenMenu3(!regimenMenu3);
      SetRegimenMenu1(false);
      SetRegimenMenu2(false);
      SetRegimenMenu("vegano");
    }
  }

  function handleCheckbox4() {
    if (alergenosMenu1 == true) {
      SetAlergenosMenu1(!alergenosMenu1);
      SetAlergenosMenu("");
    } else if (alergenosMenu1 == false) {
      SetAlergenosMenu1(!alergenosMenu1);
      SetAlergenosMenu3(false);
      SetAlergenosMenu4(false);
      SetAlergenosMenu2(false);
      SetAlergenosMenu("huevo");
    }
  }

  function handleCheckbox5() {
    if (alergenosMenu2 == true) {
      SetAlergenosMenu2(!alergenosMenu2);
      SetAlergenosMenu("");
    } else if (alergenosMenu2 == false) {
      SetAlergenosMenu2(!alergenosMenu2);
      SetAlergenosMenu3(false);
      SetAlergenosMenu4(false);
      SetAlergenosMenu1(false);
      SetAlergenosMenu("gluten");
    }
  }

  function handleCheckbox6() {
    if (alergenosMenu3 == true) {
      SetAlergenosMenu3(!alergenosMenu3);
      SetAlergenosMenu("");
    } else if (alergenosMenu3 == false) {
      SetAlergenosMenu3(!alergenosMenu3);
      SetAlergenosMenu4(false);
      SetAlergenosMenu2(false);
      SetAlergenosMenu1(false);
      SetAlergenosMenu("frutoSecos");
    }
  }

  function handleCheckbox7() {
    if (alergenosMenu4 == true) {
      SetAlergenosMenu4(!alergenosMenu4);
      SetAlergenosMenu("");
    } else if (alergenosMenu4 == false) {
      SetAlergenosMenu4(!alergenosMenu4);
      SetAlergenosMenu3(false);
      SetAlergenosMenu2(false);
      SetAlergenosMenu1(false);
      SetAlergenosMenu("lacteos");
    }
  }

  function handleClick() {
    if (boolean == true) {
      return (
        <div className="box-Meals">
          <div className="box-MealsBreakfast">
            <FiltradoDesayuno
              recetas={recetas}
              regimenMenu={regimenMenu}
              alergenosMenu={alergenosMenu}
              actu={actu}
              setActu={setActu}
            />
          </div>
          <div className="box-MealsBreakfast">
            <FiltradoAlmuerzo
              recetas={recetas}
              regimenMenu={regimenMenu}
              alergenosMenu={alergenosMenu}
              actu={actu}
              setActu={setActu}
            />
          </div>
          <div className="box-MealsBreakfast">
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
        <form className="formularioCrearTablas">
          <p className="titulosCrearTablas">
            Select the best type of diet that suits you:
          </p>
          <section className="regimen">
            <div className="agree">
              <input
                type="radio"
                className="check1"
                value="Omnivoro"
                checked={regimenMenu1}
                onChange={handleCheckbox}
              />
              <label className="label_CrearTabla">
                <p className="regimenTitle">Omnivore</p>
                <p>I eat food of both animal and plant origin</p>
              </label>
            </div>
            <div className="agree">
              <input
                type="radio"
                className="check1"
                value="Vegetariano"
                checked={regimenMenu2}
                onChange={handleCheckbox2}
              />
              <label className="label_CrearTabla">
                <p className="regimenTitle">Vegetarian</p>
                <p>I do not eat meat or fish</p>
              </label>
            </div>
            <div className="agree">
              <input
                type="radio"
                className="check1"
                value="Vegano"
                checked={regimenMenu3}
                onChange={handleCheckbox3}
              />
              <label className="label_CrearTabla">
                <p className="regimenTitle">Vegan</p>
                <p>I do not eat any animal-derived food.</p>
              </label>
            </div>
          </section>
          <h1 className="titulosCrearTablas">
            Do you have any allergies or food intolerances?
          </h1>


          <section className="">
            <div className="alergias">
              <div className="agree">
                <input
                  type="checkbox"
                  id="eggsCheckbox"
                  className="check"
                  checked={alergenosMenu1}
                  onChange={handleCheckbox4}
                  hidden
                />
                <label className="label_checkbox" htmlFor="eggsCheckbox">
                  <span className="checkbox-custom"></span>
                  Eggs
                </label>
              </div>

              <div className="agree">
                <input
                  type="checkbox"
                  id="glutenCheckbox"
                  className="check"
                  checked={alergenosMenu2}
                  onChange={handleCheckbox5}
                  hidden
                />
                <label className="label_checkbox" htmlFor="glutenCheckbox">
                  <span className="checkbox-custom2"></span>
                  Gluten
                </label>
              </div>

              <div className="agree">
                <input
                  type="checkbox"
                  id="nutsCheckbox"
                  className="check"
                  checked={alergenosMenu3}
                  onChange={handleCheckbox6}
                  hidden
                />
                <label className="label_checkbox" htmlFor="nutsCheckbox">
                  <span className="checkbox-custom3"></span>
                  Nuts
                </label>
              </div>

              <div className="agree">
                <input
                  type="checkbox"
                  id="lactoseCheckbox"
                  className="check"
                  checked={alergenosMenu4}
                  onChange={handleCheckbox7}
                  hidden
                />
                <label className="label_checkbox" htmlFor="lactoseCheckbox">
                  <span className="checkbox-custom4"></span>
                  Lactose
                </label>
              </div>
            </div>
          </section>

          
          <section className="aviso">
            <h2 className="avisoTitulo">Important announcement</h2>
            <p className="avisoParagraph">
              Our advice has been reviewed by nutrition experts and They are
              intended for guidance only. If you suffer from a serious food
              allergy, we recommend that you always consult Talk to your doctor
              before trying any of our recipes.
            </p>
            <br />
            <p className="avisoParagraph">
              We use this data to determine your needs nutritional information
              and provide you with suggestions tailored to you.
            </p>
          </section>
          <button
            type="button"
            className="SignUp_Button"
            onClick={handleclick1}
          >
            Get Menu
          </button>
        </form>
      </section>

      {handleClick()}
    </>
  );
}

export default CrearTablas;
