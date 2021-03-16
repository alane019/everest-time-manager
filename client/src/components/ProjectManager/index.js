import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

class ProjectManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="container-fluid">
        <h3>Manage Projects</h3>
        <ProjectList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-project">Add a new project to your list.</label>
          <input
            id="new-project"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button className="">Add Project {this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: (this.state.text + " . . .   ("  +  (new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short' }).format()) + ")"),
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}

class ProjectList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<ProjectManager />, document.getElementById("root"));

export default ProjectManager;
