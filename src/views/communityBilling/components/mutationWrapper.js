// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { addToastWithTimeout } from '../../../actions/toasts';

type Props = {
  onMutationEnd: Function,
  mutation: ?Function,
  variables: any,
  dispatch: Function,
  render: Function,
};

type State = {
  isLoading: boolean,
};

class MutationWrapper extends React.Component<Props, State> {
  initialState = { isLoading: false };
  state = this.initialState;

  init = () => {
    if (!this.props.mutation) return;
    this.setState({ isLoading: true });
    return this.mutate();
  };

  terminate = () => {
    this.props.onMutationEnd();
    return this.setState(this.initialState);
  };

  mutate = () => {
    if (!this.props.mutation) return;
    return this.props
      .mutation(this.props.variables.input)
      .then(() => {
        this.props.dispatch(addToastWithTimeout('success', 'Saved'));
        return this.terminate();
      })
      .catch(err => {
        this.props.dispatch(addToastWithTimeout('error', err.message));
        return this.terminate();
      });
  };

  render() {
    return <div onClick={this.init}>{this.props.render(this.state)}</div>;
  }
}

export default connect()(MutationWrapper);
