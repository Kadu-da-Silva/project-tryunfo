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
      card, // card recebe todos os estados do `allCard` e passa todos para o botão onDelete
    } = this.props;
    return (
      <main className="mainCard">
        <section className="sectionCard">
          <div className="divCard">
            <h3 id="h3Card" data-testid="name-card">{ cardName }</h3>
            <div id="nivelCard">
              <span id="spanCard" data-testid="attr3-card">
                Nível
                {' '}
                { cardAttr3 }
              </span>
            </div>
            <img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
              id="imgCard"
            />
            <p id="pCard" data-testid="description-card">{ cardDescription }</p>
            <div id="spanDeAtkEDef">
              <span id="spanCard" data-testid="attr1-card">
                ATK/
                { cardAttr1 }
              </span>
              <span id="spanCard" data-testid="attr2-card">
                DEF/
                { cardAttr2 }
              </span>
            </div>
            <span id="spanCardRare" data-testid="rare-card">
              { cardRare }
            </span>
            {cardTrunfo === true
              ? (
                <div id="trunfo" data-testid="trunfo-card">
                  <span>Super Trunfo</span>
                </div>
              )
              : null}
            {card !== undefined
              ? (
                <button
                  id="btnCard"
                  data-testid="delete-button"
                  onClick={ () => onDelete(card) }
                >
                  Excluir
                </button>
              )
              : undefined}
          </div>
        </section>
      </main>
    );
  }
}

Card.defaultProps = {
  card: undefined,
  onDelete: undefined,
};

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
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
  }),
};

export default Card;
