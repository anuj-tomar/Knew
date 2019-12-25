import {
    UPDATE_MODAL_DATA,
    RESET_PAGE_STATE,
    UPDATE_PAGE_DATA,
    GET_PAGE_DATA,
    GET_INDIVIDUAL_DATA,
    FETCH_AUTO_SUGGESTIONS
} from '../actions/constants';

const INITIAL_STATE = {
    modal: { showCustomModal: false },
    addonmodal: { showCustomModal: false },
    pageData: {},
    individualItem: {},
    itemLoader: false,
    isLoader: false,
    updatedData: {},
    suggestions:{}
};

export default function (state = INITIAL_STATE, action) {
    if(action.namespace && !state[action.namespace]){
        state[action.namespace] = {};
    }
    switch (action.type) {
        case UPDATE_MODAL_DATA:
            let modal = action.data.addon ? 'addonmodal' : 'modal';
            return { ...state, [modal]: action.data };
        case `SAGA/${GET_PAGE_DATA}`:
            return { ...state, isLoader: true, pageData: {} };
        case `REDUCER/${GET_PAGE_DATA}`:
            return { ...state, isLoader: false, pageData: action.data };
        case `SAGA/${UPDATE_PAGE_DATA}`:
            return { ...state, updatedData: {} };
        case `REDUCER/${UPDATE_PAGE_DATA}`:
            return { ...state, updatedData: action.data };
        case `SAGA/${GET_INDIVIDUAL_DATA}`:
            return { ...state, individualItem: {}, itemLoader: true };
        case `REDUCER/${GET_INDIVIDUAL_DATA}`:
            return { ...state, individualItem: action.data, itemLoader: false };
        case `${action.namespace}/${FETCH_AUTO_SUGGESTIONS}`:
             let key = `${action.namespace}_loading`;
            return { ...state, [key]: true };
        case `REDUCER/${action.namespace}/${FETCH_AUTO_SUGGESTIONS}`:
                let loadingKey = `${action.namespace}_loading`;
                return { ...state, [action.namespace]: action.data, [loadingKey]: false };
        case RESET_PAGE_STATE:
            return action.data && action.data.key
                ? { ...state, [action.data.key]: INITIAL_STATE[action.data.key] }
                : INITIAL_STATE;
        default:
            return state;
    }
}