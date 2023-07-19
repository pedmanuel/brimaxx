import React from 'react';
import { Card, Skeleton } from 'antd';

const LoadingCard = ({ count, cardWidth, cardHeight }) => {
  const generateCards = () => {
    const cards = [];

    for (let i = 0; i < count; i++) {
      cards.push(
        <Card
          key={i}
          className="col-md-4"
          style={{ width: cardWidth, height: cardHeight }}
        >
          <Skeleton active />
        </Card>
      );
    }

    return cards;
  };

  return <div className="row pb-5">{generateCards()}</div>;
};

export default LoadingCard;