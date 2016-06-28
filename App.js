import React from 'react';
import MDModalGen from './src/MDModal.jsx';
import MDButton from 'mdbutton';
import 'normalize.css';

const Modal = MDModalGen(MDButton);

const App = () => (
  <div>
    <Modal>
      <h2>Test Modal</h2>
      <p>
        Just a simple modal demo.
        very basic setup. add
        whatever you want to modal
        body and style them yourself
      </p>
    </Modal>
  </div>
);

export default App;
