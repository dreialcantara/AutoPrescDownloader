import { useState } from "react";
import { abrirLinkInvoic } from "../functions/abrirLinkInvoic";
import toastr from "toastr";

const Invoic = () => {
  const [listaInvoic, setListaInvoic] = useState("");

  const handleInputChange = (event) => {
    setListaInvoic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const pedidos = listaInvoic
      .split("\n")
      .filter((pedido) => pedido.trim() !== "");

    pedidos.forEach((pedido, index) => {
      setTimeout(() => {
        abrirLinkInvoic(pedido);
        if (index === pedidos.length - 1) {
          toastr.success("Downloads Finalizados"); // Adiciona um alerta ao finalizar o loop
        }
      }, index * 2000); // Atraso de 100ms entre cada abertura de link
    });
  };

  return (
    <div>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <textarea
          className="form-control form-control-lg"
          value={listaInvoic}
          onChange={handleInputChange}
          placeholder="Insira a coluna dos recibos"
          rows={5}
        />
        <button className="mt-2 btn btn-success" type="submit">
          Download Recibos
        </button>
      </form>
    </div>
  );
};

export default Invoic;
