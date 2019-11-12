import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const divStyle = {
    padding: '2px 12px',
}

const Details = (props) => {
    return (
        <div>
            {props.isLoading ?
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                :
                <>
                    <h4>Character info:</h4>
                    <div style={divStyle}>
                        <p>name: {props.details.name}</p>
                        <p>height: {props.details.height}</p>
                        <p>mass in kg: {props.details.mass}</p>
                        <p>hair color: {props.details.hair_color}</p>
                        <p>skin color: {props.details.skin_color}</p>
                        <p>eye color: {props.details.eye_color}</p>
                        <p>birth year: {props.details.birth_year}</p>
                        <p>gender: {props.details.gender}</p>
                    </div>
                </>
            }
        </div>
    )
}

export default Details;
