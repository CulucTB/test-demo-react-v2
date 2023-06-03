import React from 'react';

class DisplayInfor extends React.Component {
    render() {
        // destructruing array/object
        const { listUsers } = this.props; //object
        console.log(listUsers)
        // props => viet tat properties
        // props tu động truyền từ cha sang con nếu như mình truyền thì nó sẽ lấy còn ko thì ko lấy
        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name}  </div>
                            <div>My age's {user.age} </div>
                            <hr />
                        </div>
                    )

                })

                }
                {/* <div>My name's {name} </div>
                <div>My age's {age} </div>
                <hr />
                <div>My name's {name} </div>
                <div>My age's {age} </div>
                <hr />
                <div>My name's {name} </div>
                <div>My age's {age} </div> */}

            </div>
        )
    }
}

export default DisplayInfor;