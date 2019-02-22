import React from 'react';

import TopBar from '../TopBar';
import Header from '../Header';
import Content from '../Content/Content';

const HomePage = () => {
  return (
    <div className="Homepage">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
}

export default HomePage;
