import useTranslation from 'hooks/useTranslation'
import React, { useRef, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  CardBody,
  CardHeader,
  Card,
  UncontrolledCarousel,
} from 'reactstrap'
import StepsOfPrescription from './StepsOfPrescription'

const carouselItems = [
  {
    src: require('assets/img/prints/login-white.png'),
    altText: 'Slide 1',
    caption: '',
  },
  {
    src: require('assets/img/prints/login-dark.png'),
    altText: 'Slide 2',
    caption: '',
  },
  {
    src: require('assets/img/prints/workout-creation.png'),
    altText: 'Slide 3',
    caption: '',
  },
  {
    src: require('assets/img/prints/workout-using.png'),
    altText: 'Slide 4',
    caption: '',
  },
  {
    src: require('assets/img/prints/profile.png'),
    altText: 'Slide 4',
    caption: '',
  },
]

export default function Resume() {
  const iframeRef = useRef(null)
  const iframeDivRef = useRef(null)
  const t = useTranslation()

  useEffect(() => {
    const handleResize = (event) => {
      if (event.origin === 'https://www.instagram.com') {
        const eventData = JSON.parse(event.data)
        if (
          eventData.details?.height &&
          iframeRef.current &&
          iframeDivRef.current
        ) {
          const height = eventData.details?.height
          iframeDivRef.current.style.height = `${height * 0.77}px`
          iframeRef.current.style.height = `${height * 0.77}px`
          setTimeout(() => {
            if (iframeDivRef.current && iframeDivRef.current.contentWindow) {
              iframeDivRef.current.contentWindow.scrollTo(0, 40)
            }
          }, 500)
        }
      }
    }

    window.addEventListener('message', handleResize)

    return () => {
      window.removeEventListener('message', handleResize)
    }
  }, [])

  return (
    <div className='section section-javascript' id='javascriptComponents'>
      <img alt='...' className='path' src={require('assets/img/path5.png')} />
      <img
        alt='...'
        className='path path1'
        src={require('assets/img/path5.png')}
      />
      <div className='section'>
        <Col className='ml-auto mr-auto' lg='4' md='6'>
          <Card className='card-coin card-plain'>
            <CardHeader>
              <div className='title'>
                <h1>{t('whoIAm')}</h1>
              </div>
            </CardHeader>
            <CardBody>
              <Container>
                <Row className='justify-content-between align-items-top'>
                  <Col className='mb-5 mb-lg-0' lg='5'>
                    <UncontrolledCarousel
                      items={carouselItems}
                      indicators={true}
                      autoPlay={true}
                    />
                    <h3 className='text-white font-weight-light mb-1 mt-4'>
                      {t('physicalEducationTeacher')}
                    </h3>
                    <p className='text-white mt-1'>
                      {t('physicalEducationDescription')}
                    </p>

                    <h3 className='text-white font-weight-light mb-1 mt-4'>
                      {t('specialistTitle')}
                    </h3>
                    <p className='text-white mt-1'>
                      {t('specialistFullDescription')}
                    </p>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
      </div>
      <StepsOfPrescription />
    </div>
  )
}
