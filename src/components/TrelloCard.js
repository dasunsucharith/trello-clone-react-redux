import React from 'react'
import { Card } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const CardContainer = styled.div`
  margin-bottom: 8px;
`

function TrelloCard({text, id, index}) {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
          <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Card>
              <CardContent>
                <Typography gutterBottom>{text}</Typography>
              </CardContent>
            </Card>
          </CardContainer>
      )}
    </Draggable>
  )
}

export default TrelloCard