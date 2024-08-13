import React, { useRef, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default function JavaScript() {
  const iframeRef = useRef(null)
  const iframeDivRef = useRef(null)

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
        <Container>
          <Row className='justify-content-between align-items-top'>
            <Col className='mb-5 mb-lg-0' lg='5'>
              <div className='title'>
                <h1>Quem eu sou</h1>
              </div>
              <h3 className='text-white font-weight-light mb-1'>
                Educadora física
              </h3>
              <p className='text-white mt-1'>
                Formada em 2014, pela Universidade de Mogi das Cruzes, conto com
                a experiência de mais de 10 anos de prática física voltada ao
                condicionamento físico principalmente através do treinamento
                resistido com pesos e funcional.
              </p>

              <h3 className='text-white font-weight-light mb-1 mt-4'>
                Especialista em Treinamento para Grupos Especiais
              </h3>
              <p className='text-white mt-1'>
                Pós graduada em Medicina do Esporte da Atividade Física, conto
                também com a experiência prática de trabalhar com grupos
                especiais, ajudando a manter ou melhorar o condicionamento que
                busca uma melhora da qualidade de vida em grupos especiais.
              </p>
            </Col>
            <Col lg='6'>
              <div
                ref={iframeDivRef}
                className='embed-responsive iframe embed-responsive-1by1'
                style={{ height: '0px' }}
              >
                <iframe
                  ref={iframeRef}
                  src='https://www.instagram.com/p/C-WDISAhAzd/embed'
                  title='InstagramPost'
                  className='embed-responsive-item'
                  style={{
                    height: '0px',
                  }}
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
