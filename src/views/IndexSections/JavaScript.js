/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from 'react'

// reactstrap components
import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap'

const carouselItems = [
  {
    src: require('assets/img/post_1.png'),
    altText: 'Transforme Sua Saúde!',
    caption: '',
  },
  {
    src: require('assets/img/post_2.png'),
    altText: 'Corpo estético começa pelo core!',
    caption: '',
    url: 'https://www.instagram.com/p/C-WDISAhAzd/?img_index=1',
  },
]

export default function JavaScript() {
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
          <div className='title'>
            <h1>Quem eu sou</h1>
          </div>
          <Row className='justify-content-between align-items-top'>
            <Col className='mb-5 mb-lg-0' lg='5'>
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
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

function ImageCarousel() {
  const [imageUrl, setImageUrl] = useState(null)
  const [error, setError] = useState(null)
  const postId = 'C84VoJVOLXl' // Replace with the desired post ID

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await fetch(`/fetchImage?postId=${postId}`)
        const data = await response.json()
        setImageUrl(data.imageUrl)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchImageUrl()
  }, [postId]) // Re-fetch on post ID change

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!imageUrl) {
    return <div>Loading...</div>
  }

  return (
    <UncontrolledCarousel
      items={[
        {
          src: imageUrl, // Dynamically set image URL
          altText: 'Instagram Post',
          caption: '',
        },
      ]}
      indicators={false}
      autoPlay={false}
    />
  )
}
