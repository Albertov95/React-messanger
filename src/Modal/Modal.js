import React from 'react'
import './Modal.css'



class Modal extends React.Component {

    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button className='menu-button' onClick={() => this.setState({isOpen: true})}>Open</button>

                {this.state.isOpen && (
                <div className='modal'>
                    <div className='modal-body'>
                        <p>Text:</p>
                        <input></input>
                        <p>User:</p>
                        <input></input><br />
                        <button onClick={() => this.setState({isOpen: false})}>Create message</button>
                    </div>
                </div>
                )}
            </React.Fragment>
        )
    }
}

export default Modal