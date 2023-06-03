// class component
// function component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan IT", age: "16" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "Cu Luc", age: "69" },
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log(">>> check data from parent: ", userObj)
        this.setState({
            // listUsers: [userObj, ...this.state.listUsers]
            listUsers: [...this.state.listUsers, userObj]
        })

    }
    // JXS cho phep viet  trong html trong js
    // DRY :don't repeat youseft
    render() {
        return (

            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /><br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleAddNewUser={this.handleAddNewUser}
                />
            </div>
        );

    }
}

export default MyComponent;