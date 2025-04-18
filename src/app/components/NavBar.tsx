import Image from 'next/image'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

const NavBar = () => {
    return (
        <div className='w-full flex justify-between items-center px-40'>
            <Image src="/assets/QCSP.svg" alt="Logo" width={400} height={300} />

            <div className='flex space-x-20'>
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="border-b border-transparent hover:border-yellow-400 duration-300 hover:text-yellow-400">
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default NavBar