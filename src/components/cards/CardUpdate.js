import React, { Component } from 'react';

class CardUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
           newName : this.props.name
        }
    }

    handleNewName = (event) => {
        let name = event.target.name
        this.setState({ ...this.state, [name]: event.target.value })
    }
    render() {
        let { index, deleteClick, updateClick, saveClick, name, ableUpdate, cancelUpdate } = this.props
        if (ableUpdate) {
            return (
                <div>
                    <div className="input-group">
                        <input type="text" className="form-control" disabled value={name} aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
                        <div className="input-group-append" id="button-addon4">
                            <button className="btn btn-outline-secondary" onClick={() => updateClick(index)} type="button">Edit</button>
                            <button className="btn btn-outline-secondary" onClick={() => deleteClick(index)} type="button">Delete</button>
                        </div>
                    </div><br />
                </div>
            );
        } else {
            return (
                <div>
                    <div className="input-group">
                        <input type="text" name="newName" className="form-control"  value={this.state.newName} onChange={this.handleNewName} aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
                        <div className="input-group-append" id="button-addon4">
                            <button className="btn btn-outline-secondary" onClick={() => saveClick(this.state.newName,index)} type="button">Save</button>
                            <button className="btn btn-outline-secondary" onClick={() => cancelUpdate(index)} type="button">Cancel</button>
                        </div>
                    </div><br />
                </div>
            );
        }

    }
}

export default CardUpdate;