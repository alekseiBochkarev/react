# react
simple react example

Пример кода:

HTML (index.html):
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Пример React</title>
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel" src="app.js"></script>
</body>
</html>
```

JavaScript (app.js):
```javascript
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
```

Объяснение кода:

Компонент App: Это главный компонент приложения, который управляет состоянием списка задач и нового задания.
Состояние (state): Компонент имеет состояние с двумя свойствами: tasks (массив задач) и newTask (текущая задача, вводимая пользователем).
Обработчики событий: handleInputChange обновляет состояние newTask при вводе текста, а handleAddTask добавляет новую задачу в список задач.
Рендеринг: В методе render компонент отображает заголовок, поле ввода, кнопку и список задач.
