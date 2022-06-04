import { CONSTANTS } from '../actions'

let listID = 3
let cardID = 9

const initialState = [
    {
        title: 'first list',
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: 'this is just a static card'
            },
            {
                id: `card-${1}`,
                text: 'this is justs a static second card'
            }
        ]
    },
    {
        title: 'second list',
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: 'this is the first text content of the second list'
            },
            {
                id: `card-${3}`,
                text: 'this is the second text content of the second list'
            },
            {
                id: `card-${4}`,
                text: 'this is the third text content of the second list'
            },
            {
                id: `card-${5}`,
                text: 'this is the forth text content of the second list'
            }
        ]
    },
    {
        title: 'Third list',
        id: `list-${2}`,
        cards: [
            {
                id: `card-${6}`,
                text: 'this is the first text content of the third list'
            },
            {
                id: `card-${7}`,
                text: 'this is the second text content of the third list'
            },
            {
                id: `card-${8}`,
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
                id: `list-${listID}`,
            }
            listID += 1
            return [...state, newList]
        
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`,
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
        }
        
        case CONSTANTS.DRAG_HAPPENED:

            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexEnd,
                droppableIndexStart, 
                draggableId,
                type,
            } = action.payload
            const newState = [...state]

            // dragging list around 
            if (type === 'list') {
                const list = newState.splice(droppableIndexStart, 1)
                newState.splice(droppableIndexEnd, 0, ...list)
                return newState
            }

            // in the same list 
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            // other lists
            if (droppableIdStart !== droppableIdEnd) {
                // find the list where the drag happened 
                const listStart = state.find(list => droppableIdStart === list.id)

                // pull out the card from this list 
                const card = listStart.cards.splice(droppableIndexStart, 1)

                // find the list where drag ended 
                const listEnd = state.find(list => droppableIdEnd === list.id)

                // put the card in the new list 
                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }

            return newState

        default:
            return state
    }
}

export default listReducer