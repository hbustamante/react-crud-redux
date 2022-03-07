import Swal from "sweetalert2";
import clienteAxios from "../config/axios";
import {
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
} from "../types";

export function eliminarProductoAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id));
    try {
      const respuesta = await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito(respuesta.data));

      Swal.fire(
        "Producto Eliminado",
        "Tu registro fue eliminado correctamente",
        "success"
      );
    } catch (error) {
      dispatch(eliminarProductoError(error));
    }
  };
}

const obtenerProductoEliminar = (id) => ({
  type: OBTENER_PRODUCTO_ELIMINAR,
  payload: id,
});

const eliminarProductoExito = () => ({
  type: PRODUCTO_ELIMINADO_EXITO,
});

const eliminarProductoError = (error) => ({
  type: PRODUCTO_ELIMINADO_ERROR,
  payload: error,
});
