import { GET_AVAILABLE_TICKETS, GET_USED_TICKETS, PURCHAGE_TICKET } from '../actions/types'

const INITIAL_STATE = {availableTickets: null, usedTickets: null, error: null};

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case GET_AVAILABLE_TICKETS:
            return { ...state, availableTickets: action.payload.data.tickets };
        case GET_USED_TICKETS:
            return { ...state, usedTicket: action.payload.data.tickets };
        default:
            return state;
    }
}