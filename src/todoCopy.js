import React from "react";

export class AddBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      contentList: [
        {
          id: 1,
          content: "skr"
        }
      ]
    };
  }

  handleDelete(id) {
    let list = this.state.contentList;
    delete list[id - 1];
    this.setState({
      contentList: list
    });
  }
  clickbtn() {
    let item = this.todo.value;
    if (item) {
      let list = this.state.contentList;
      list.push({ id: list.length + 1, content: item });
      this.setState({
        contentList: list
      });
    }
    this.todo.value = "";
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3" style={{ marginTop: 10 }}>
            <div className="input-group">
              <input
                type="text"
                ref={ref => (this.todo = ref)}
                className="form-control"
                placeholder="What's your todo ?"
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => this.clickbtn()}
                >
                  Add
                </button>
              </span>
            </div>
            <ul className="list-group" style={{ marginTop: 5 }}>
              {this.state.contentList.map(data => (
                <li className="list-group-item" id={data.id}>
                  {data.content}
                  <button
                    className="btn btn-default"
                    style={{
                      position: "absolute",
                      right: "5px",
                      top: "3px"
                    }}
                    onClick={() => this.handleDelete(data.id)}
                  >
                    delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
