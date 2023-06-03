// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {


    // JXS cho phep viet  trong html trong js

    render() {
        return (
            <div>
                <UserInfor />
            </div>
        );

    }
}

export default MyComponent;