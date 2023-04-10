import { Personaje } from "../types/type";
import { PersonajesActions } from "../actions/personajeActions";

type PersonajeState = {
  busqueda: string;
  favoritos: Personaje[];
  personajes: Personaje[];
  currentPersonaje: Personaje | null;
  currentPage: number;
  totalPages: number;
  status: "Loading" | "Completed";
  error: string | null;
};


const initialState: PersonajeState = {
  busqueda: "",
  favoritos: [],
  personajes: [],
  currentPersonaje: null,
  currentPage: 1,
  totalPages: 1,
  status: "Completed",
  error: null,
};


const personajesReducer = (
  state: PersonajeState = initialState,
  action: PersonajesActions

) => {
  switch (action.type) {
    case 'FETCH-PERSONAJE':
      return {
        ...state,
        busqueda: action.payload.name,
        status: "Loading",
        error: null,

      };
    case 'FETCH-PERSONAJE-SUCCESS':
      return {
        ...state,
        personajes: action.payload.personajes,
        status: "Completed",
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
      };
    case 'FETCH-PERSONAJE-ERROR':
      return {
        ...state,
        error: action.payload.error,
        personajes: [],
        status: "Completed"
      };
    case "FIND_PERSONAJE_BY_ID":
      return {
        ...state,
        status: "Loading",
        error: null,
      };
    case "FIND_PERSONAJE_BY_ID_SUCCESS":
      return {
        ...state,
        currentPersonaje: action.payload.personaje,
        status: "Completed",
      };
    case "FIND_PERSONAJE_BY_ID_ERROR":
      return {
        ...state,
        error: action.payload.error,
        status: "Completed",
      };
    case "ADD_FAVORITO_PERSONAJE":
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload.personaje],
        status: "Completed",
      };

    case "DELETE_FAVORITO_PERSONAJE":
      return {
        ...state,
        favoritos: [
          ...state.favoritos.filter(
            (personaje) => personaje.id !== action.payload.personaje.id
          ),
        ],
        status: "Completed",
      };
    case "DELETE_ALL_FAVORITO_PERSONAJE":
      return {
        ...state,
        favoritos: [],
      };
    default:
      return {
        ...state,
      };
  };
};

export default personajesReducer;
