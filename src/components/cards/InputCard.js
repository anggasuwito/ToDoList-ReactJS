import React, { Component } from 'react'

export class InputCard extends Component {

    render() {
        let {newName,submitName,changeName}= this.props
        return (
            <>
                <form>
                    <br />
                    <input className="form-control" type="text" name="newName" value={newName} onChange={changeName} />
                    <br />
                    <div className="App">
                        <button className="btn btn-outline-primary" type="button" onClick={()=>submitName()}>Add</button>
                    </div>
                </form>
            </>
        )
    }
}

export default InputCard
