import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='success' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-2 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{ color: 'white' }}>Get connected with us on various social networks</span>
        </div>

        <div>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f"/>
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-3 '>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 ' style={{ color: 'white' }}>
                <MDBIcon icon="gem" className="me-3" />
                DietFit
              </h6>
              <p style={{ color: 'white' }}>
               Plan your meals, Track your food, Maintain your diet and Stay Healthy!.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white' }}>Services</h6>
              <p style={{ color: 'white' }}>
                <a href='/#' className='text-reset'>
                  Doctor consults
                </a>
              </p>
              <p style={{ color: 'white' }}>
                <a href='/#' className='text-reset'>
                  Diet planner
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white' }}>Useful links</h6>
              <p style={{ color: 'white' }}>
                <a href='/#' className='text-reset'>
                  Health and Food
                </a>
              </p>
              <p style={{ color: 'white' }}>
                <a href='/#' className='text-reset'>
                  Healthy Diet
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-2' style={{ color: 'white' }}>Contact</h6>
              <p style={{ color: 'white' }}>
                <MDBIcon icon="home" className="me-2" />
                 California,US
              </p>
              <p style={{ color: 'white' }}>
                <MDBIcon icon="envelope" className="me-3" />
                dietfit@official.in
              </p>
              <p style={{ color: 'white' }}>
                <MDBIcon icon="phone" className="me-3" /> +01 (123)-475-678
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',color: 'white' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/' style={{ color: 'white' }}>
         DietFit.com
        </a>
      </div>
    </MDBFooter>
  );
}