import { useState } from "react";

const Presc = () => {
  const [listaPresc, setListaPresc] = useState("");

  const abrirLinkPresc = (numeroDoPedido) => {
    window.open(`   
    https://backend.manual.com.br/api/v1/pilltime/orders/${numeroDoPedido}/get-combined-prescription?access_token=NDEyNjdlMjkxMDE5OTIxZjNhNWFiMGNhMDU2MzA3NjFmZmFiOTBiOTk1OGNlZGIzY2ExN2UzOGVhZTY0YWIwNQ
  
    `);
  };

  const handleInputChange = (event) => {
    setListaPresc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const pedidos = listaPresc
      .split("\n")
      .filter((pedido) => pedido.trim() !== "");

    pedidos.forEach((pedido, index) => {
      setTimeout(() => {
        abrirLinkPresc(pedido);
      }, index * 2000); // Atraso de 100ms entre cada abertura de link
    });
  };

  return (
    <div>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <textarea
          className="form-control form-control-lg "
          value={listaPresc}
          onChange={handleInputChange}
          placeholder="Insira a coluna de pedidos"
          rows={5}
        />
        <button className="mt-2 btn btn-success" type="submit">
          Download Prescriçõess
        </button>
      </form>
    </div>
  );
};

export default Presc;
