import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
          <div className='container'>
              <div className='row copyright text-center align-items-center'>
                  <div className='col-md-6 col-lg-4 text-md-left'>                      
                      <a href='#' className='mr-2'>
                        <img src='image\apple-app-store-inverted.svg' className='img-fluid'></img>
                      </a>
                      <a href='#'>
                        <img src='image\google-play-inverted.svg' className='img-fluid'></img>
                      </a>
                  </div>
                  <div  className='col-md-6 col-lg-4 mt-md-0 mt-3'>
                    <p className='mb-0'>© 2021 Hone Carbon Pty. Ltd. ABN: 648 397 620.</p>
                  </div>
                  <div className='col-md-12 col-lg-4 text-lg-right mt-lg-0 mt-3'>                      
                      <a href='#' className='mr-3'>Terms</a>
                      <a href='#' className='mr-3'>Privacy</a>
                      <a href='#' className='mr-3'>Contact Us</a>
                  </div>
              </div>
          </div>
      </footer>
    )
  }
}
