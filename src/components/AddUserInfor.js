import React from 'react';
class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: 'Hoi Dan It',
        age: ''
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
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
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

export default AddUserInfor;