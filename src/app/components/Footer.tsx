import Image from 'next/image'
import React from 'react'

const socials = [
  {
    name: 'Facebook',
    href: '',
    src: '/assets/socials/fb.svg',
  },

  {
    name: 'Instagram',
    href: '',
    src: '/assets/socials/ig.svg',
  },
  {
    name: 'Twitter',
    href: '',
    src: '/assets/socials/x-twitter.svg',
  },

  {
    name: 'YouTube',
    href: '',
    src: '/assets/socials/yt.svg',
  }
]

const footerLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Contacs',
    href: '/contacts',
  },
  {
    name: 'Blogs',
    href: '/blogs',
  },
  {
    name: 'Workshops',
    href: '/workshops',
  },
]

const Footer = () => {
  return (
    <div className='flex justify-center items-center space-x-50 p-20 max-sm:flex-col bg-black'>

      <div className='w-4/12 space-y-20'>

        <div>
          <Image src={'/assets/QCSP.svg'} alt='logo' width={500} height={100} />
          <p>A chapter of the global OneQuantum organization. A non-profit community about quantum technology.</p>
        </div>

        <div className='space-y-3'>
          <div className='flex space-x-10'>
            {socials.map((social) => (
              <a key={social.name} href={social.href} target='_blank' rel='noopener noreferrer'>
                <Image src={social.src} alt={social.name} width={30} height={30} />
              </a>
            ))}
          </div>
          <p>@ 2025 QCSP PH. All rights reserved.</p>
        </div>

      </div>

      <div className='space-y-3'>
        <h1 className='text-h4 font-bold'>Navigations</h1>
        <div className='flex flex-col space-y-3'>
          {footerLinks.map((link) => (
            <a key={link.name} href={link.href} className="w-fit border-b border-transparent hover:border-yellow-400 hover:text-yellow-400 duration-300">
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div className='space-y-3'>
      <h1 className='text-h4 font-bold'>Contact us</h1>
        <div className='flex flex-col space-y-3'>
          <p>Manila City, Philippines</p>
          <p>(63) 0908123453</p>
          <p>contactus@qcsp.com.ph</p>
        </div>
      </div>
    </div>
  )
}

export default Footer