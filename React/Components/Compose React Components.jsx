class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
            <ul>
                <li><NonCitrus /></li>
                <li><Citrus /></li>
            </ul>
        </div>
      );
    }
}
  
class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
            <h1>Types of Food:</h1>
            <Fruits />
            <Vegetables />
        </div>
      );
    }
}