import React, { useState } from 'react';
// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         address: 'Hoi Dan It',
//         age: ''
//     };
//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })

//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })

//     }

//     handleOnSumbit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and I'm from {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSumbit(event)}>
//                     <label> Your name :</label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeInput(event)}
//                     />

//                     <label> Your name :</label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Sumbit</button>

//                 </form>
//             </div>
//         )
//     }
// }
const AddUserInfor = (props) => {
    // state = {
    //     name: '',
    //     address: 'Hoi Dan It',
    //     age: ''
    // };
    const [name, setName] = useState('');
    const [address, setAddress] = useState('Hoi Dan IT');
    const [age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        // this.setState({
        //     name: event.target.value
        // })
        setName(event.target.value)

    }
    const handleOnChangeAge = (event) => {
        // this.setState({
        //     age: event.target.value
        // })
        setAge(event.target.value)

    }

    const handleOnSumbit = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    }

    return (
        <div>
            My name is {name} and I'm from {age}
            <form onSubmit={(event) => handleOnSumbit(event)}>
                <label> Your name :</label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}
                />

                <label> Your name :</label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Sumbit</button>

            </form>
        </div>
    )
}

export default AddUserInfor;