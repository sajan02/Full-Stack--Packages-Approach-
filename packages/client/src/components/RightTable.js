import React, { Component } from 'react';
import CustomizeLoader from './Loader';
import CustomizedCard from './CustomizedCard';
import { getAnalysiedMoviesThunk } from '../action/creator';

export default class RightTable extends Component {
  
    constructor(props) {
      super(props)

      this.state = {
        activeTab : 'best',
        activeTabclassName : 'nav-link custom-active',
        inactiveTabclassName : 'nav-link custom-inactive'
      }
    }

    componentDidMount(){
      this.props.dispatch(getAnalysiedMoviesThunk(`?query=${this.state.activeTab}`))
    }

    updateTabClass(e,val){
      e.preventDefault();
      this.setState({
        activeTab : val
      },()=>{
        this.props.dispatch(getAnalysiedMoviesThunk(`?query=${this.state.activeTab}`))
      })
    }

    tabBars(){
      return(
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item custom-item">
            <a className={this.state.activeTab==='best'?this.state.activeTabclassName:this.state.inactiveTabclassName}
              id="best"
              href="/"
              onClick={(e)=>{this.updateTabClass(e,'best')}}
              >Best</a>
          </li>
          <li className="nav-item custom-item">
            <a className={this.state.activeTab==='average'?this.state.activeTabclassName:this.state.inactiveTabclassName}
            id="average"
            href="/"
            onClick={(e)=>{this.updateTabClass(e,'average')}}
            >Average</a>
          </li>
          <li className="nav-item custom-item">
            <a className={this.state.activeTab==='worst'?this.state.activeTabclassName:this.state.inactiveTabclassName}
            id="worst"
            href="/"
            onClick={(e)=>{this.updateTabClass(e,'worst')}}
            >Worst</a>
          </li>
        </ul>
      )
    }

  render() {
    
    let resp;
    switch(this.props.analysiedMovieList.isLoading){
      case 'false':
        resp = (<CustomizeLoader/>);
        break;
      case 4:
        resp = (<CustomizeLoader/>);
        break;
      case 5:
        resp = (
          <div className="overFlow">
          {this.props.analysiedMovieList.movies.response.map(data=>{
            return (
              <CustomizedCard data={data} />
            )
          })}
        </div>
        )
        break;
      case 6:
        resp = (
        <div class="card">
          <div class="card-header">
            Sorry something went wrong!
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>I'm not going to whine or get depressed. Who's going to feel sorry for me? Nobody.</p>
              <footer class="blockquote-footer">Author <cite title="Source Title">Luther</cite></footer>
            </blockquote>
          </div>
        </div>
        );
        break;
        default:
          resp = null;
    }
    return (
      <div className="left-table" style={{textAlign:"center"}}>
        {this.tabBars()}
        {resp}
      </div>
    )
  }
}
