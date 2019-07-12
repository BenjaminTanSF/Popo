import React from 'react';
import { connect } from 'react-redux';
import { index } from '../../actions/contacts_actions';
import ContactsIndex from './contacts_index';

const mapStateToProps = state => ({
  contacts: Object.values(state.entities.contacts),
  loading: state.ui.loading.loading
});

const mapDispatchToProps = dispatch => ({
  index: () => dispatch(index()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsIndex);
