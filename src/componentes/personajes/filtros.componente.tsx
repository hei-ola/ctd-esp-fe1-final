import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "../../redux/store/personajeStore";
import { findPersonajesThunk } from "../../redux/actions/personajeActions";

import "./filtros.css";

const Filtros = () => {
    const dispatch = useDispatch();
    const { busqueda } = useSelector((state) => state.personaje);

    useEffect(() => {
        dispatch(findPersonajesThunk("", 1));
    }, [dispatch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(findPersonajesThunk(event.target.value, 1));
    };

    return (
        <div className="filtros">
            <label htmlFor="nombre">Filtrar por nombre:</label>
            <input
                type="text"
                placeholder="Rick, Morty, Beth, Alien, ...etc"
                name="nombre"
                onChange={handleChange}
                value={busqueda}
            />
        </div>
    );
};

export default Filtros;