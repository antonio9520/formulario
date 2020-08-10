import React, { Fragment, useState } from "react";
import "./Form.css";

const Form = () => {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    valor: 0,
  });
  const [image, setImage] = useState({ file: "" });

  const changeText = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const fileChangedHandler = (event) => {
    setImage({ file: URL.createObjectURL(event.target.files[0]) });
  };

  return (
    <Fragment>
      <h1>Formulario</h1>
      <div className="container">
        <form className="form">
          <div>
            <p>Nombre</p>
            <input
              onChange={changeText}
              className="nombre"
              name="nombre"
            ></input>
          </div>
          <div>
            <p>Descripción</p>
            <textarea
              onChange={changeText}
              className="descripcion"
              name="descripcion"
            ></textarea>
          </div>
          <div>
            <p>Valor</p>
            <input
              onChange={changeText}
              type="number"
              className="valor"
              name="valor"
            ></input>
          </div>
          <div>
            <div>
              <p>Imagen</p>
              <input
                onChange={fileChangedHandler}
                type="file"
                className="imagen"
                name="image"
              ></input>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button>guardar</button>
          </div>
        </form>
        {image.file ? (
          <div className="image-cont">
            <img src={image.file} alt="imagen"></img>{" "}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Fragment>
  );
};

export default Form;

// nombre
// descripcion
// Imagen
// valor
