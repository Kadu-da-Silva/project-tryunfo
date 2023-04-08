import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="form">
        <fieldset className="fieldset">
          <label htmlFor="cardName" className="labelName">
            <input
              placeholder="Nome do Card"
              id="cardName"
              name="cardName"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardDescription" className="labelTextarea">
            <textarea
              placeholder="Descrição da Carta"
              id="cardDescription"
              name="cardDescription"
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr1" className="labelAttr">
            Atributo 1
            <input
              id="cardAttr1"
              name="cardAttr1"
              type="number"
              max="90"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr2" className="labelAttr">
            Atributo 2
            <input
              id="cardAttr2"
              name="cardAttr2"
              type="number"
              max="90"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr3" className="labelAttr">
            Atributo 3
            <input
              id="cardAttr3"
              name="cardAttr3"
              type="number"
              max="90"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardImage" className="labelImage">
            <input
              placeholder="Digite o caminho da imagem"
              id="cardImage"
              name="cardImage"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardRare" className="labelRare">
            Raridade
            <select
              id="cardRare"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal" key="normal">normal</option>
              <option value="raro" key="raro">raro</option>
              <option value="muito raro" key="muito raro">muito raro</option>
            </select>
          </label>
          {
            hasTrunfo === true
              ? <span>Você já tem um Super Trunfo em seu baralho</span>
              : (
                <label htmlFor="cardTrunfo" className="labelTrunfo">
                  <input
                    id="cardTrunfo"
                    name="cardTrunfo"
                    type="checkbox"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  Pode haver apenas umSuper Trunfo
                </label>
              )
          }
          <label htmlFor="isSaveButtonDisabled" className="labelButton">
            <button
              id="isSaveButtonDisabled"
              name="isSaveButtonDisabled"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Save
            </button>
          </label>
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
