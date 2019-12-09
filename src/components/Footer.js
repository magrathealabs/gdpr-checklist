import React from 'react'

import ProductHuntIcon from 'react-icons/lib/fa/product-hunt'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import Styled  from 'react-emotion'
import Img from 'gatsby-image'

const Makers = Styled('div')`
  display: flex;
  justify-content: space-around
  @media (max-width: 768px) {
    flex-direction: column
  }
`

const Container = Styled('div')`
  max-width: 1200px;
  margin: 0 auto;
`

const Maker = ({ name, img, bio, twitter, linkedin, producthunt }) => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
    <h2 style={{ color: 'white', textTransform: 'none', textAlign: 'center' }}>{name}</h2>
    { img !== undefined ? <Img resolutions={img.resolutions} style={{ maxWidth: '100px', borderRadius: '50px', margin: '0 auto' }} /> : '' }
    <p style={{ color: 'white', marginTop: '10px', marginBottom: '10px', textAlign: 'center', lineHeight: '1.5em' }}>{bio}</p>
    <div className='socials' style={{ display: 'flex' }}>
      {twitter !== undefined ? <a href={twitter} target='_blank'>
        <TwitterIcon id='ph' color='#FFF' size={20} />
      </a> : ''}
      <a href={linkedin} target='_blank'>
        <LinkedinIcon id='ph' color='#FFF' size={20} />
      </a>
      <a href={producthunt} target='_blank'>
        <ProductHuntIcon id='ph' color='#FFF' size={20} />
      </a>
    </div>
  </div>
)

const Footer = props => (
  <footer id='footer'>
    <p className='description' style={{ fontSize: '1em' }}>
      <a href='https://www.iubenda.com/privacy-policy/52432713'>Privacy Policy</a> | <a href='https://gdpr-checklist.gdprform.io'>Exercise your rights</a>
    </p>

    <div className='gradient'>
      <h5>Sobre LGPD Checklist</h5>
      <div className='subtitle'>LGPD Checklist foi feita por um time de Joinville, Santa Catarina, com propósito de facilitar a compreensão da LGPD.
      Esse projeto é inspirado em <a href='https://cto-security-checklist.sqreen.io/'>The SaaS CTO Security Checklist</a> criado por <a href='https://www.sqreen.io'>Sqreen.io</a>.
      Assim como uma adaptação e tradução da <a href='https://gdpr-checklist-checklist.io/'>The GDPR Checklist</a> criada por <a href='https://www.privacyradius.com'>Privacy Radius</a>
      </div>

      <Makers>
        <Maker
          key='lauro'
          name='Lauro Gripa Neto'
          img={props.lauro}
          bio={[
            'Engenheiro de Software na ',
            <a key='magrathealabs' href='https://www.magrathealabs.com' target='_blank'>Magrathea</a>,
          ]}
          linkedin='https://www.linkedin.com/in/laurogripa'
          twitter='https://twitter.com/laurogripa'
        />
      </Makers>
    </div>
  </footer>
)

export default Footer
