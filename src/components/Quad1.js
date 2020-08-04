import React, {Component} from 'react';

import './styleFolder/quad.css'

export class Quad1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Naririnig mo ba'
        }
    }

    patuliKaMuna() {
        this.setState({
            text: 'Ang tindero ng balut'
        })
    }

    render() {
        return(
            <div class = "bgFlexRed">
                <div>
                    <p>
                        {this.state.text}
                    </p>
                </div>
                
                <div>
                    <button onClick = {this.patuliKaMuna.bind(this)}>Gost Payt</button>
                </div>
            </div>
        )

        
    }
}

export default Quad1

