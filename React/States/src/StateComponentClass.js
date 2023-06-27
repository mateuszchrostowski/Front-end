class StateComponentClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    updateTitle = () => {
        document.title = `Klikacz zliczył ${this.state.count} kliknięć`;
    }

    updateCount = () => {
        this.state.count = this.state.count + 1;
    }

    // To zastępuje hook'a useEffect()
    componentDidUpdate(){
       this.updateTitle();
    }

    componentDidMount(){
        this.updateTitle();
    }

    render() {
        return (
            <div>
                <h1> Prosty kliker </h1>
                <p> Kliknięto { this.state.count } razy </p>
                <button onClick={ this.updateCount() }>Inkrementuj</button>
            </div>
        )
    }
}