import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log(">>> call constructor: 1")
        super(props);
        this.state = {
            isShowListUser: true
        }
    }


    componentDidMount() {
        console.log('>>> call me component Didmount')
        setTimeout(() => {
            document.title = 'Eric & Hoi Dan IT'
        }, 3000);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> call me component Did update', this.props.prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('You got 5 user')
            }
        }
    }


    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log('>>>> call me render ')
        // destructruing array/object
        const { listUsers } = this.props; //object
        console.log(listUsers)
        // props => viet tat properties
        // props tu động truyền từ cha sang con nếu như mình truyền thì nó sẽ lấy còn ko thì ko lấy
        return (
            <>
                <div className='display-infor-container'>
                    {/* <img src={logo} /> */}
                    <div>
                        <span onClick={() => { this.handleShowHide() }}>
                            {this.state.isShowListUser === true ? " Hide list users: " : " Show list users:"}
                        </span>
                    </div>
                    {this.state.isShowListUser &&
                        <div>
                            {listUsers.map((user, index) => {
                                return (


                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <div>My name's {user.name}  </div>
                                        <div>My age's {user.age} </div>
                                        <div>
                                            <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfor;