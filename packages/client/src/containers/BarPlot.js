import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BarPlot from '../components/BarPlot';


const mapStateToProps = state => state;

export default withRouter( connect( mapStateToProps )( BarPlot ) );