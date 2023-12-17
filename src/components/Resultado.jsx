
const Resultado = ({ resultado }) => {
  console.log(resultado);
  return (
    <section className="flex md:flex-row flex-col mb-5  items-center justify-center md:gap-3">
      
      <img
        className="w-40"
        src={`https://cryptocompare.com/${resultado.IMAGEURL}`}
        alt="Imagen de la Criptomoneda"
      />
      <div className="flex flex-col">
        <p className="text-lg text-white font-semibold my-1">
          El precio es de: <span>{resultado.PRICE}</span>{" "}
        </p>
        <p className="text-lg text-white font-semibold my-1">
          El precio mas alto del dia: <span>{resultado.HIGHDAY}</span>{" "}
        </p>
        <p className="text-lg text-white font-semibold my-1">
          El precio mas bajo del dia: <span>{resultado.LOWDAY}</span>{" "}
        </p>
        <p className="text-lg text-white font-semibold my-1">
          Variacion ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>{" "}
        </p>
      </div>
      
    </section>
  );
};

export default Resultado;
