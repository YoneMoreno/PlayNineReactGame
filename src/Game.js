import React from 'react';
import {Stars} from "./Stars";
import {Button} from "./Button";

class Game extends React.Component {
    render() {
        return (
            <div>
                <h3>Play Nine</h3>
                <Stars/>
                <Button/>
            </div>
        );
    }
}

export {Game}