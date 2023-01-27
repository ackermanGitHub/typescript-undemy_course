import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success">App Component</p>
              <p className="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, tempora esse dolores inventore vitae autem perferendis saepe ipsum quas similique, eaque commodi molestias assumenda iusto optio fugiat perspiciatis, natus repellat.</p>
              <button className="btn btn-success btn-sm">
                <i className="fa fa-book"/> Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
