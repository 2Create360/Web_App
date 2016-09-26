import axios from 'axios'
import { GET_AVAILABLE_TICKETS, GET_USED_TICKETS,
        PURCHAGE_TICKET, ROOT_URL } from './types'

export function getAvailableTicket(token) {
    const request = axios.get(`${ROOT_URL}/trans/tickets?token=${token}`);

    return {
        type: GET_AVAILABLE_TICKETS,
        payload: request
    };
}

export function getUsedTickets(token) {
    const request = axios.get(`${ROOT_URL}/trans/usedtickets?token=${token}`);

    return {
        type: GET_USED_TICKETS,
        payload: request
    };
}