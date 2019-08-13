const API_URL = window.location.href;
import Button from 'react-bootstrap/Button';
class Dashboard extends React.Component {
  state = {
    question: []
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const url = `${API_URL}question/`;
    axios.get(url).then(response => response.data.data)
    .then((data) => {
      this.setState({ question: data })
     })
  }
  render() {
    return (
       <div className="container">
        <div className="col-xs-8">
        <h1>List of Question</h1>
        {this.state.question.map((question) => (
          <div className="card">
           <div className="card-body">
               <h5 className="card-title">User: {question.user_id} Q: {question.content}</h5>
            </div>
          </div>
        ))}
        <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
        </div>
        </div>
       </div>
    )
  }
}

const element = <Dashboard />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
