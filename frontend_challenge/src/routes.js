import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';


const BaseRouter = () => {
    return (
        <div>
            <Redirect from='/' to='/characters' />
            <Route exact path='/characters/' component={CharacterList} />
            <Route exact path='/characters/:characterId/' component={CharacterDetails} />
        </div>
    )
}

export default BaseRouter;
