class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        if (this.props.fiftyFifty) {
            return (
                <h1>You Win!</h1>
            )
        } else {
            return (
                <h1>You Lose!</h1>
            )
        }
    }
}
  
  class GameOfChance extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 1
            };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }          
        });
    }
    render() {
        const expression = Math.random() >= .5; 
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                <Results fiftyFifty={expression} />
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}