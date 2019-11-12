import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'

class CharacterList extends Component {
    constructor(props){
        super(props)

        this.state = {
            characters: [],
            isLoading: false
        }
    }

    componentDidMount(){
        this.setState({isLoading: true});
        axios.get('https://swapi.co/api/people')
        .then( res => {
            this.setState({characters: res.data.results, isLoading:false});
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {


        return (
            <div className='container'>
                {this.state.isLoading ?
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    :
                    <>
                    <h1>Name</h1>
                    <ListGroup>
                        {this.state.characters.map((character, index) => {
                            return <Link to={`/characters/${index + 1}`} key={index}><ListGroup.Item action >{character.name}</ListGroup.Item></Link>
                        })}
                    </ListGroup>
                    </>
                }
            </div>
        )
    }
}

export default CharacterList;
// <ListGroup.Item action href = {`/characters/${index + 1}`}>{character.name}</ListGroup.Item>