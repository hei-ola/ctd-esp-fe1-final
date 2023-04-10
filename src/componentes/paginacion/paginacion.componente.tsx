import { useDispatch } from 'react-redux';

import { useSelector } from '../../redux/store/personajeStore';
import './paginacion.css';
import { findPersonajesThunk } from '../../redux/actions/personajeActions';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const dispatch = useDispatch();
    const { busqueda, currentPage, totalPages } = useSelector(
        (state) => state.personaje
    );

    const handleClick = (event: any) => {
        event.target.innerText === "Anterior"
            ? dispatch(findPersonajesThunk(busqueda, currentPage - 1))
            : dispatch(findPersonajesThunk(busqueda, currentPage + 1));
    };
    return (
        <div className="paginacion">
            <button className={"primary"} onClick={handleClick} disabled={currentPage === 1 ? true : false}>Anterior</button>
            <button className={"primary"} onClick={handleClick} disabled={currentPage === totalPages ? true : false}>Siguiente</button>
        </div>
    );
};

export default Paginacion;
