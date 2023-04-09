import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

// todo: válida os diferentes campos
import handleValue from './utils/handleValue';

// todo: válida os inputs do tipo número
import validateNumber from './utils/validateNumber';

// todo: válida os inputs do tipo texto
import validateText from './utils/validateText';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.onDelete = this.onDelete.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      allCards: [],
    };
  }

  //! Function pai de todas: Atualiza os estados e cria o formData (objetão)
  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const newValue = handleValue(target.type, value);

    // Cria um novo objeto com os valores do formulário
    const formData = {
      ...this.state,
      [name]: newValue,
    };

    // Atualiza o estado com o novo objeto e valida o formulário
    this.setState(formData, this.validateForm);
  }

  //! Function salva cards
  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardTrunfo, allCards, ...card } = this.state;

    if (cardTrunfo === true) {
      const newCard = {
        ...card,
        hasTrunfo: true,
        cardTrunfo: true,
      };
      this.setState({
        allCards: [...allCards, newCard],
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: true,
        isSaveButtonDisabled: true,
      });
    } else {
      const newCard = {
        ...card,
        hasTrunfo: false,
        cardTrunfo: false,
      };
      this.setState({
        allCards: [...allCards, newCard],
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      });
    }
  };

  //! Function deleta cards
  onDelete = (cardToDelete) => {
    const { hasTrunfo } = cardToDelete;

    if (hasTrunfo === true) {
      this.setState((prevState) => ({
        allCards: prevState.allCards.filter((card) => card !== cardToDelete),
        hasTrunfo: false,
      }));
    } else {
      this.setState((prevState) => ({
        allCards: prevState.allCards.filter((card) => card !== cardToDelete),
      }));
    }
  };

  //! Function valida formulario com functions importadas
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
      allCards,
    } = this.state;
    return (
      <div>
        <h1>Super Trunfo</h1>
        <h2>Crie seu baralho</h2>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        {allCards.map((card, index) => (
          <Card
            key={ index }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
            // Usando um tratador de evento para que o btn onDelete não recarregue a página
            onDelete={ () => this.onDelete(card) }
            card={ card }
          />
        ))}
      </div>
    );
  }
}

export default App;
