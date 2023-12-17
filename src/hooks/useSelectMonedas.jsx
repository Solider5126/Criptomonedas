import { useState } from "react";

const useSelectMonedas = (texto, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        id="underline_select"
        className="block py-3 px-2  w-full text-lg  bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option className="text-black" >--Selecciona tu {texto}--</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </>
  );
  return [SelectMonedas, state];
};

export default useSelectMonedas;
