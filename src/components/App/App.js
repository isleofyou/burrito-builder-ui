import React, { Component } from 'react';
import './App.css';
import { getOrders, postOrder } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: [],
    }
  }

  componentDidMount() {
    getOrders()
      .then(data => {
        console.log('data', data)
        this.setState({orders: data.orders})
        console.log(this.state.orders)
      })
      .catch(err => console.error('Error fetching:', err));
  }

  addOrder = (order) => {
    let newOrder = {
      id: this.state.orders.length + 1,
      ingredients: order.ingredients,
      name: order.name
    }
    this.setState({ orders: [...this.state.orders, newOrder]})
    postOrder(newOrder);
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addOrder={this.addOrder}/>
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
