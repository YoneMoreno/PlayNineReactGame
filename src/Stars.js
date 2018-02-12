import React from 'react';
import _ from 'lodash';

const Stars = () => {
    const numberOfStars = randomIntBetween(1, 9);
    return (
        <div className="col-5">
            {_.range(numberOfStars).map(i =>
                <i key={i} className="fa fa-star"></i>
            )}
        </div>
    );
};

export {Stars}

function randomIntBetween(minimumThreshold, factor) {
    return Math.floor(Math.random() * factor) + minimumThreshold;
}
