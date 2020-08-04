import React, {Component} from 'react';

import Quad1 from './Quad1'
import Quad2 from './Quad2'
import Quad3 from './Quad3'
import Quad4 from './Quad4'

export class App extends Component {
    render() {
        return(
            <div class = "appContainer">
                <div class = "flex1">
                    <div class = "subFlex">
                        <Quad1/>
                        <Quad2/>
                    </div>

                    <div class = "subFlex">
                        <Quad3/>
                        <Quad4/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App