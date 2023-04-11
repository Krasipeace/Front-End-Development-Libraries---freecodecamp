class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };

const Camper = (props) => {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    );
}

Camper.defaultProps = {
    name: 'CamperBot'
};

Camper.propTypes = {
    name: PropTypes.string.isRequired
};