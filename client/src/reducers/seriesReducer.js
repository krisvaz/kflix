import { GET_ALL_SERIES, GET_SERIES, ADD_SERIES, DELETE_SERIES, SERIES_LOADING } from '../actions/series-types';

const initialState = {
    series: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_SERIES:
            return {
                ...state,
                series: action.payload,
                loading: false
            };
        case GET_SERIES:
            return {
                ...state,
                series: action.payload,
                loading: false
            };
        case DELETE_SERIES:
            return {
                ...state,
                series: state.series.filter(item => item._id !== action.payload)
            };
        case ADD_SERIES:
            return {
                ...state,
                series: [action.payload, ...state.series]
            };
            case SERIES_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}