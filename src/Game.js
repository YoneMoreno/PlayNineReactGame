import React from 'react';
import {Stars} from "./Stars";
import {Button} from "./Button";
import {Answer} from "./Answer";

class Game extends React.Component {
    render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr/>
                <div className="row">
                    <Stars/>
                    <Button/>
                    <Answer/>
                </div>
            </div>
        );
    }
}

export {Game}