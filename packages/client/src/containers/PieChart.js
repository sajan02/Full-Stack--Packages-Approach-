import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PieChart from '../components/PieChart';


const mapStateToProps = state => state;

export default withRouter( connect( mapStateToProps )( PieChart ) );