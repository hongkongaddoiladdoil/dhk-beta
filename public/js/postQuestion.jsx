import React, {useCallback} from 'react';
import Dropzone from 'react-dropzone';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import feathersClient from './feathers';
import axios from 'axios';

class PostQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionToSubmit: '',
      userIdToSubmit: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const userIdToSubmit = this.state.userIdToSubmit;
    const questionToSubmit = this.state.questionToSubmit;
    feathersClient.service('questions')
      .create({ user_id: userIdToSubmit, content: questionToSubmit })
      .then((result) => {
        console.log(result);
        this.props.history.push('/submitted');
      })
      .catch((result) => {
        console.log(result);
        this.props.history.push('/login');
      });
    // this.props.history.goBack();
  }
  onDrop = (acceptedFiles, rejectedFiles) => {
    let files = acceptedFiles.map(async file => {
      let data = new FormData();
      data.append('image', file);

      let item = await axios
        .post('https://api.imgur.com/3/image/', data, {
          headers: {
            Authorization: 'Client-ID '+ process.env.IMGUR_CLIENT_ID,
          },
          mimeType: 'multipart/form-data'
        })
        .then(response => {
          console.log(response);
          console.log(response.data.data.link);
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
            filename: response.data.data.link
          });
        })
        .catch(err => {
          let rejects = rejectedFiles.map(async file => {
            let data = new FormData();
            await data.append('file', file);

            console.log('There was an error while attempting to add your files:', err);
            console.log('The files that were rejected were:\n', rejects.join('\n'));
          })
        });
      return item;
    });
    Promise.all(files)
      .then(completed => {
        let fileNames = completed.map(function(item) {
          return item['filename'];
        });
        var joined = this.state.questionToSubmit + '\r\n[img]' + fileNames +'[/img]\r\n';
        this.setState({questionToSubmit: joined });
      })
      .catch(err => {
        console.log('DROPZONE ERROR:', err);
      });
  };
  render() {
    const userIdToSubmit = this.state.userIdToSubmit;
    const questionToSubmit = this.state.questionToSubmit;
    const maxSize = 5242880;
    return (
      <div className="container">
        <div className="col-xs-8">
          <h1>Post Question</h1>
          <div className="text-center mt-5">
            <Dropzone
              onDrop={this.onDrop}
              accept="image/png, image/gif, image/jpg, image/jepg"
              minSize={0}
              maxSize={maxSize}
            >
              {({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles}) => {
                const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
                return (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {!isDragActive && 'Click here or drop a file to upload!'}
                    {isDragActive && !isDragReject && 'Drop it like it\'s hot!'}
                    {isDragReject && 'File type not accepted, sorry!'}
                    {isFileTooLarge && (
                      <div className="text-danger mt-2">
                        File is too large.
                      </div>
                    )}
                  </div>
                );}
              }
            </Dropzone>
          </div>
          <div>
            <Form onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Control type="text" placeholder="User ID" name="userIdToSubmit" value={userIdToSubmit} onChange={this.onChange}/>
                <Form.Label>Question</Form.Label>
                <Form.Control as="textarea" rows="3"
                  name="questionToSubmit"
                  value={questionToSubmit}
                  placeholder = "Question"
                  onChange={this.onChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PostQuestion);
