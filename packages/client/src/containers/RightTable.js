import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RightTable from '../components/RightTable';

const mapStateToProps = state => state;

export default withRouter( connect( mapStateToProps )( RightTable ) );