import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import ChooseButton from '../components/ChooseButton'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
    filterText: ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick1: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChooseButton)
