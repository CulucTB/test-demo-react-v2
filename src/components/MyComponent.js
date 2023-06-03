// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'CuLuc',
        address: 'Hoi Dan It',
        age: 26
    };

    handleClick = (event) => {
        console.log(">> click me my button");

        // merge state => react class
        this.setState({
            name: 'Eric',
            age: Math.floor((Math.random() * 100) + 1)
            // address: 'Hoi Dan It',
            // age: 26
        })
    }

    handleOnMoverOver(event) {
        // console.log(event.pageX)
    }
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })

    }
    handleOnSumbit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    // JXS cho phep viet  trong html trong js

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event) => this.handleOnSumbit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Sumbit</button>


                </form>
            </div>
        );

    }
}

export default MyComponent;