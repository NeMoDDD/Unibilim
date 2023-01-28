import {React, Component} from "react";
class Comp extends Component{
    state = {
        inputEntry: '',
    }

    submitHandler = (event) => {
        event.preventDefault()
        const {getValueInput} = this.props
        const payload = event.target.value
        getValueInput(payload)
      }
      input1Change = (e) => {
        let next = this.state;
        next.value = e.target.value;
        next.changed = next.value !== next.valueOld;
        next.length = e.target.value.length;
        this.setState(next);
      }
        
      render() {

        return (
          <div>
            <div >
              <div>fas
                <form onSubmit={this.submitHandler}>
                  <input onChange={this.input1Change}></input>
                  <button>Добавить</button>
                </form>
              </div>
              <p>{this.state.inputEntry}</p>
            </div>
          </div>
        )
      }
}
export default Comp