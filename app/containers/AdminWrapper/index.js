import React from 'react';

class AdminWrapper extends React.component {
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
  children: React.propTypes.array,
};

export default AdminWrapper;
