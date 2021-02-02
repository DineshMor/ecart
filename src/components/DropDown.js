import React from 'react';

class DropDown  extends React.Component {
    constructor() {
        super();
        this.state = {
            selectValue:'Orange'
        }
    }
    handleChange = e => {
        this.setState({selectValue:e.target.value});
    }

    render(){
        return (
            <div>
               <select value={this.state.selectValue} 
               onChange={this.handleChange} 
               >
                  <option value="Orange">Orange</option>
                  <option value="Radish">Radish</option>
                  <option value="Cherry">Cherry</option>
                </select>
                <p>jjjjjj</p>
            </div> 
        )
    }
};
 
export default DropDown;