import React from 'react';
import {Stars} from "./Stars";
import {Button} from "./Button";
import {Answer} from "./Answer";
import {Numbers} from "./Numbers";

class Game extends React.Component {
    state = {
        selectedNumbers: [2, 4],
    };
    selectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr/>
                <div className="row">
                    <Stars/>
                    <Button/>
                    <Answer selectedNumbers={this.state.selectedNumbers}/>
                </div>
                <br/>
                <Numbers selectedNumbers={this.state.selectedNumbers}
                         selectNumber={this.selectNumber}
                />
            </div>
        );
    }
}

export {Game}