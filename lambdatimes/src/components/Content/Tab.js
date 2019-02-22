import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  constructor(props) {
    super();
  }

  selectTab = () => {
    this.props.selectTabHandler(this.props.tab)
  }

  render() {
    return (
      <div
        className={this.props.tab === this.props.selectedTab ? 'tab active-tab' : 'tab'}
        onClick={this.selectTab}
      >
        {this.props.tab.toUpperCase()}
      </div>
    );
  }    
};

Tab.propTypes = {
  tabs: PropTypes.string
}

export default Tab;
