import React from 'react';
class UserInfor extends React.Component {
    state = {
        name: 'CuLuc',
        address: 'Hoi Dan It',
        age: 26
    };


    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })

    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })

    }

    handleOnSumbit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event) => this.handleOnSumbit(event)}>
                    <label> Your name :</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />

                    <label> Your name :</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Sumbit</button>

                </form>
            </div>
        )
    }


}

export default UserInfor;