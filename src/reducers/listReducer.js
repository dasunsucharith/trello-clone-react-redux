
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
            }
        ]
    },
]

const listReducer = ( state = initialState, action ) => {
    switch (action.type) {
        default:
            return state
    }
}

export default listReducer