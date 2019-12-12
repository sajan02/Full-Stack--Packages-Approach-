import React, { Component } from 'react'
import LeftTable from '../containers/LeftTable';
import RightTable from '../containers/RightTable';
export default class Home extends Component {
    constructor(props) {
      super(props)

      this.state = {

      }
    }
    componentDidMount(){
        
    }
    render() {
      return (
        <div className="row">
          <div className="col-6">
            <LeftTable />
          </div>
          <div className="col-6">
            <RightTable />
          </div>
        </div>
      )
    }
}
