import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleIngredientChange = (e) => {
    e.preventDefault();
    this.setState({ ingredients: [...this.state.ingredients, e.target.name]})
    console.log(e.target.name)
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value})
  }


  handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
    this.props.addOrder(this.state)
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: {this.state.ingredients.join(', ') || 'Name and at least 1 ingredient required' }</p>

        {this.state.name && this.state.ingredients.length > 0 && <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>}
      </form>
    )
  }
}

export default OrderForm;
