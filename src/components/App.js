import React, {Component} from 'react';

import Quad1 from './Quad1'

export class App extends Component {
    render() {
        return(
            <div class = "appContainer">
                <div class = "flex1">
                    <div class = "subFlex">
                        <Quad1
                            background='red'
                            borderElement='1px solid black'
                        />
                        <Quad1
                            background='yellow'
                            borderElement='1px solid black'
                        />
                    </div>

                    <div class = "subFlex">
                        <Quad1
                            background='green'
                            borderElement='1px solid black'
                        />
                        <Quad1
                            background='rgb(185, 122, 87)'
                            borderElement='1px solid black'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App