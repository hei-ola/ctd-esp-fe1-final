import { FC, useState } from "react";
import { Link } from "react-router-dom";
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { Personaje } from "../../redux/types/type";
import { useDispatch } from "react-redux";
import {
    deleteFavoritoPersonaje,
    addFavoritoPersonajeAction,
    findPersonajeByIdThunk
} from "../../redux/actions/personajeActions";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
interface TarjetaPersonajeProps {
    personaje: Personaje;
    favoritos: Personaje[];
};

const TarjetaPersonaje: FC<TarjetaPersonajeProps> = ({ personaje, favoritos }) => {
    const dispatch = useDispatch();

    const [favoritoState, setFavoritoState] = useState(
        favoritos.find((element) => element.id === personaje.id) ? true : false
    );

    const handleFavoritoClick = () => {
        if (favoritos.find((element) => element.id === personaje.id)) {
            dispatch(deleteFavoritoPersonaje(personaje));
            setFavoritoState(false);
        } else {
            dispatch(addFavoritoPersonajeAction(personaje));
            setFavoritoState(true);
        }
    };

    const handleClick = () => {
        dispatch(findPersonajeByIdThunk(personaje.id));
    };
    return (
        <div className="tarjeta-personaje">
            <Link to="/detalle" onClick={handleClick}>
                <img src={personaje.image} alt={personaje.name} />
            </Link>
            <div className="tarjeta-personaje-body">
                <Link to="/detalle" onClick={handleClick}>
                    <span>{personaje.name}</span>
                </Link>
                <div onClick={handleFavoritoClick}>
                    <BotonFavorito esFavorito={favoritoState} />
                </div>
            </div>
        </div>
    );
};

export default TarjetaPersonaje;
