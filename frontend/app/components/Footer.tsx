import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const aboutUs = [
        { name: 'Blog', href: '/blog' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Cyber Security Policy', href: '/security' },
    ];

    const account = [
        { name: 'Our Policies', href: '/policies' },
        { name: 'My Account', href: '/account' },
        { name: 'Create an Account', href: '/register' },
        { name: 'Membership Pass', href: '/membership' },
    ];

    const usefulLinks = [
        { name: 'Store Locations', href: '/locations' },
        { name: 'Business Partner', href: '/partner' },
        { name: 'EyeX Compatible App', href: '/app' },
        { name: 'Hearing Aids', href: '/hearing-aids' },
        { name: 'Exercise Your Rights', href: '/rights' },
        { name: 'Glossary', href: '/glossary' },
    ];

    const socialLinks = [
        { name: 'Facebook', href: '#', icon: <FaFacebookF size={20} /> },
        { name: 'LinkedIn', href: '#', icon: <FaLinkedinIn size={20} /> },
        { name: 'Twitter', href: '#', icon: <FaTwitter size={20} /> },
        { name: 'Instagram', href: '#', icon: <FaInstagram size={20} /> },
    ];

    return (
        <footer className="bg-[#F1F1FB] py-16 w-full">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-4 max-w-full lg:col-span-1">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/assets/icons/logo1.png"
                                alt="IndieEyes Logo"
                                width={250}
                                height={100}
                                className="h-16 w-auto"
                            />
                        </Link>
                        <p className="text-[#707070] text-sm leading-relaxed break-words">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries,
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            {socialLinks.map((social) => (
                                <Link 
                                    key={social.name} 
                                    href={social.href}
                                    className="text-white bg-[#6053FB]  transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-6053FB hover:bg-white hover:text-[#6053FB]"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                    {/* Links Section */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-3">
                        {/* About Us */}
                        <div className="md:ml-8 lg:ml-28">
                            <h3 className="text-[#332A9B] font-semibold text-xl mb-4">About Us</h3>
                            <ul className="space-y-2">
                                {aboutUs.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-[#707070] hover:text-[#6053FB] transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Account */}
                        <div className="md:ml-8 lg:ml-28">
                            <h3 className="text-[#332A9B] font-semibold text-xl mb-4">Account</h3>
                            <ul className="space-y-2">
                                {account.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-[#707070] hover:text-[#6053FB] transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Useful Links */}
                        <div className="md:ml-8 lg:ml-16">
                            <h3 className="text-[#332A9B] font-semibold text-xl mb-4">Useful Links</h3>
                            <ul className="space-y-2">
                                {usefulLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-[#707070] hover:text-[#6053FB] transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <Image
                                    src="/assets/icons/playstore.png"
                                    alt="Get it on Google Play"
                                    width={50}
                                    height={40}
                                    className="h-10 w-auto"
                                />
                                <Image
                                    src="/assets/icons/appstore.png"
                                    alt="Download on App Store"
                                    width={135}
                                    height={40}
                                    className="h-10 w-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
