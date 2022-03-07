import Swal from "sweetalert2";
import clienteAxios from "../config/axios";
import {
    COMENZAR_CARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO
  } from "../types";

  export function obtenerProductoAction(){
    return async (dispatch) => {
        dispatch(descargarProductos())
        try {
          const respuesta = await clienteAxios.get('/productos');
          dispatch(descargarProductosExitoso(respuesta.data));
        } catch (error) {
          dispatch(descargarProductosError(error));
        }
    }
  }

  const descargarProductos = () =>({
      type: COMENZAR_CARGA_PRODUCTOS,
      payload: true
  });
  
  const descargarProductosExitoso = (productos) =>({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
  });

  const descargarProductosError = (error) =>({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: error
  })