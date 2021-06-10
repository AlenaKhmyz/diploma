import React, {  memo, useMemo } from 'react';

const getCardsClassNames = (small) => {
    return {
        card: `card ${small && 'card-small'}`,
        cardImage: `card-image ${small && 'card-image-small' }`,
        cardContent: `card-content ${small && 'card-content-small'}`,
    }
}

const CardMain = ({
    picture,
    name,
    small,
    id,
    showId
}) => {
    const classNames = useMemo( () => getCardsClassNames(small), [small])
    return (
        <div className={classNames.card}>
          <img
            src={picture}
            className={classNames.cardImage}
            alt='avatar'
          />
          <div className={classNames.cardContent}>
            <h2>{name.first}</h2>
            <h4>{name.last}</h4>
            {showId && <h5>{id}</h5>}
          </div>
        </div>
    )
}

export const Card = memo(CardMain);