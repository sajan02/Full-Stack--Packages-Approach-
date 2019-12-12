import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../components/App';

const mapStateToProps = state => state;

export default withRouter( connect( mapStateToProps )( App ) );