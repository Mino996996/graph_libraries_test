import React from 'react';
import Plot from 'react-plotly.js';

function App() {
  return (
    <div>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3, 4, 10], y: [2, 5, 3, 20, 30]},
        ]}
        layout={ {width: 520, height: 340, title: 'A Fancy Plot'} }
      />
    </div>
  );
}

export default App;
