import React from 'react'
import { Card } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { CardContent } from '@material-ui/core'

function TrelloCard({text}) {
  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </Card>
  )
}

const styles = {
  cardContainer: {
    marginBottom: 8, 
  }
}

export default TrelloCard