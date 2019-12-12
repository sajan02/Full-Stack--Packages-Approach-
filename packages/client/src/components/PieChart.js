import React ,{ Component} from 'react'
import { setDataToAnalyseThunk } from '../action/creator';
import CustomizeLoader from './Loader';
import CanvasChart from './CanvasChart';
 
class PieChart extends Component {

	constructor(props) {
	  super(props)
	
	  this.state = {
		 data : []
	  }
	}
	
	componentDidMount(){
		this.props.dispatch(setDataToAnalyseThunk(''));
	}

	render() {
		let resp;
    	switch(this.props.movieAnalysisDataReducer.isLoading){
    	  case false:
    	    resp = (<CustomizeLoader/>);
    	    break;
    	  case 7:
    	    resp = (<CustomizeLoader/>);
    	    break;
    	  case 8:
    	    resp = (
				<CanvasChart data={this.props.movieAnalysisDataReducer.movies.genreCount}
				type={'pie'}
				titleText={'Movie Analysis based on Genre'}/>
    	    )
    	    break;
    	  case 9:
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
			<div style={{textAlign:'center'}}>
			{resp}
			</div>
			);
	}
}

export default PieChart;