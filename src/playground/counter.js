const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#93f',
    color: 'white',
    padding: '40px'
}

const buttonStyle = {
    width: '100px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#fff',
    cursor: 'pointer',
    padding: '5px'
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        });
    }
    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        });
    }
    render() {
        return (
            <div style={divStyle}>
                <h1>Count: {this.state.count}</h1>
                <button style={buttonStyle} onClick={this.handleAddOne}>+1</button>
                <button style={buttonStyle} onClick={this.handleMinusOne}>-1</button>
                <button style={buttonStyle}onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={19}/>, document.getElementById('app'));



// const user = {
//     name: 'Alma',
//     age: 3,
//     location: 'Tokyo'
// };

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot); 
// };

// renderCounterApp();