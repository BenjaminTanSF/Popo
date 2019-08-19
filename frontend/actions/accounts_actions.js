import * as APIUtil from '../util/accounts_api_util';

export const RECEIVE_ALL_ACCOUNTS = 'RECEIVE_ALL_ACCOUNTS';
export const RECEIVE_CURRENT_ACCOUNT = 'RECEIVE_CURRENT_ACCOUNT';
export const START_LOADING_ALL_ACCOUNTS = 'START_LOADING_ALL_ACCOUNTS';
export const START_LOADING_SINGLE_ACCOUNT = 'START_LOADING_SINGLE_ACCOUNT';
export const DESTROY_CURRENT_ACCOUNT = 'DESTROY_CURRENT_ACCOUNT';
export const RECEIVE_ACCOUNTS_ERRORS = 'RECEIVE_ACCOUNTS_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const startLoadingAllAccounts = () => ({
  type: START_LOADING_ALL_ACCOUNTS
});

export const startLoadingSingleAccount = () => ({
  type: START_LOADING_SINGLE_ACCOUNT
});

export const receiveAllAccounts = accounts => ({
  type: RECEIVE_ALL_ACCOUNTS,
  accounts
});

export const receiveCurrentAccount = currentAccount => ({
  type: RECEIVE_CURRENT_ACCOUNT,
  currentAccount
});

export const destroyCurrentAccount = currentAccount => ({
  type: DESTROY_CURRENT_ACCOUNT,
  currentAccount
});

export const receiveErrors = errors => ({
  type: RECEIVE_ACCOUNTS_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const index = () => dispatch => {
  dispatch(startLoadingAllAccounts());
  return APIUtil.index()
    .then(
      accounts => { dispatch(receiveAllAccounts(accounts)) },
      err => { dispatch(receiveErrors(err.responseJSON)) }
    )
};

export const create = account => dispatch => (
  APIUtil.create(account).then(
    account => (dispatch(receiveCurrentAccount(account))),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const show = id => dispatch => {
  dispatch(startLoadingSingleAccount())
  return APIUtil.show(id).then(
    account => (dispatch(receiveCurrentAccount(account))),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
};

export const update = (account, id) => dispatch => (
  APIUtil.update(account, id).then(
    account => (dispatch(receiveCurrentAccount(account))),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
);
// Front end - in constructor, do this.state = this.props.account => get this.state.id and pass it as 2nd arg

export const destroy = id => dispatch => (
  APIUtil.destroy(id).then(currentAccount => (dispatch(destroyCurrentAccount(currentAccount))))
);
