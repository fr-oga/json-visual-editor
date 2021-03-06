import React    from 'react';
import ReactDOM from 'react-dom';

import TextArea       from './TextArea';
import VisualizedData from './VisualizedData';
import AdArea         from './AdArea';

export default class Page extends React.Component {
	render() {
		return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
		        <h1 className="mdl-layout-title">JSON Visual Editor</h1>
          </div>
        </header>
        <main className="mdl-layout__content">
          <div className="mdl-grid">
            <section className="json-text mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
              <TextArea data={this.props.data} updateData={this.props.updateData} />
            </section>
            <section className="visualized-data mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet">
              <VisualizedData data={this.props.data} />
            </section>
          </div>
        </main>
        <footer>
          <div>
            <span><a href="https://github.com/ogaoga/json-visual-editor">Source code on GitHub</a></span>
            <span> | </span>
            <span><a href="http://qiita.com/ogaoga/items/1dae5586601e6900c3f1">Development guide on Qiita</a></span>
          </div>
          <div>
            <span>Copyright &copy; 2016 ogaoga.org</span>
          </div>
        </footer>
      </div>
		);
	}
}
