import React, { render } from './react';

const root = document.getElementById('root');

const jsx = (
  <div>
    <p>Hello React</p>
    <span>Hello Fiber</span>
  </div>
);

render(jsx, root);