import React from 'react';
import { Link } from 'react-router-dom';
import person from '../../Assests/Images/rabbilVai.png';

const SignUp = () => {
    return (
        <div>
             <div className="hero mt-8 mb-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="ml-12 lg:block sm:none">
                        <img src={person} alt="" />
                    </div>
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-1/2">
                        <div className="card-body">
                            <h1 className="lg:text-5xl text-3xl text-center my-6 font-bold">Sign Up now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Sign Up</button>
                            </div>
                            <h4 className="text-xl mt-6">Already have account? <Link className='text-secondary hover:text-black' to='/signin'>Sign In</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;