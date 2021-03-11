import React, { useRef } from "react";

export default function Referencias() {
  //let refMenu=createRef(),
  let refMenu = useRef(),
    refMenuBtn = useRef();
  //console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };
  return (
    <>
      <h2>Referencias</h2>
      <button ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <nav ref={refMenu} style={{ display: "none" }}>
        <a href="#">sección 1</a>
        <br />
        <a href="#">sección 2</a>
        <br />
        <a href="#">sección 3</a>
        <br />
        <a href="#">sección 4</a>
        <br />
        <a href="#">sección 5</a>
      </nav>
    </>
  );
}
