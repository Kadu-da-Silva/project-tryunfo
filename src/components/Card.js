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
      onDelete,
      card,
    } = this.props;
    // console.log(card);
    return (
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <div data-testid="description-card">{ cardDescription }</div>
        <div id="divAtr">
          <span data-testid="attr1-card">{ cardAttr1 }</span>
          <span data-testid="attr2-card">{ cardAttr2 }</span>
          <span data-testid="attr3-card">{ cardAttr3 }</span>
        </div>
        <span data-testid="rare-card">{ cardRare }</span>
        {cardTrunfo === true
          ? <div data-testid="trunfo-card">Super Trunfo</div> : null}
        <button
          data-testid="delete-button"
          onClick={ () => onDelete(card) }
        >
          Excluir
        </button>
      </div>
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
  onDelete: PropTypes.func.isRequired,
  card: PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.number,
    cardAttr2: PropTypes.number,
    cardAttr3: PropTypes.number,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
    hasTrunfo: PropTypes.bool,
    isSaveButtonDisabled: PropTypes.bool,
  }).isRequired,
};

export default Card;
