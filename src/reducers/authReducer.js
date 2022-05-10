import { types } from "../types/types";

/**
 * 
 * {
 *  uid: 'asljkf2150235',
 *  name: 'Usuario',
 *  dir:{
 *      calle: 12,
 *      altura: 15
 *  }
 * }
 * 
 */


const initialState = {};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.id,
                name: action.payload.displayName
            };
        case types.logout:
            return {};
        default:
            return state;
    }
}