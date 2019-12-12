import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LeftTable from '../components/LeftTable';


const mapStateToProps = state => state;

export default withRouter( connect( mapStateToProps )( LeftTable ) );