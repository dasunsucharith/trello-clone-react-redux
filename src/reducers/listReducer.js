import { CONSTANTS } from '../actions'

let listID = 3
let cardID = 4

const initialState = [
    {
        title: 'first list',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'this is just a static card'
            },
            {
                id: 1,
                text: 'this is justs a static second card'
            }
        ]
    },
    {
        title: 'second list',
        id: 1,
        cards: [
            {
                id: 0,
                text: 'this is the first text content of the second list'
            },
            {
                id: 1,
                text: 'this is the second text content of the second list'
            },
            {
                id: 2,
                text: 'this is the third text content of the second list'
            },
            {
                id: 3,
                text: 'this is the forth text content of the second list'
            }
        ]
    },
    {
        title: 'Third list',
        id: 2,
        cards: [
            {
                id: 0,
                text: 'this is the first text content of the third list'
            },
            {
                id: 1,
                text: 'this is the second text content of the third list'
            },
            {
                id: 2,
                text: 'this is the third text content of the third list'
            }
        ]
    },
]



const listReducer = ( state = initialState, action ) => {
    switch (action.type) {

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID,
            }
            listID += 1
            return [...state, newList]
        
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID,
            }
            cardID += 1

            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list
                }
            })

            return newState

        default:
            return state
    }
}

export default listReducer