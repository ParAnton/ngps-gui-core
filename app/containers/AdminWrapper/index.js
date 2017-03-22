import React from 'react';

class AdminWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h2>Admin Wrapper (ngps-gui-core)</h2>
        {this.props.children || 'Welcome to your Admin route'}
      </div>
    );
  }
}

AdminWrapper.propTypes = {
  children: React.PropTypes.object,
};

export default AdminWrapper;
