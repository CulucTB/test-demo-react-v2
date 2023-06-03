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

        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }

    handleOnMoverOver(event) {
        // console.log(event.pageX)
    }
    // JXS cho phep viet  trong html trong js

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}> Hover </button>
                <button onClick={(event) => { this.handleClick(event) }}>   Click me  </button>
            </div>
        );

    }
}

export default MyComponent;