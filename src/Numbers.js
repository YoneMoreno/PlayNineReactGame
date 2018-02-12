import React from 'react';
import _ from 'lodash';


const Numbers = () => {
    const arrayOfNumbers = _.range(1, 10);

    return (
        <div className="card text-center">
            <div>
                {arrayOfNumbers.map((number, i) =>
                    <span key={i}>{number}</span>
                )}
            </div>
        </div>
    );
};

export {Numbers}