import React, { useState } from 'react';
import './DisplayInfor.scss';
// import logo from './../logo.svg';

// class DisplayInfor extends React.Component {

//     // render() {
//     //     console.log('>>>> call me render ')
//     //     // destructruing array/object
//     //     const { listUsers } = this.props; //object
//     //     console.log(listUsers)
//     //     // props => viet tat properties
//     //     // props tu động truyền từ cha sang con nếu như mình truyền thì nó sẽ lấy còn ko thì ko lấy
//     //     return (
//     //         <>
//     //             <div className='display-infor-container'>

//     //                 {true &&
//     //                     <div>
//     //                         {listUsers.map((user, index) => {
//     //                             return (


//     //                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//     //                                     <div>My name's {user.name}  </div>
//     //                                     <div>My age's {user.age} </div>
//     //                                     <div>
//     //                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//     //                                     </div>
//     //                                 </div>
//     //                             )


//     //         </>
//     //     )
//     // }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props; //object

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    // this.state = {
    //     isShowHideListUser: true
    // }
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);

    }

    return (
        <>
            <div className='display-infor-container'>
                <div>
                    <span onClick={() => handleShowHideListUser()}>
                        {isShowHideListUser === true ? "Hide list users" : "Show List Users"}
                    </span>
                </div>

                {isShowHideListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            return (


                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}  </div>
                                    <div>My age's {user.age} </div>
                                    <div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>
                            )

                        })}
                    </div>
                }
            </div>

        </>
    )
}

export default DisplayInfor;