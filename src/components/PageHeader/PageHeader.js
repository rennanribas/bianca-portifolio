import useTranslation from 'hooks/useTranslation'
import React, { useState, useEffect } from 'react'

// reactstrap components
import { Container } from 'reactstrap'

export default function PageHeader() {
  const t = useTranslation()
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='page-header header-filter'>
      <div className='squares square1' />
      <div className='squares square2' />
      <div className='squares square3' />
      <div className='squares square4' />
      <div className='squares square5' />
      <div className='squares square6' />
      <div className='squares square7' />
      <Container>
        <div className='content-center brand'>
          <img
            alt='...'
            className='img-center img-fluid rounded-circle'
            src={require('assets/img/mazal-logo-5.png')}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
          <h1 className='h1-seo'>{t('personalTrainer')}</h1>
          <h3 className='d-none d-sm-block'>{t('specialistDescription')}</h3>
        </div>
      </Container>
    </div>
  )
}
