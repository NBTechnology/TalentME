import React from 'react';
import Text from 'components/Atoms/Text/Text';

import "./BodyCard.css";

const BodyCard = props => {


    return (
        <div className="bodyCardOffer" style={{flex: "1 1 auto"}}>
            <Text variant="p3" padding="15.5px 0px 0px 0px">Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar.</Text>
        </div>
    );
};

export default BodyCard;