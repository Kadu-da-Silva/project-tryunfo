import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="cardName">
            <input
              id="cardName"
              name="cardName"
              type="text"
              data-testid="name-input"
            />
          </label>
          <label htmlFor="cardDescription">
            <textarea
              id="cardDescription"
              name="cardDescription"
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="cardAttr1">
            <input
              id="cardAttr1"
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="cardAttr2">
            <input
              id="cardAttr2"
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="cardAttr3">
            <input
              id="cardAttr3"
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="cardImg">
            <input
              id="cardImg"
              name="cardImg"
              type="text"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="cardRare">
            <select
              id="cardRare"
              name="cardRare"
              data-testid="rare-input"
            >
              <option value="normal" key="normal">normal</option>
              <option value="raro" key="raro">raro</option>
              <option value="muito raro" key="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="checkbox">
            <input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              data-testid="trunfo-input"
            />
          </label>
          <label htmlFor="btnSave">
            <button
              id="btnSave"
              name="btnSave"
              data-testid="save-button"
            >
              Salvar
            </button>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Form;
