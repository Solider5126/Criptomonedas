import { useEffect, useState } from "react";
import { monedas } from "../data/monedas";

import useSelectMonedas from "../hooks/useSelectMonedas";

const Formulario = ({setMonedas}) => {

  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [SelectMonedas, moneda] = useSelectMonedas("moneda", monedas);
  
  const [SelectCriptomoneda, criptomoneda] = useSelectMonedas(
    "criptomoneda",
    criptos
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCriptos(arrayCriptos);
    };
    consultarApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if([moneda,criptomoneda].includes('')){
      setError(true)
      return
    }
    setError(false)
    setMonedas({
      moneda,
      criptomoneda,
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <p className="text-center bg-red-500 text-white p-1 py-2 rounded-lg font-semibold">Todos los campos son obligatorios</p>
      )}
      <div className="my-4">
        <p className="text-2xl font-semibold text-white">Elige tu moneda</p>
        <SelectMonedas />
      </div>
      <div className="my-4">
        <p className="text-2xl font-semibold text-white">
          Elige tu Criptomoneda
        </p>
        <SelectCriptomoneda />
      </div>
      <button
        type="submit"
        className="my-4 w-full bg-blue-600 p-2 text-white rounded-lg font-semibold text-xl hover:bg-blue-700 "
      >
        Calcular
      </button>
    </form>
  );
};

export default Formulario;
