import React from 'react';

interface pointsProps{

    xPlayerPoints: number;
    oPlayerPoints: number;
}

const Points: React.FC<pointsProps> = ({xPlayerPoints , oPlayerPoints}) =>
    {
        return(
            <div className="score-points">
                <div>Player X : {xPlayerPoints}</div>
                <div>Player O : {oPlayerPoints}</div>
            </div>
        );
    };

    export default Points;