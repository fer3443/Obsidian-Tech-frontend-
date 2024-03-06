import React, { useEffect, useState } from "react";
import { GetAllPedidos, UpdatePedido } from "../../services/user_service";
import Accordion from "react-bootstrap/Accordion";
import { Notification } from "../../services/tostifyNot";
import "../purchaseList/PurchaseList.css";
import { useHandleChange } from "../../hooks/useHandleChange";
export const PurchaseList = () => {
  const [actualizar, setActualizar] = useState(false);
  const [order, setOrder] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [correo, setCorreo] = useState();
  const {data, setData, handleChange} = useHandleChange({
    pedidoId: null,
    mail: "",
    estado: "",
    virtual_delete: false,
  })
  useEffect(() => {
    GetAllPedidos()
      .then(({ pedidos }) => {
        setOrder(pedidos);
        setActualizar(false);
      })
      .catch((err) => console.log(err));
    setData((prevStatus) => ({
      ...prevStatus,
      pedidoId: selectedId,
    }));
  }, [actualizar, selectedId]);

  const handleSelectedId = (idPedido, mail) => {
    setSelectedId(idPedido), setCorreo(mail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.estado === ""){
      Notification({message: 'Debe cambiar el estado de su pedido a realizado para eliminar', type: 'error'})
    }else{
      UpdatePedido({
        pedidoId: data.pedidoId,
        virtualDelete: data.virtual_delete,
        nuevoEstado: data.estado,
        mail: correo,
      })
        .then((res) => {
          Notification({message: 'Estado de pedido actualizado con exito', type:  'success'});
          setData({
            pedidoId: null,
            mail: '',
            estado: '',
            virtual_delete: false
          })
          setActualizar(true);
        })
        .catch((err) => {
          Notification({message: `Error al actualizar estado ${err}`, type: 'error'})
        });
    }
  };
  const renderPedido = (item, index) => {
    const { nombres, apellidos } = item.nombre;
    const { calle, departamento, localidad, numero, provincia } =
      item.direccion;
    const { producto, mail, fecha, _id } = item;
    const fechaFormateada = new Date(fecha).toLocaleString();
    return (
      <Accordion.Item eventKey={index} key={index}>
        <Accordion.Header>Pedido de: {item.mail}</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
              <span>Para:</span> {nombres}, {apellidos}
            </li>
            <li>
              <p>
                <span>Direccion:</span> Departamento: {departamento}, Calle:{" "}
                {calle} {numero}, Localidad: {localidad}, Provincia: {provincia}
              </p>
            </li>
            <li>
              <p>
                <span>Realizado en la fecha:</span> {fechaFormateada}
              </p>
            </li>
          </ul>
          <ol>
            {producto.map((elemento, index) => {
              return <li key={index}>{elemento.nombre}</li>;
            })}
          </ol>
          <form className="container-status-delete">
            <div className="modify-status">
              <label htmlFor="status">Estado: </label>
              <select
                name="estado"
                id="status"
                onChange={(e) => {
                  handleSelectedId(_id, mail);
                  handleChange(e);
                }}
              >
                <option value=''>Seleccionar</option>
                <option value="sin realizar">Sin realizar</option>
                <option value="preparando">Preparando</option>
                <option value="realizado">Realizada</option>
              </select>
            </div>
            <div className="modify-status">
              <label htmlFor="delete-purchase">Eliminar: </label>
              <select
                name="virtual_delete"
                id="delete-purchase"
                onChange={handleChange}
              >
                <option>-</option>
                <option value={false}>No</option>
                <option value={true}>Si</option>
              </select>
            </div>
          </form>
          <div className="box-button-form">
            <button type="submit" onClick={handleSubmit}>
              confirmar
            </button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    );
  };
  return (
    <section className="purchase-list-section section">
      <div className="purchase-list-container grid container">
          <h3 className="section-title">LISTA DE PEDIDOS</h3>
          <hr />
          <p className="nota">Nota: para eliminar un pedido primero debe cambiar el estado de pedido a realizado!</p>
        <div className="purchase-list-content">
          <div className="container-acordeon">
            <h5>Pedidos sin realizar</h5>
            <Accordion>
              {order
                .filter(function (item) {
                  return (
                    item.estado === "sin realizar" &&
                    item.virtual_delete === false
                  );
                })
                .map(renderPedido)}
            </Accordion>
          </div>
          <div className="container-acordeon">
            <h5>Pedidos en preparacion</h5>
            <Accordion>
              {order
                .filter(function (item) {
                  return (
                    item.estado === "preparando" &&
                    item.virtual_delete === false
                  );
                })
                .map(renderPedido)}
            </Accordion>
          </div>
          <div className="container-acordeon">
            <h5>Pedidos Realizados</h5>
            <Accordion>
              {order
                .filter(function (item) {
                  return (
                    item.estado === "realizado" &&
                    item.virtual_delete === false
                  );
                })
                .map(renderPedido)}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
