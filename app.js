class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ newTask: event.target.value });
    }

    handleAddTask = () => {
        this.setState((state) => ({
            tasks: [...state.tasks, state.newTask],
            newTask: ''
        }));
    }

    render() {
        return (
            <div>
                <h1>Список задач</h1>
                <input
                    type="text"
                    value={this.state.newTask}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleAddTask}>Добавить задачу</button>
                <ul>
                    {this.state.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));