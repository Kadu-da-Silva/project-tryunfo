import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <form>
        <fieldset>
          <h2 data-testid="name-card">{ cardName }</h2>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <p data-testid="description-card">{ cardDescription }</p>
          <div>
            <span data-testid="attr1-card">{ cardAttr1 }</span>
            <span data-testid="attr2-card">{ cardAttr2 }</span>
            <span data-testid="attr3-card">{ cardAttr3 }</span>
          </div>
          <span data-testid="rare-card">{ cardRare }</span>
          {cardTrunfo === true
            ? <span data-testid="trunfo-card">Super Trunfo</span> : null}
        </fieldset>
      </form>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
