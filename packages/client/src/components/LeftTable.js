import React, { Component } from 'react'
import CustomizeLoader from './Loader';
import { getMoviesThunk } from '../action/creator';
import '../css/cutomeCheckbox.css';
import CustomizedCard from './CustomizedCard';


export default class LeftTable extends Component {
  
constructor(props) {
  super(props)

  this.state = {
     showFilters : false,
     showGenre : false,
     query : '',
     queryTags : [],
     sortAscending : false
    }
    this.updateQuery = this.updateQuery.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(getMoviesThunk(this.state.query))
  }

  changeShowHideButton(e){
    e.preventDefault();
    this.setState({
      showFilters :!this.state.showFilters
    })
  }

  genreDropDown(e){
    e.preventDefault();
    this.setState({
      showGenre : !this.state.showGenre
    })
  }

  changeFilterSectionStatus(e,status){
    e.preventDefault()
    if(status === 'apply'){
      let queryString = ''
      this.state.queryTags.map(data=>{
        queryString = `${queryString}&genre=${data}`
      })
      this.setState({
        showFilters : false,
        showGenre : false,
        query : queryString
      },()=>{
        this.props.dispatch(getMoviesThunk(`?${this.state.query}&sort=${this.state.sortAscending?-1:1}`))
      })
    }
    else{
      this.setState({
        showFilters : false,
        showGenre : false,
        query : '',
        queryTags : []
      },()=>{
        this.props.dispatch(getMoviesThunk(`?${this.state.query}`))
      })
    }
  }
  updateQuery(e,tag){
    e.preventDefault();
    let tags = this.state.queryTags;
    console.log(tags.indexOf(tag));
    
    if(tags.indexOf(tag)>=0){
      tags.splice(tags.indexOf(tag),1);
    }
    else if(tags.length == 3){
      tags.splice(0,1)
      tags.push(tag)
    }
    else{
      tags.push(tag)
    }
    this.setState({
      queryTags : tags
    },()=>{
      console.log(this.state.queryTags);
    })
  }

  sortData(e){
    e.preventDefault();
    this.setState({
      sortAscending : !this.state.sortAscending
    })
  }

  filterElements(){
    return (
      <div style={{display:'flex',justifyContent:'flex-start', flexDirection:'column'}}>
        <div class="club-button">
        <button class="btn btn-bluish dropdown-toggle" type="button" id="dropdownMenuButton" onClick={(e)=>{this.genreDropDown(e)}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          genre
        </button>
        <button class="btn btn-bluish" onClick={(e)=>{this.sortData(e)}}>
          Sort <span><i className={this.state.sortAscending ? 'fa fa-lg fa-angle-up' : 'fa fa-lg fa-angle-down'}/></span>
        </button>
        </div>
        <div style={this.state.showGenre?{backgroundColor: 'rgb(10,10,10,0.5)'}:{display:'none'}} >
          <label class="checkbox-container dropdown-item" >Biography
            <input type="checkbox" id="Biography"
              onClick={(e)=>{this.updateQuery(e,'Biography')}}
              checked={this.state.queryTags.includes('Biography')?true:false}/>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container dropdown-item">Drama
            <input type="checkbox" id="Drama"
              onClick={(e)=>{this.updateQuery(e,'Drama')}}
              checked={this.state.queryTags.includes('Drama')?true:false}/>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container dropdown-item">History
            <input type="checkbox" id="History"
              onClick={(e)=>{this.updateQuery(e,'History')}}
              checked={this.state.queryTags.includes('History')?true:false}/>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container dropdown-item">Adventure
            <input type="checkbox"
              onClick={(e)=>{this.updateQuery(e,'Adventure')}}
              checked={this.state.queryTags.includes('Adventure')?true:false}/>
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    )
  }

  getApplyClearbuttons(){
    return (
      <div style={{display:'flex',justifyContent:'flex-end'}}>
        <div className="apply-filter">
          <button
            className="btn"
            onClick={(e) => this.changeFilterSectionStatus(e,'apply')}
            data-set="apply-filters">Apply
          </button>
        </div>
        <div className="clear-filter">
          <button className="btn" onClick={(e) => this.changeFilterSectionStatus(e,'clear')}
                  data-set="clear-filters">
            Clear
          </button>
        </div>
      </div>
    )
  }
  render() {
    const showFiltersArrowIconClass = this.state.showFilters ? 'fa-angle-up' : 'fa-angle-down';
    let showHideFiltersButton =(
          <div className="show-hide-filter-button-wrap"
               data-set="filters-button-caption"
               style={{textAlign:"center"}}
               onClick={(e) => this.changeShowHideButton(e)}>
            <i className="fa fa-lg fa-filter"/>
            <span className="text">
            {this.state.showFilters ? 'Hide' : 'Show'} Filters
          </span>
            <i className={`fa fa-lg ${showFiltersArrowIconClass}`}/>
          </div>
        )
    
    let filterElements = (
          <div className="row" style={{marginTop:'10px'}} data-set="filter-elements">
             <div className="col-6">
             {this.filterElements()}
             </div>
            <div className="col-6">
             {this.getApplyClearbuttons()}
            </div>
          </div>
        );
    let resp;
    switch(this.props.movieList.isLoading){
      case 'false':
        resp = (<CustomizeLoader/>);
        break;
      case 1:
        resp = (<CustomizeLoader/>);
        break;
      case 2:
        resp = (
          <div className="overFlow">
          {this.props.movieList.movies.response.map(data=>{
            return (
              <CustomizedCard data={data} />
            )
          })}
        </div>
        )
        break;
      case 3:
        resp = (
        <div className="overFlow">
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
        </div>
        );
        break;
        default:
          resp = null;
    }
    
    return (
      <div className="left-table" style={{textAlign:"center"}}>
        {showHideFiltersButton}
        { this.state.showFilters ? filterElements:null }
        {resp}
      </div>
    )
  }
}
