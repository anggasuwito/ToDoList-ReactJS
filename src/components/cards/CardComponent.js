import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardUpdate from './CardUpdate.js';
import InputCard from './InputCard.js';
class CardComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listdata: [],
            newName:""
        }
    }

    handleChangeInput = (event) => {
        let name = event.target.name
        this.setState({ ...this.state, [name]: event.target.value })
    }

    handleSubmit = () => {
        this.state.listdata.push({ name: `${this.state.newName}`, onUpdate: true });
        this.setState({
            name: this.state.newName,
            onUpdate: this.state.onUpdate,
            newName:""
        });
    }

    deletebyIndex = (index) => {
        this.state.listdata.splice(index, 1);
        this.setState({
            listdata: this.state.listdata
        });
    }

    handleUpdateChangeInput = (event) => {
        let name = event.target.name
        this.setState({ ...this.state, [name]: event.target.value })
    }

    initiateEditbyIndex = (index) => {
        // eslint-disable-next-line
        this.state.listdata[index].onUpdate = false 
        this.setState({
            onUpdate: this.state.listdata[index].onUpdate
        });
    }

    saveEditbyIndex = (newName, index) => {
        // eslint-disable-next-line
        this.state.listdata[index].name = newName
        // eslint-disable-next-line
        this.state.listdata[index].onUpdate = true
        this.setState({
            name: this.state.listdata[index].name,
            onUpdate: this.state.listdata[index].onUpdate
        });
    }

    cancelUpdate = (index) => {
        // eslint-disable-next-line
        this.state.listdata[index].onUpdate = true
        this.setState({
            onUpdate: this.state.listdata[index].onUpdate
        });
    }

    render() {
        console.log(this.state.listdata);
        let result
        result = this.state.listdata.map((data, index) => <CardUpdate index={index} deleteClick={this.deletebyIndex} updateClick={this.initiateEditbyIndex} saveClick={this.saveEditbyIndex} ableUpdate={data.onUpdate} name={data.name} cancelUpdate={this.cancelUpdate} />)
        console.log(this.state.listdata);
        return (
            <div className="container">
                <InputCard newName={this.state.newName} changeName={this.handleChangeInput} submitName={this.handleSubmit}/>
                <br /><br />
                {result}
            </div>
        )
    }
}
export default CardComponent;