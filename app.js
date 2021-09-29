class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 1,
  }

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    })
  }

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    })
  }

  moduloFunction = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0
    })
  }

  render() {
    const style = this.state.shoppingCart === 0 ? { opacity: 0.3 } : {};
    const { shoppingCart, availableProducts } = this.state;
    return (
      <div>
        <button disabled={shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
        <span style={style}> {shoppingCart} </span>
        <button disabled={shoppingCart === availableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
        {shoppingCart > 0 && <button onClick={this.moduloFunction}>Kup</button>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))