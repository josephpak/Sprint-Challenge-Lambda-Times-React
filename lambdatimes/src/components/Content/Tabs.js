import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`

const TopicsWrapper = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`

const Title = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Tabs = props => {
  return (
    <TabsWrapper>
      <TopicsWrapper>
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map((tab, index) => (
          <Tab
          key={index} 
          tab={tab}
          selectTabHandler={props.selectTabHandler}
          />
        ))}    
      </TopicsWrapper>
    </TabsWrapper>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;
