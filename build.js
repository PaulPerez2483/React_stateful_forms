const {Component} = React;
const {render} = ReactDOM;
const {Link, Route, Redirect, HashRouter, Switch} = ReactRouterDOM;
const root = document.getElementById('root');

const Nav = () => {
    return(
        <nav>
            <Link to="/notes">Notes</Link>
            <Link to="/archived">archived</Link>
            <Link to="/create">Create</Link>
        </nav>
    )
}



class App extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            loading: true    
        }
    }
    render(){
        return(
            <HashRouter>
                <Route render={(props) => <Nav path={props} /> } />
                <main>
                    <Route path="/notes" />
                    <Route path="/archived" />
                    <Route path="create" />
                </main>
            </HashRouter>
        )
    }
}

render(<App/>, root);