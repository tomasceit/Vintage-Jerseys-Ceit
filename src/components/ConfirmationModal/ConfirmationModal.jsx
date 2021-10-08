import * as React from "react";
import "./ConfirmationModal.css";
import { Link } from "react-router-dom";

const ConfirmationModal = ({ estado, orderId }) => {
  const [state, setState] = React.useState(estado);

  React.useEffect(() => {
    setState(estado);
  }, [estado]);

  return (
    <div id="confirmation-modal" className={state ? "modal fade d-block show" : "modal fade"} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">FELICITACIONES ¡TU COMPRA FUE EXITOSA!</h5>
            <Link to="/home">
              <button type="button" className="btn-close" />
            </Link>
          </div>
          <div className="modal-body">
            <p>El pedido llegará durante los próximos 5 días hábiles.</p>
            <p>Id de la compra: {orderId}</p>
          </div>
          <div className="modal-footer d-flex justify-items-end">
            <Link to="/home">
              <button className="btn btn-danger">Cerrar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
