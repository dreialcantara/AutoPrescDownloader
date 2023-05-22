import { useState } from "react";
import { abrirLinkInvoic } from "../functions/abrirLinkInvoic";
import toastr from "toastr";

const Invoic = () => {
  const [listaInvoic, setListaInvoic] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [ultimoDownload, setUltimoDownload] = useState(null);

  const handleInputChange = (event) => {
    setListaInvoic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const pedidos = listaInvoic
      .split("\n")
      .filter((pedido) => pedido.trim() !== "");

    setCarregando(true);

    pedidos.forEach((pedido, index) => {
      setTimeout(() => {
        abrirLinkInvoic(pedido);
        if (index === pedidos.length - 1) {
          setCarregando(false);
          setUltimoDownload(new Date()); // Armazena a hora do último download
          toastr.success("Downloads Finalizados");
        }
      }, index * 2000);
    });
  };

  return (
    <div>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <textarea
          className="form-control form-control-lg"
          value={listaInvoic}
          onChange={handleInputChange}
          placeholder="Inserir a coluna com links dos recibos"
          rows={5}
        />
        <button className="mt-2 btn btn-success" type="submit">
          Download Recibos
        </button>
        {carregando && (
          <div className="overlay">
            <div className="spinner"></div>
          </div>
        )}<div className="d-flex justify-content-around "><p className="mt-2 last text-center">Último download  </p>
        {ultimoDownload && (
          <p className="mt-2 last text-center"> {ultimoDownload.toLocaleTimeString()}</p>
        )}</div>
      </form>
    </div>
  );
};

export default Invoic;
