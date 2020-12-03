import '../dist/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from '../src'

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      count: 0,
      readOnly: false,
      editorState: BraftEditor.createEditorState(null)
    }

  }

  handleChange = (editorState) => {
    console.log('change')
    this.setState({ editorState })
  }

  logHTML = () => {
    console.log(this.state.editorState.toHTML())
  }

  logRAW = () => {
    console.log(this.state.editorState.toRAW())
  }

  render() {

    const { readOnly, editorState } = this.state

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))
