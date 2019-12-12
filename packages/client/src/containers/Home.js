import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Home from '../components/Home';

const mapStateToProps = state => state;

export default withRouter( connect( mapStateToProps )( Home ) );