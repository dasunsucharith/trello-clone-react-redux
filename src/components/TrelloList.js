import React from 'react'
import TrelloCard from './TrelloCard'

function TrelloList({title}) {
    return (
    <div style={ styles.container }>
            <h4>{title}</h4> 
        <TrelloCard />    
    </div> 
  )
}

const styles = {
    container: {
        backgroundColor: '#eee',
        borderRadius: 3,
        width: 300,
    }
}

export default TrelloList