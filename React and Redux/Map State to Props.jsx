const state = [];

// Change code below this line
const mapStateToProps = (state) => {
    return {
        messages: state
    }
}

console.log(mapStateToProps(state));