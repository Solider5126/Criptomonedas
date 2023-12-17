import { useEffect, useState } from "react";
import Cripto from "../src/img/imagen-criptos.png";
import "./App.css";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCargando(true);
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.criptomoneda}&tsyms=${monedas.moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[monedas.criptomoneda][monedas.moneda]);
        setCargando(false);
      };
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <>
      <section className="md:flex  justify-center container mx-auto md:mt-24 mt-4">
        <img src={Cripto} alt="Criptomonedas" className="md:w-2/4" />

        <div className=" flex flex-col mx-4">
          <h1 className="text-center font-extrabold text-3xl mb-5 text-white">
            Cotiza Criptomonedas al Instante
          </h1>
          <Formulario setMonedas={setMonedas} />
          {cargando && <Spinner />}
          {resultado.PRICE && <Resultado resultado={resultado} />}
        </div>
      </section>
    </>
  );
}

export default App;
