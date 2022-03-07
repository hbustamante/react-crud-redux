import Swal from "sweetalert2";
import clienteAxios from "../config/axios";
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO
  } from "../types";


export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch(agregarProducto());
        
        try {
            await clienteAxios.post('/productos', producto);

            dispatch(agregarProductoExito(producto));
            
            Swal.fire('Correcto', 'Se agrego correctamente', 'success');
        } catch (error) {
            console.log(error);
            dispatch(agregarProductoError(true));
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Tenemos un error al agregar el producto.'
            });
        }
    }
}

const agregarProducto = () =>({
    type: AGREGAR_PRODUCTO,
    payload: true
})

const agregarProductoExito = (producto) =>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = (error) =>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: error
})