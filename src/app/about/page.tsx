import React from 'react'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div>
      <NavBar />


      {/* Header */}
      <div className='flex items-center justify-between px-30 mb-32'>
        <Image src="/assets/qcsp-icon-animation.gif" alt="logo" width={500} height={500} />
        <div className='w-1/2'>
          <h1 className='text-h1 font-bold mb-10'>Quantum Computing Society of the Philippines</h1>
          <h2 className='text-h2 font-bold italic text-secondary'>"Change Forward"</h2>
        </div>
      </div>


      {/* Main Content */}
      <div className='flex flex-col w-3/4 space-y-60 mx-auto text-justify'>


        {/* About */}
        <div className='flex flex-col space-y-5'>

          <h1 className='text-h1 text-secondary font-bold'>About</h1>

          <div className='space-y-10'>
            <p className='text-h3'>Known globally as OneQuantum Philippines, QCSP is the leading community
              of academics, industry leaders, and quantum enthusiasts. Together, we're building a vibrant quantum
              ecosystem in the Philippines, fostering collaboration and innovation. Moving the quantum frontier, one qubit at a time.</p>
            <button className='px-10 py-5 rounded-xl bg-tertiary font-bold cursor-pointer' type="button">See our Team..</button>
          </div>

        </div>


        {/* Connect Minds */}
        <div className='flex items-center justify-between space-x-32'>

          <Image src="/assets/about-icon1.svg" alt="logo" width={500} height={500} />

          <div className='w-1/2'>
            <h1 className='text-h3 font-bold mb-10 text-secondary'>Connect minds across research, industry, and curiosity.</h1>
            <div className='flex flex-col space-y-10'>
              <h2 className='text-h4 italic'>Researchers: Collaborate, share knowledge, and accelerate discoveries with QCSP. Push the boundaries of quantum science together.</h2>
              <h2 className='text-h4 italic'>Industry Leaders: Bridge the gap between research and real-world applications. Gain a competitive edge in quantum technologies.</h2>
              <h2 className='text-h4 italic'>Learners & Enthusiasts: Ignite your passion for quantum technologies. Access resources, connect with a community, and explore this transformative field.</h2>
            </div>
          </div>

        </div>


        {/* Vision and Mission */}
        <div>

          <div className='flex space-x-40'>
            <div className='space-y-5'>
              <h1 className='text-h1 text-accent font-bold'>Vision</h1>
              <p className='text-h4'>Our vision is to be a global force for good in Quantum Tech and support
                humanity’s transition into the quantum era in an inclusive way, enabling everyone to contribute,
                grow and make a positive impact.</p>
            </div>

            <div className='space-y-5'>
              <h1 className='text-h1 text-accent font-bold'>Mission</h1>
              <p className='text-h4'>Our mission it to accomplish this by providing a global community with local chapters, professional
                mentoring, career opportunities and quantum tech skills.</p>
            </div>
          </div>

        </div>


        {/* Partnership */}
        <div className='flex items-center justify-between space-x-32'>
          <div className='space-y-10'>
            <div className='space-y-5'>
              <h1 className='text-h1 text-secondary font-bold'>Partnership</h1>
              <h2 className='text-h4 italic font-bold'>Let's create something together!</h2>
              <p className='text-h4'>QCSP is open to strategic partnerships that drive innovation and mutual growth.
                We collaborate with tech companies, research institutions, and industry leaders to build impactful solutions.</p>
            </div>
            <button className='px-10 py-5 rounded-xl bg-tertiary font-bold cursor-pointer' type="button">Be a partner..</button>
          </div>

          <Image src={"/assets/about-icon2.svg"} alt="logo" width={500} height={500} className='mx-auto mt-20' />
        </div>



        {/* Join Us and Contact Us */}
        <div className='flex flex-col items-center justify-center space-y-10'>
          <h1 className='text-h1 font-bold text-accent'>Check our social and Contact us!</h1>
          <button className='text-black px-10 py-5 rounded-xl bg-amber-50 font-bold cursor-pointer' type="button">Contact us</button>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default about