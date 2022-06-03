import React from 'react'
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'
import { Droppable } from 'react-beautiful-dnd'

function TrelloList({title, cards, listID, index}) {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                    <h4 style={{ textAlign: 'center', textTransform: 'uppercase', }}>{title}</h4>
                    {cards.map(card => (
                        <TrelloCard key={card.id} index={index} text={card.text} id={card.id} />
                    ))}
                    <TrelloActionButton listID={listID} />
                    {provided.placeholder}
                </div> 
            ) }
        </Droppable>
    )
}

const styles = {
    container: {
        backgroundColor: '#dfe3e6',
        borderRadius: 3,
        width: 300,
        height: '100%',
        padding: 8,
        marginRight: 8,
    }
}

export default TrelloList