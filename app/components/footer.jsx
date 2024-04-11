"use client"
import Link from 'next/link';
import {useState} from 'react';
import Heading from './heading';
import Subheading from './subheading';
import Button from './button';
import '../assets/styles/components/footer.scss';

/**
 * This is the footer of the website. It will hold the company location/contact information,
 * as well as, the information about the copyright and accredation. When the website is on mobile
 * The footer changes structure and instead opens a popup for location/contact information.
 */
export default function Footer() {
    const [open, setOpen] = useState(false); // This keeps track of if the popup is open or not
    return (
        <section className='footer'>
            <div className='info'>
                <div className='locations'>
                    <Heading>Locations</Heading>
                    <div className='location'>
                        <Subheading>New York</Subheading>
                        <span>156 Franklin Street, New York, NY 10013</span>
                        <span>Phone: (212) 371-4646</span>
                        <span>Fax: (212) 371-1601</span>
                        <Link href="ny@urbanarchaeology.com">ny@urbanarchaeology.com</Link>
                    </div>
                    <div className='location'>
                        <b>Showroom Hours</b>
                        <span>Monday-Friday: 8:00 AM to 5:00 PM</span>
                        <span>Saturday and Sunday: Closed</span>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.939308536255!2d-74.01069595827086!3d40.7193525372826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e5d67c4c2b%3A0xecfd9b6a06dfc53!2sUrban%20Archaeology!5e0!3m2!1sen!2sus!4v1712259752936!5m2!1sen!2sus"
                            style={{border: 0, aspectRatio: 16 / 9, maxWidth: "500px"}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <div className='locations'>
                    <div className='location'>
                        <Subheading>Long Island City</Subheading>
                        <span>43-34 32nd Place, 2R Long Island City, NY 11101</span>
                        <span>Phone: (212) 413-4646</span>
                        <span>Fax: (212) 334-4659</span>
                        <Link href="gil@urbanarchaeology.com">gil@urbanarchaeology.com</Link>
                    </div>
                    <div className='divider' />
                    <div className='location'>
                        <Subheading>Boston and San Francisco</Subheading>
                        <span>Phone: (617) 737-4646</span>
                        <span>Fax: (617) 737 6699</span>
                        <Link href="mary@urbanarchaeology.com">mary@urbanarchaeology.com</Link>
                    </div>
                    <div className='location'>
                        <Subheading>Chicago</Subheading>
                        <span>Phone: (312) 371 2249</span>
                        <Link href="melissa@urbanarchaeology.com">melissa@urbanarchaeology.com</Link>
                    </div>
                    <div className='location'>
                        <Subheading>Southeast</Subheading>
                        <span>Phone: (917) 685-6113</span>
                        <Link href="adrienne@urbanarchaeology.com">adrienne@urbanarchaeology.com</Link>
                    </div>
                </div>
                <div className='links'>
                    <div className='navigation'>
                        <Heading>Navigation</Heading>
                        <Link href="/">Home</Link>
                        <Link href="/catalog">Catalog</Link>
                        <Link href="/salvage">Salvage</Link>
                        <Link href="/gallery">Gallery</Link>
                    </div>
                    <div className='socials'>
                        <Heading>Socials</Heading>
                        <div className='icons'>
                            <Link className='urban-icons' href="https://www.facebook.com/urbanarchaeologyltd">facebook_logo</Link>
                            <Link className='urban-icons' href="https://instagram.com/urbanarchaeologyltd">instagram_logo</Link>
                            <Link className='urban-icons' href="https://pinterest.com/urbanarchltd/">pinterest_logo</Link>
                            <Link className='urban-icons' href="https://www.linkedin.com/company/urban-archaeology/">linkedin_logo</Link>
                        </div>
                        <Button className='contact' role="primary" style="filled" onPress={() => setOpen(true)}>Contact Us</Button>
                    </div>
                </div>
            </div>
            <div className='credits'>
                <span className='copyright'>Copyright © 2012-2024 Urban Archaeology Ltd. All rights reserved.</span>
                <Link className='terms' href="/terms">Terms and conditions apply.</Link>
                <span className='accredation'>Designed and built by <Link href="https://github.com/ochakaru">Kalvin Garcia</Link></span>
            </div>
            <div className={['modal', open? "open" : ""].join(" ")}>
                <div className='scrim' onMouseDown={() => setOpen(false)} />
                <div className='popup'>
                    <Heading>Locations</Heading>
                    <div className='location'>
                        <Subheading>New York</Subheading>
                        <span>156 Franklin Street, New York, NY 10013</span>
                        <span>Phone: (212) 371-4646</span>
                        <span>Fax: (212) 371-1601</span>
                        <Link href="ny@urbanarchaeology.com">ny@urbanarchaeology.com</Link>
                    </div>
                    <div className='location'>
                        <b>Showroom Hours</b>
                        <span>Monday-Friday: 8:00 AM to 5:00 PM</span>
                        <span>Saturday and Sunday: Closed</span>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.939308536255!2d-74.01069595827086!3d40.7193525372826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e5d67c4c2b%3A0xecfd9b6a06dfc53!2sUrban%20Archaeology!5e0!3m2!1sen!2sus!4v1712259752936!5m2!1sen!2sus"
                            style={{border: 0, aspectRatio: 16 /9}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className='location'>
                        <Subheading>Long Island City</Subheading>
                        <span>43-34 32nd Place, 2R Long Island City, NY 11101</span>
                        <span>Phone: (212) 413-4646</span>
                        <span>Fax: (212) 334-4659</span>
                        <Link href="gil@urbanarchaeology.com">gil@urbanarchaeology.com</Link>
                    </div>
                    <div className='divider' />
                    <div className='location'>
                        <Subheading>Boston and San Francisco</Subheading>
                        <span>Phone: (617) 737-4646</span>
                        <span>Fax: (617) 737 6699</span>
                        <Link href="mary@urbanarchaeology.com">mary@urbanarchaeology.com</Link>
                    </div>
                    <div className='location'>
                        <Subheading>Chicago</Subheading>
                        <span>Phone: (312) 371 2249</span>
                        <Link href="melissa@urbanarchaeology.com">melissa@urbanarchaeology.com</Link>
                    </div>
                    <div className='location'>
                        <Subheading>Southeast</Subheading>
                        <span>Phone: (917) 685-6113</span>
                        <Link href="adrienne@urbanarchaeology.com">adrienne@urbanarchaeology.com</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}