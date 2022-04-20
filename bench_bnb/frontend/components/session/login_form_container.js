import { connect } from "react-redux";
import { login, receiveErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'login'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (formUser) => dispatch(login(formUser)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);