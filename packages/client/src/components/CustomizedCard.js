import React, { Component } from 'react'

export class CustomizedCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      RatingClass : {
        'best' : '#007bff',
        'average' : 'rgba(0,123,255,.5)',
        'worst' : 'rgba(0,123,255,.25)'
      }
    }
  }
  
  render() {
    let {Title,Rating,Genre,TotalVotes,Budget,Runtime,ExpertCall} = this.props.data;
    let genreBadges = Genre?Genre.map(data=>{
      if(data!=='')
      {return (
        <span class="badge badge-pill badge-primary">{data}</span>
      )}
    }):''
    return (
        <div class="card" style={{marginBottom:'10px'}}>
        <div class="card-header" style={{color:'#514'}}>
          {Title}
          <span className="left" style={{color:'white',backgroundColor : `${this.state.RatingClass[ExpertCall]}`}}>{Rating}</span>
        </div>
        <div class="card-body" style={{padding: '5px'}}>
          <h6>Genre :{genreBadges}</h6>
          <h6>TotalVotes: <span className="value-badge">{TotalVotes}</span></h6>
          <h6>Runtime <i className="fa fa-lg fa-history"/>:<span className="value-badge">{Runtime}</span></h6>
          <h6>Budget <i className="fa fa-lg fa-money"/>:<span className="value-badge">{Budget}</span></h6>
        </div>
      </div>
    )
  }
}

export default CustomizedCard
