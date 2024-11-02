import React from 'react'

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from 'reactstrap'
import { useTranslation } from 'react-i18next'

export default function Download() {
  const t = useTranslation()

  return (
    <div
      className='section section-download'
      data-background-color='black'
      id='download-section'
    >
      <img alt='...' className='path' src={require('assets/img/path1.png')} />
      <Container>
        <Row className='justify-content-md-center'>
          <Col className='text-center lg-8 md-12'>
            <h3 className='title'>{t('download')}</h3>
            <h5 className='description'>{t('downloadDescriptionMazal')}</h5>
          </Col>
          <Col className='text-center lg-8 md-12'>
            <Button
              className='btn-round mr-1'
              color='info'
              href='https://play.google.com/store/apps/details?id=com.mazalapp.mazal'
              role='button'
              size='lg'
              target='_blank'
            >
              <i className='fab fa-google-play' /> Google Play
            </Button>
            <Button
              className='btn-round'
              color='info'
              href='https://apps.apple.com/us/app/mazal-fitness/id6444257672'
              role='button'
              size='lg'
              target='_blank'
            >
              <i className='fab fa-apple' /> App Store
            </Button>
          </Col>
        </Row>
        <Row className='text-center mt-5'>
          <Col className='ml-auto mr-auto' lg='8' md='12'>
            <h2>{t('wantMore')}</h2>
            <h5 className='description'>{t('contactUsForMoreInformation')}</h5>
          </Col>
          <Col className='ml-auto mr-auto' lg='5' md='12'>
            <Button
              className='btn-round btn-block'
              color='default'
              outline
              href='#pablo'
              onClick={(e) => e.preventDefault()}
              size='lg'
            >
              {t('contactUs')}
            </Button>
          </Col>
        </Row>
        <Row className='justify-content-md-center sharing-area text-center'>
          <Col className='text-center lg-8 md-12'>
            <h3>{t('thankYouForSupportingUs')}</h3>
          </Col>
          <Col className='text-center lg-8 md-12'>
            <Button
              className='btn-neutral btn-icon btn-round btn-twitter'
              color='default'
              href='#pablo'
              id='tooltip86114138'
              onClick={(e) => e.preventDefault()}
              size='lg'
              target='_blank'
            >
              <i className='fab fa-twitter'></i>
            </Button>
            <UncontrolledTooltip delay={0} target='tooltip86114138'>
              Tweet!
            </UncontrolledTooltip>
            <Button
              className='btn-neutral btn-icon btn-round btn-facebook'
              color='default'
              href='#pablo'
              id='tooltip931452074'
              onClick={(e) => e.preventDefault()}
              size='lg'
              target='_blank'
            >
              <i className='fab fa-facebook-square'></i>
            </Button>
            <UncontrolledTooltip delay={0} target='tooltip931452074'>
              Share!
            </UncontrolledTooltip>
            <Button
              className='btn-neutral btn-icon btn-round btn-linkedin'
              color='default'
              href='#pablo'
              id='tooltip647117716'
              onClick={(e) => e.preventDefault()}
              size='lg'
              target='_blank'
            >
              <i className='fab fa-linkedin'></i>
            </Button>
            <UncontrolledTooltip delay={0} target='tooltip647117716'>
              Share!
            </UncontrolledTooltip>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
