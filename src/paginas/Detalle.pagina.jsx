import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useDispatch } from "react-redux";
import { useSelector } from "../redux/store/personajeStore";
import { addFavoritoPersonajeAction, deleteFavoritoPersonaje } from "../redux/actions/personajeActions";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
    const dispatch = useDispatch();

    const { currentPersonaje, favoritos, arrayEpisodios } = useSelector(
        (state) => state.personaje
    );
    const handleFavouriteClick = () => {
        if (favoritos.find((element) => element.id === currentPersonaje.id)) {
            dispatch(deleteFavoritoPersonaje(currentPersonaje));
        } else {
            dispatch(addFavoritoPersonajeAction(currentPersonaje));
        }
    };

    return <div className="container">
        <h3>{currentPersonaje?.name}</h3>
        <div className={"detalle"}>

            <div className={"detalle-header"}>
                <img src={currentPersonaje?.image} alt={currentPersonaje?.name} />
                <div className={"detalle-header-texto"}>
                    <p>{currentPersonaje?.name}</p>
                    <p>Planeta: {currentPersonaje?.location.name.split("(")[0]}</p>
                    <p>Genero: {currentPersonaje?.gender}</p>
                </div>
                <div onClick={handleFavouriteClick}>
                    <BotonFavorito
                        esFavorito={
                            favoritos.find((element) => element.id === currentPersonaje.id)
                                ? true
                                : false
                        }
                    />
                </div>
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {arrayEpisodios && arrayEpisodios.map((item)=>(               
                <TarjetaEpisodio key={item.id} arrayEpisodios={item} />
               ))}
                
        </div>
    </div>
}

export default PaginaDetalle