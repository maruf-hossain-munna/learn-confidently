import React from 'react';
import location from '../../../../Assests/Icons/location.png';
import email from '../../../../Assests/Icons/email.png';
import phone from '../../../../Assests/Icons/phone.png';
import facebook from '../../../../Assests/Icons/facebook.png';
import linkedin from '../../../../Assests/Icons/linkedin.png';
import github from '../../../../Assests/Icons/github.png';

const ContactWithMe = () => {
    return (
        <div className='container mx-auto my-12'>
            <div className='lg:flex'>
                <div className='lg:w-2/3 lg:mr-12'>
                    <h2 className='text-5xl font-bold my-4'>Send A Message</h2>
                    <p className="text-xl mb-8">Hi, thanks for contacting us. We've received your message and appreciate you reaching out.</p>

                    <div>
                        <form >
                            <div className='grid lg:grid-cols-2 gap-6 grid-cols-1'>
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                            </div>
                            <textarea className="textarea w-full textarea-bordered my-6" placeholder="Bio"></textarea>
                            <input type="submit" className='btn btn-secondary w-full' value="Submit" />
                        </form>
                    </div>
                </div>

        

                <div className='px-6 py-8 bg-slate-100 rounded-xl'>
                    <h2 className="text-3xl font-bold mb-6">Contact Info</h2>

                    <div className='flex items-center'>
                        <div className='mr-4'>
                            <img className='w-16 rounded-full p-2' src={location} alt="" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold">Location</h4>
                            <p className='text-xl font-semibold'> Noakhali, Bangladesh</p>
                        </div>
                    </div>

                    <div className='flex items-center my-6'>
                        <div className='mr-4'>
                            <img className='w-24 rounded-full p-2' src={email} alt="" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold">Email</h4>
                            <p className='text-xl font-semibold'> marufhossainmunna21@gmail.com </p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='mr-4'>
                            <img className='w-16 rounded-full p-2' src={phone} alt="" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold">Phone Number</h4>
                            <p className='text-xl font-semibold'>+8801810315067</p>
                        </div>
                    </div>

                    <h4 className="text-2xl font-bold mt-10">Follow More</h4>
                    <div className='flex items-center mt-2'>
                        <a href="https://web.facebook.com/maruf.hossain.munna01/">
                            <img className='w-10' src={facebook} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/maruf-hossain-munna/">
                            <img className='w-10 mx-6' src={linkedin} alt="" />
                        </a>
                        <a href="https://github.com/maruf-hossain-munna">
                            <img className='w-10' src={github} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactWithMe;