import React from 'react';
import { connect } from 'react-redux';
import { index } from '../../actions/accounts_actions';
import AccountsIndex from './accounts_index';

const mapStateToProps = state => ({
  accounts: Object.values(state.entities.accounts),
  loading: state.ui.loading.loading
});

const mapDispatchToProps = dispatch => ({
  index: () => dispatch(index()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsIndex);
