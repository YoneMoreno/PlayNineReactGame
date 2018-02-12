import React from 'react';
import {Stars} from "./Stars";

class Game extends React.Component{
    render(){
        return(
            <div>
                <h3>Play Nine</h3>
                <Stars/>
            </div>
        );
    }
}
export {Game}