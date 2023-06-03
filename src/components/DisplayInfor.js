import React from 'react';

class DisplayInfor extends React.Component {
    render() {
        // destructruing array/object
        const { age, name } = this.props; //object
        console.log(this.props)
        // props => viet tat properties
        // props tu động truyền từ cha sang con nếu như mình truyền thì nó sẽ lấy còn ko thì ko lấy
        return (
            <div>
                <div>My name's {name} </div>
                <div>My age's {age} </div>
            </div>
        )
    }
}

export default DisplayInfor;