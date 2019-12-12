import React, { Component } from 'react'
import PieChart from '../containers/PieChart';
import BarPlot from '../containers/BarPlot';

export default class Plots extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       activeTab : 'pie',
       activeTabclassName : 'nav-link custom-active',
       inactiveTabclassName : 'nav-link custom-inactive'
    }
  }
  
  updateTabClass(e,val){
    e.preventDefault();
    this.setState({
      activeTab : val
    })
  }

  render() {
    let el = this.state.activeTab==='pie'?
      <PieChart /> : <BarPlot />
    return (
      <div>
      <ul className="nav nav-pills nav-fill">
      <li className="nav-item custom-item">
        <button style={{width:'100%'}} className={this.state.activeTab==='pie'?this.state.activeTabclassName:this.state.inactiveTabclassName}
          id="pie"
          onClick={(e)=>{this.updateTabClass(e,'pie')}}
          >Pie Chart</button>
      </li>
      <li className="nav-item custom-item">
        <button style={{width:'100%'}} className={this.state.activeTab==='bar'?this.state.activeTabclassName:this.state.inactiveTabclassName}
        id="bar"
        onClick={(e)=>{this.updateTabClass(e,'bar')}}
        >Bar Plot</button>
      </li>
      </ul>
      <div style={{marginTop:'10px'}}>
        {el}
      </div>
      </div>
    )
  }
}