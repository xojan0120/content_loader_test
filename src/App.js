import React from 'react';
import ContentLoader from 'react-content-loader';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={{width:500, height:500}}>
        <ContentLoader>
          <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
          <rect x="25" y="35" rx="5" ry="5" width="220" height="10" />
          <rect x="25" y="55" rx="5" ry="5" width="220" height="10" />
          <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
        </ContentLoader>
      </div>
    );
  }
}

export default App;
