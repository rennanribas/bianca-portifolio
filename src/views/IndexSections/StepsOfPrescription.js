import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import useTranslation from 'hooks/useTranslation'

export default function StepsOfPrescription() {
  const t = useTranslation()

  const steps = [
    {
      number: '01',
      title: t('step1Title'),
      description: t('step1Description'),
    },
    {
      number: '02',
      title: t('step2Title'),
      description: t('step2Description'),
    },
    {
      number: '03',
      title: t('step3Title'),
      description: t('step3Description'),
    },
    {
      number: '04',
      title: t('step4Title'),
      description: t('step4Description'),
    },
  ]

  return (
    <div className='profile-page mb-5'>
      <Container>
        <h2 className='title'>{t('stepsOfPrescriptionTitle')}</h2>
        {steps.map((step, index) => (
          <Row key={index}>
            <div className='col-md-6 col-lg-6'>
              <h1 className='profile-title text-left'>{step.title}</h1>
              <h5 className='text-on-back'>{step.number}</h5>
              <p className='profile-description'>{step.description}</p>
            </div>
          </Row>
        ))}
      </Container>
    </div>
  )
}
