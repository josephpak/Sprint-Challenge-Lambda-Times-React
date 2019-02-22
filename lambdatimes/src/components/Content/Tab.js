import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const TabWrapper = styled.div`
  ${props => 
    props.type === 'inactive' &&
    css`
      display: flex;
      justify-content: none;
      align-items: center;
      flex-direction: row;
      color: #fff;
      background-color: #333;
      margin: 0 5px;
      padding: 2px 10px;
      font-size: 12px;
      letter-spacing: 2px;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    `}
  
  ${props =>
    props.type === 'active' &&
    css`
      background-color: #fff;
      color: #333;
      border: 2px solid #333;
    `}
`

class Tab extends React.Component {
  constructor(props) {
    super();
  }

  selectTab = () => {
    this.props.selectTabHandler(this.props.tab)
  }

  render() {
    return (
      <TabWrapper type={this.props.tab === this.props.selectedTab ? 'active' : 'inactive'}
        onClick={this.selectTab}
      >
        {this.props.tab.toUpperCase()}
      </TabWrapper>
    );
  }    
};

Tab.propTypes = {
  tabs: PropTypes.string
}

export default Tab;
