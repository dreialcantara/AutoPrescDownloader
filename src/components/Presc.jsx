import { useState } from "react";
import toastr from "toastr";

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
        if (index === pedidos.length - 1) {
          toastr.success("Downloads Finalizados"); // Adiciona um alerta ao finalizar o loop
        }
      }, index * 2000); // Atraso de 100ms entre cada abertura de link
    });
  };

  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-full-width",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
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
          Download Prescrições
        </button>
      </form>
    </div>
  );
};

export default Presc;
