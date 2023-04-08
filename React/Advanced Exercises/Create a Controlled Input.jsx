class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    submit() {
        this.setState({
            input: ''
        });
    }

    render() {
      return (
        <div>
            <input value={this.state.input} onChange={this.handleChange.bind(this)}/>
            <button onClick={this.submit.bind(this)}>Submit!</button>
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };