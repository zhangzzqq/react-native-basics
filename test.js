// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="UTF-8"/>
//     <title>菜鸟教程 React 实例</title>
//     <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
//     <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
//     <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
// </head>
// <body>
//
// <div id="example"></div>
// <script type="text/babel">
//
//     class WebSite extends React.Component {
//     constructor() {
//     super();
//
//     this.state = {
//     name: '菜鸟教程',
//     site: 'https://www.runoob.com'
// }
// }
//     render() {
//     return (
//     <div>
//     <Name name={this.state.name} />
//     <Link site={this.state.site} />
//     </div>
//     );
// }
// }
//
//
//     class Name extends React.Component {
//     render() {
//     return (
//     <h1>{this.props.name}</h1>
//     );
// }
// }
//
//     class Link extends React.Component {
//     render() {
//     return (
//     <a href={this.props.site}>
//     {this.props.site}
//     </a>
//     );
// }
// }
//
//     ReactDOM.render(
//     <WebSite/>,
//     document.getElementById('example')
//     );
// </script>
//
// </body>
// </html>;
