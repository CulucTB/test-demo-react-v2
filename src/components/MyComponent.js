// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'CuLuc',
        address: 'Hoi Dan It',
        age: 26
    };

    handleClick(event) {
        console.log(">> click me my button")
        console.log(" My name is", this.state.name)
    }

    handleOnMoverOver(event) {
        console.log(event.pageX)
    }
    // JXS cho phep viet  trong html trong js

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMoverOver}> Hover </button>
                <button onClick={this.handleClick}>   Click me  </button>
            </div>
        );

    }
}

export default MyComponent;