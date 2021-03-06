import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Movimiento de scroll");
    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll());
    return () => window.removeEventListener("scroll", detectarScroll());
  }, [scrollY]);
  useEffect(() => {
    console.log("face de Montaje");
  }, []);
  useEffect(() => {
    console.log("face de Actualización");
  });
  useEffect(() => {
    return () => {
      console.log("face de Desmontaje");
    };
  });
  return (
    <>
      <h2>Scroll-Hooks Y Ciclo de Vida</h2>
      <h3>{scrollY}</h3>
    </>
  );
}
