import React, { Component } from 'react';
import styles from '../static/css/home.module.css'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
      <h1> Welcome to Carlo's Site</h1>
      <div className={styles.body}>
        <div className={styles.projects}>
          <h1>Software Projects</h1>
          <div className={styles.tile}>
            <a href='http://slidegraph.net.s3-website-us-east-1.amazonaws.com'>
              SlideGraph: A Powerpoint Sharing Platform
            </a>
          </div>
          <div className={styles.tile}>
            <a href='/notyetlinked'>
              Hand-written Digit Classification Pipeline
            </a>
          </div>
          <div className={styles.tile}>
            <a href='notyetlinked'>
              Youtube Playlist and Video Player
            </a>
          </div>
        </div>
        <div className={styles.papers}>
          <h1>Research Papers</h1>
          <div className={styles.tile}>
            <a href='https://github.com/carloruiz/mysite/blob/master/papers/Deep_Learning_Final_Report.pdf'>
              Deep Relevance Matching for Multi-Hop Question Answering
            </a>
          </div>
          <div className={styles.tile}>
            <a href='https://github.com/carloruiz/mysite/blob/master/papers/Computer_Vision_Final_Report.pdf'>
              Feature Blending with Variational Autoencoders and
              Generative Adversarial Networks
            </a>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Home;
