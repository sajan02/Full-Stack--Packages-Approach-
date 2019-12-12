import React ,{ Component} from 'react'
var CanvasJSReact = require('../js/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class CanvasChart extends Component {

	constructor(props) {
	  super(props)
	
	  this.state = {
         data : [],
         type : 'bar'
	  }
    }
    
    componentDidMount(){
        this.setState({
            data : this.props.data,
            type: this.props.type,
            titleText : this.props.titleText
        })
    }
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: this.state.titleText
			},
			data: [{
				type: this.state.type,
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: this.state.data
			}]
		}
		return (
			<div style={{textAlign:'center'}}>
            {this.state.data.length>0?
            <CanvasJSChart options = {options} />:
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
            }
			</div>
			);
	}
}

export default CanvasChart;