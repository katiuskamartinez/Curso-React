import React, { useState } from "react";

/* export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Elige tu sabor js favorito</p>
        <input
          type="radio"
          id="vanilla"
          value="vanilla"
          name="sabor"
          onChange={(e) => setSabor(e.target.value)}
          defaultChecked
        />
        <label htmlFor="Vanilla">vanilla</label>
        <input
          type="radio"
          id="react"
          value="react"
          name="sabor"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="vue"
          value="vue"
          name="sabor"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Elige tu Lenguaje de programación Favorito</p>
        <select
          name="lenguaje"
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue=""
        >
          <option value="">---</option>
          <option value="js">JAVASCRIPT</option>
          <option value="php">PHP</option>
          <option value="py">PYTHON</option>
          <option value="go">GO</option>
          <option value="rb">RUBY</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
 */
export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elige tu sabor js favorito</p>
        <input
          type="radio"
          id="vanilla"
          value="vanilla"
          name="sabor"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="Vanilla">vanilla</label>
        <input
          type="radio"
          id="react"
          value="react"
          name="sabor"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="vue"
          value="vue"
          name="sabor"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Elige tu Lenguaje de programación Favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="js">JAVASCRIPT</option>
          <option value="php">PHP</option>
          <option value="py">PYTHON</option>
          <option value="go">GO</option>
          <option value="rb">RUBY</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
