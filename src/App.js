import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import handleValue from './utils/handleValue';
import validateNumber from './utils/validateNumber';
import validateText from './utils/validateText';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateForm = this.validateForm.bind(this);

    this.state = INITIAL_STATE;
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const newValue = handleValue(target.type, value);

    this.setState({
      [name]: newValue,
    }, this.validateForm);
  }

  onSaveButtonClick = () => {
    // quando clica no botao
    this.setState(INITIAL_STATE);
  };

  validateForm() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const inputText = validateText(cardName, cardDescription, cardImage, cardRare);
    const inputNumber = validateNumber(cardAttr1, cardAttr2, cardAttr3);
    if (inputText && inputNumber) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    // Pro Lint parar de encher o saco
    const { isSaveButtonDisabled } = this.state;
    console.log(isSaveButtonDisabled);

    return (
      <div>
        <h1>Super Trunfo</h1>
        <h2>Crie seu baralho</h2>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          formState={ this.state }
        />
        <Card formState={ this.state } />
      </div>
    );
  }
}

export default App;
