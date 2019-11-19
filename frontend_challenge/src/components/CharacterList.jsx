import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import Paginate from './Pagination';

class CharacterList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: [],
            isLoading: false,
            active: 1,
            count: null
        }
    }

    getData = (url) => {
        this.setState({ isLoading: true });
        axios.get(url)
            .then(res => {
                this.setState({ characters: res.data.results, count: res.data.count, isLoading: false });
            })
            .catch(err => {
                console.log(err);
            })
    }

    parseUrl = (url) => (url.split('/')[5])


    componentDidMount() {
        this.getData('https://swapi.co/api/people');
    }

    paginate = (pageNumber) => {
        this.setState({ active: pageNumber })
        this.getData(`https://swapi.co/api/people/?page=${pageNumber}`);
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
                                return <Link to={`/characters/${this.parseUrl(character.url)}`} key={index}><ListGroup.Item action >{character.name}</ListGroup.Item></Link>
                            })}
                        </ListGroup>
                        <Paginate active={this.state.active} totalCharacters={this.state.count} paginate={this.paginate} />
                    </>
                }
            </div>
        )
    }
}

export default CharacterList;