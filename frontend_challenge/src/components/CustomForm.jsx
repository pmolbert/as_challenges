import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CustomForm extends Component {

    handleFormSubmit = (e, characterId) => {
        // e.preventDefault();
        console.log(e.target.elements.note.value);
        let notes = JSON.parse(localStorage.getItem(`note_char_${characterId}`)) || []
        notes.push(e.target.elements.note.value);
        console.log(`notes: ${notes}`)
        localStorage.setItem(`note_char_${characterId}`, JSON.stringify(notes));
    }

    render() {
        return (
            <div>
                <Form onSubmit={event => this.handleFormSubmit(event, this.props.characterId)}>
                    <Form.Group controlId="note">
                        <Form.Label>Leave a note:</Form.Label>
                        <Form.Control as="textarea" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
        )
    }
}

export default CustomForm;