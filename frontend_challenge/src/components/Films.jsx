import React from 'react';

const divStyle = {
    border: '1px dashed',
    padding: '2px 12px',
}

const Films = (props) => {
    return (
        <div>
            <h4>Films:</h4>
            <div style={divStyle}>
                {props.films.map((filmTitle, index) => {
                    return <p key={index}>{filmTitle}</p>
                })}
            </div>
        </div>
    )
}

export default Films;
