import axios from 'axios';

import {
    GET_ALL_SERIES,
    GET_SERIES,
    ADD_SERIES,
    DELETE_SERIES,
    SERIES_LOADING
} from './series-types';

export const getAllSeries = () => dispatch => {
    dispatch(setSeriesLoading());
    axios
        .get('/api/series')
        .then(res =>
            dispatch({
                type: GET_ALL_SERIES,
                payload: res.data
            }))
};

export const getSeries = id => dispatch => {
    dispatch(setSeriesLoading());
    axios
        .get(`/api/series/${id}`)
        .then(res =>
            dispatch({
                type: GET_SERIES,
                payload: res.data
            }))
};

export const deleteSeries = id => dispatch => {
    axios.delete(`/api/series/${id}`).then(res =>
        dispatch({
            type: DELETE_SERIES,
            payload: id
        }));
};
export const addSeries = series => dispatch => {
    dispatch(setSeriesLoading());
    axios
        .post('/api/series/', series)
        .then(res =>
            dispatch({
                type: ADD_SERIES,
                payload: res.data
            }))
};

export const setSeriesLoading = () => {
    return {
        type: SERIES_LOADING
    };
};
