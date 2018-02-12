import React from 'react';


const Stars = () => {
    const numberOfStars = randomIntBetween(1, 9);

    let stars = [];
    for (let i = 0; i < numberOfStars; i++) {
        stars.push(<i className="fa fa-star"></i>);
    }

    return (
        <div className="col-5">
            {stars}
        </div>
    );
};

export {Stars}

function randomIntBetween(minimumThreshold, factor) {
    return Math.floor(Math.random() * factor) + minimumThreshold;
}
