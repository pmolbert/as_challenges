import React, { Component } from 'react';
import axios from 'axios';
import CustomForm from './CustomForm';
import Notes from './Notes';
import Details from './Details';
import Films from './Films';

class CharacterDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            characterInfo: [],
            films: null,
            notes: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        let filmTitles = []
        const characterId = this.props.match.params.characterId;
        axios.get(`https://swapi.co/api/people/${characterId}/`)
        .then( res => {
            this.setState({
                characterInfo: res.data
            })
            res.data.films.forEach( filmUrl => {
                axios.get(filmUrl)
                .then(res => {
                    filmTitles.push(res.data.title)
                    this.setState({
                        films: filmTitles,
                        isLoading: false
                    })
                })
            })
        })
        this.setState({
            notes: JSON.parse(localStorage.getItem(`note_char_${characterId}`)) || null
        })

    }

    render() {
        const characterId = this.props.match.params.characterId;
        return (
            <div className='container'>
                <Details isLoading={this.state.isLoading} details={this.state.characterInfo}/>
                {this.state.films && <Films films={this.state.films} />}
                {this.state.notes && <Notes notes={this.state.notes} />}
                <CustomForm characterId={characterId} />
            </div>
        )
    }
}

export default CharacterDetails;
