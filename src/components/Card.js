import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">{ cardDescription }</p>
        <span data-testid="attr1-card">{ cardAttr1 }</span>
        <span data-testid="attr2-card">{ cardAttr2 }</span>
        <span data-testid="attr3-card">{ cardAttr3 }</span>
        <span data-testid="rare-card">{ cardRare }</span>
        {cardTrunfo === true ? <span data-testid="trunfo-card">Super Trunfo</span> : null}
      </div>
    );
  }
}

export default Card;
