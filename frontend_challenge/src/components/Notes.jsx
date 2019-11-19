import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const divStyle = {
    padding: '12px 0'
}

const Notes = (props) => {
    return (
        <div style={divStyle}>
            <h5>Notes:</h5>
            <ListGroup variant="flush">
                {props.notes.map((note, index) => {
                    return <ListGroup.Item key={index}>{note}</ListGroup.Item>
                })}
            </ListGroup>
        </div>
    )
}

export default Notes;
