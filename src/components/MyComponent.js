// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'CuLuc',
        address: 'Hoi Dan It',
        age: 26
    };
    // JXS cho phep viet  trong html trong js


    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );

    }
}

export default MyComponent;