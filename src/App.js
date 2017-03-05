import React from 'react';
import HelloWorld from './HelloWorld';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Tom"/>
      <HelloWorld name="Bombadil"/>
    </div>
  );
};

export default App;