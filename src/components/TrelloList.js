import React from 'react'
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`

function TrelloList({ title, cards, listID, index }) {
    console.log(cards)
    return (
        <Draggable draggableId={String(listID)} index={index} >
            {provided => (
                <ListContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listID)}>
                        {provided => (
                            <div ref={provided.innerRef} {...provided.droppableProps} >
                                <h4 style={{ textAlign: 'center', textTransform: 'uppercase', }}>{title}</h4>
                                {cards.map((card, index) => (
                                    <TrelloCard key={card.id} index={index} text={card.text} id={card.id} />
                                ))}
                                <TrelloActionButton listID={listID} />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    )
}

export default TrelloList