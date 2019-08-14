const API_URL = window.location.href;

class Dashboard extends React.Component {
  state = {
    question: []
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const url = `${API_URL}questions/`;
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
               <h5 className="card-title">User: {question.raised_by_user_uuid} Q: {question.question_context} A:{question["q_answer.answer_context"]}</h5>
            </div>
          </div>
        ))}
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
