import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { formState, onInputChange } = this.props;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
    } = formState;
    return (
      <form>
        <fieldset>
          <label htmlFor="cardName">
            Name
            <input
              id="cardName"
              name="cardName"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardDescription">
            Description
            <textarea
              id="cardDescription"
              name="cardDescription"
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr1">
            First Quality
            <input
              id="cardAttr1"
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr2">
            Second Quality
            <input
              id="cardAttr2"
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr3">
            Thyrdi Quality
            <input
              id="cardAttr3"
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardImage">
            Enter Image
            <input
              id="cardImage"
              name="cardImage"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardRare">
            Rarity
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
          <label htmlFor="cardTrunfo">
            Is a Super Trunfo?
            <input
              id="cardTrunfo"
              name="cardTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="isSaveButtonDisabled">
            <button
              id="isSaveButtonDisabled"
              name="isSaveButtonDisabled"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              // onClick={ onSaveButtonClick }
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
  // onSaveButtonClick: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
    hasTrunfo: PropTypes.bool,
    isSaveButtonDisabled: PropTypes.bool,
  }).isRequired,
};

export default Form;
