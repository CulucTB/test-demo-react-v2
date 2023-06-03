// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {


    // JXS cho phep viet  trong html trong js

    render() {
        const myInfor = ['ab', 'b', 'c'];
        return (

            <div>
                <UserInfor />
                <br /><br />
                <DisplayInfor name="Hoi Dan IT" age="30" />
                <hr></hr>
                <DisplayInfor name="Eric" age={26} myInfor={myInfor} />
            </div>
        );

    }
}

export default MyComponent;