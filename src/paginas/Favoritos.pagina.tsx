import { useSelector } from "../redux/store/personajeStore";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useDispatch } from "react-redux";
import { deleteAllFavoritoPersonaje } from "../redux/actions/personajeActions";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useDispatch();
    const { favoritos } = useSelector((state) => state.personaje);

    const handleClick = () => {
        dispatch(deleteAllFavoritoPersonaje());
    };

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={handleClick}>Eliminar Todos</button>
        </div>
        <GrillaPersonajes personajes={favoritos} />
    </div>
};

export default PaginaFavoritos;