import { useLanguage } from 'contexts/LanguageContext'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledDropdown,
} from 'reactstrap'

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false)
  const [collapseOut, setCollapseOut] = React.useState('')
  const [color, setColor] = React.useState('navbar-transparent')
  const { language, changeLanguage } = useLanguage()
  React.useEffect(() => {
    window.addEventListener('scroll', changeColor)
    return function cleanup() {
      window.removeEventListener('scroll', changeColor)
    }
  }, [])
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor('bg-default')
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor('navbar-transparent')
    }
  }
  const toggleCollapse = () => {
    document.documentElement.classList.toggle('nav-open')
    setCollapseOpen(!collapseOpen)
  }
  const onCollapseExiting = () => {
    setCollapseOut('collapsing-out')
  }
  const onCollapseExited = () => {
    setCollapseOut('')
  }
  return (
    <Navbar className={'fixed-top ' + color} color-on-scroll='100' expand='lg'>
      <Container>
        <div className='navbar-translate'>
          <NavbarBrand to='/' tag={Link} id='navbar-brand'>
            <img
              alt='logo'
              src={require('assets/img/logo-white.png')}
              style={{ width: '50%' }}
            />
          </NavbarBrand>
          <UncontrolledTooltip placement='bottom' target='navbar-brand'>
            Coded by Rennan Ribas
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className='navbar-toggler navbar-toggler'
            onClick={toggleCollapse}
          >
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </button>
        </div>
        <Collapse
          className={'justify-content-end ' + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className='navbar-collapse-header'>
            <Row>
              <Col className='collapse-brand' xs='6'>
                <a href='#contact' onClick={(e) => e.preventDefault()}>
                  Contatos
                </a>
              </Col>
              <Col className='collapse-close text-right' xs='6'>
                <button
                  aria-expanded={collapseOpen}
                  className='navbar-toggler'
                  onClick={toggleCollapse}
                >
                  <i className='tim-icons icon-simple-remove' />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color='default'
                data-toggle='dropdown'
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className='tim-icons icon-world' />
                {language.toUpperCase()}
              </DropdownToggle>
              <DropdownMenu className='dropdown-with-icons'>
                <DropdownItem onClick={() => changeLanguage('en')}>
                  <p className='d-lg-none d-xl-none'>
                    <i className='flag-icon flag-icon-gb' /> English
                  </p>
                </DropdownItem>
                <DropdownItem onClick={() => changeLanguage('pt')}>
                  <p className='d-lg-none d-xl-none'>
                    <i className='flag-icon flag-icon-br' /> Português
                  </p>
                </DropdownItem>
                <DropdownItem onClick={() => changeLanguage('it')}>
                  <p className='d-lg-none d-xl-none'>
                    <i className='flag-icon flag-icon-it' /> Italiano
                  </p>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className='p-0'>
              <NavLink
                data-placement='bottom'
                href='https://www.facebook.com/share/8XWafFV7TixfF9x6/?mibextid=LQQJ4d'
                rel='noopener noreferrer'
                target='_blank'
                title='Siga no Facebook'
              >
                <i className='fab fa-facebook-square' />
                <p className='d-lg-none d-xl-none'>Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className='p-0'>
              <NavLink
                data-placement='bottom'
                href='https://www.instagram.com/personal.biancareis'
                rel='noopener noreferrer'
                target='_blank'
                title='Siga no Instagram'
              >
                <i className='fab fa-instagram' />
                <p className='d-lg-none d-xl-none'>Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem className='p-0'>
              <NavLink
                data-placement='bottom'
                href='https://wa.me/+5512981740654'
                rel='noopener noreferrer'
                target='_blank'
                title='Entre em contato'
              >
                <i className='fab fa-whatsapp' />
                <p className='d-lg-none d-xl-none'>WhatsApp</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}
