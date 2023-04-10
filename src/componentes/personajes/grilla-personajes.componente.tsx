import { FC } from "react";
import { useSelector } from "../../redux/store/personajeStore";
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { Personaje } from "../../redux/types/type";

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
interface Props {
    personajes: Personaje[];
}
const GrillaPersonajes: FC<Props> = ({ personajes }) => {
    const { error, status, favoritos } = useSelector(
        (state) => state.personaje
    );

    if (status === "Loading") {
        return <div>Cargando.......</div>;
    }

    if (error) {
        return <div>No existe....</div>;
    }

    return (
        <div className="grilla-personajes">
            {personajes.map((item) => (
                <TarjetaPersonaje key={item.id} personaje={item} favoritos={favoritos} />
            ))
            }
        </div>
    );
};

export default GrillaPersonajes;