import React, { Component } from 'react';

const styles = {
  button: {
    marginRight: '1rem'
  }
};

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {}
    };
  }

  componentWillMount() {
    this.dataHandler();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.foo !== this.props.foo ) {
      this.dataHandler();
    }
  }

  dataHandler = () => {
    console.log('[Blog.js] dataHandler called ');
    let data = [];

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(data => this.setState({ data: data, isLoading: false }));
  };

  render() {
    const { data, isLoading } = this.state;
    console.log("[blog.js] render: data: ", data);
    return (
      <div className="blog">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Blog</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quibusdam, iusto accusantium ea aut voluptatem velit ut omnis nisi quos quo, natus possimus necessitatibus dolorem eos fugiat? Rem, eos, illo.
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button" style={styles.button}>Register and get started</a>
            <a className="btn btn-primary btn-lg" href="#" role="button" style={styles.button}>Our APIs</a>
            <a className="btn btn-primary btn-lg" href="#" role="button" style={styles.button}>Use cases</a>
          </div>
        </div>
        <div className="container">
          <div>
            <h2>Blogs</h2>
          </div>
          <div>
            <p>...from json placeholder API.</p>
            {!isLoading && (
              <div className="test">
                {data.map(post => {
                  return (
                    <div className="card" key={`${post.id}_card`}>
                      <div className="card-body">
                        <h4 key={`${post.id}_title`} className="card-title"> {post.title} </h4>
                        <div key={`${post.id}_body`} className="post-body card-text">
                          {post.body}
                        </div>
                      </div>
                    </div>
                    )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
