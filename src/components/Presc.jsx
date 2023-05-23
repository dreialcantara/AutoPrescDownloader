import { useState } from "react";
import toastr from "toastr";
import { abrirLinkPresc } from "../functions/abrirLinkPresc";

const Presc = () => {
  const [listaPresc, setListaPresc] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [ultimoDownload, setUltimoDownload] = useState(null);

  const handleInputChange = (event) => {
    setListaPresc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const pedidos = listaPresc
      .split("\n")
      .filter((pedido) => pedido.trim() !== "");

    setCarregando(true);

    pedidos.forEach((pedido, index) => {
      setTimeout(() => {
        abrirLinkPresc(pedido);
        if (index === pedidos.length - 1) {
          setCarregando(false);
          setUltimoDownload(new Date()); // Armazena a hora do último download
          toastr.success("Downloads Finalizados");
        }
      }, index * 3000);
    });
  };

  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "0",
    extendedTimeOut: "0",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  return (
    <div>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <textarea
          className="form-control form-control-lg"
          value={listaPresc}
          onChange={handleInputChange}
          placeholder="Inserir a coluna de número dos pedidos"
          rows={5}
        />
        <button className="mt-2 btn btn-success" type="submit">
          Download Prescrições
        </button>
        {carregando && (
          <div className="overlay">
            <div className="spinner"></div>
          </div>
        )}
        <div className="d-flex justify-content-around ">
          <p className="mt-2 last text-center">Último download </p>
          {ultimoDownload && (
            <p className="mt-2 last text-center">
              {" "}
              {ultimoDownload.toLocaleTimeString()}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Presc;
