import React, { Component } from 'react';
import styles from '../static/css/home.module.css'

class Home extends Component {
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.tile}>
          <a href='http://slidegraph.net.s3-website-us-east-1.amazonaws.com'>
            SlideGraph: a powerpoint sharing platform
          </a>
        </div>

        <div className={styles.tile}>
          <a href='/notyetlinked'>
            Hand-written digit classification pipeline
          </a>
        </div>

        <div className={styles.tile}>
          <a href='notyetlinked'>
            Youtube playlist and video player
          </a>
        </div>

      </div>
    )
  }
}

export default Home;
