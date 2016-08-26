/* autogenerated by gulpfile.js */
exports.content = "'use strict';\nvar React = require('react');\nvar ReactDOM = require('react-dom');\nvar BS = require('react-bootstrap');\nvar Header = require('./Header');\nvar Multiselect = require('../../lib/index.js');\nvar fileContent = require('./AppContent').content;\n\nvar App = React.createClass({\n\tgetInitialState: function () {\n\t\tvar large = [];\n\t\tfor (var i = 0; i < 100; i++) {\n\t\t\tlarge.push({value: 'Item ' + i});\n\t\t}\n\t\treturn {\n\t\t\tgroups: [\n\t\t\t\t{label:'Group One',children:[{value:'1-One'},{value:'1-Two'},{value:'1-Three'},{value:'1-Four',label:'Four Label'}]},\n\t\t\t\t{label:'Group Two',children:[{value:'2-One'},{value:'2-Two'},{value:'2-Three'},{value:'2-Four',label:'Four Label'}]},\n\t\t\t\t{label:'Group Three',children:[{value:'3-One'},{value:'3-Two'},{value:'3-Three'},{value:'3-Four',label:'Four Label'}]}\n\t\t\t],\n\t\t\tlarge: large,\n\t\t\tlist: [{value:'One',selected:true},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}]\n\t\t};\n\t},\n\trender: function () {\n\t\treturn (\n\t\t\t<BS.Grid>\n\t\t\t\t<Header />\n\t\t\t\t<BS.Row>\n\t\t\t\t\t<BS.Col md={3}>\n\t\t\t\t\t\t<h2>Demo:</h2>\n\t\t\t\t\t\t<h4>no optgroups:</h4>\n\t\t\t\t\t\t<Multiselect data={this.state.list} multiple />\n\t\t\t\t\t\t<h4>with optgroups:</h4>\n\t\t\t\t\t\t<Multiselect data={this.state.groups} multiple />\n\t\t\t\t\t\t<h4>single select:</h4>\n\t\t\t\t\t\t<Multiselect data={this.state.groups} />\n\t\t\t\t\t\t<h4>large list (maxHeight/buttonText):</h4>\n\t\t\t\t\t\t<Multiselect data={this.state.large} multiple\n\t\t\t\t\t\t\tmaxHeight={200}\n\t\t\t\t\t\t\tbuttonText={function(options, select) {\n\t\t\t\t\t\t\t\treturn 'Long List / Custom Title!';\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<h4>buttonClass:</h4>\n\t\t\t\t\t\t<Multiselect buttonClass=\"btn btn-danger\" data={this.state.list} multiple />\n\t\t\t\t\t</BS.Col>\n\t\t\t\t\t<BS.Col md={9}>\n\t\t\t\t\t\t<h2>Demo Source Code:</h2>\n\t\t\t\t\t\t<textarea className=\"form-control\" style={{width:'100%',height:'500px'}} readOnly value={fileContent} />\n\t\t\t\t\t</BS.Col>\n\t\t\t\t</BS.Row>\n\t\t\t</BS.Grid>\n\t\t);\n\t}\n});\n\n// init our demo app\nReactDOM.render(<App />, document.getElementById('app'));\n";