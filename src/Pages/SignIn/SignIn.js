import React from 'react';
import { Link } from 'react-router-dom';
import person from '../../Assests/Images/rabbilVai.png';

const SignIn = () => {
    return (
        <div>
            <div className="hero mt-8 mb-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="ml-12 lg:block sm:none">
                        <img src={person} alt="" />
                    </div>
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-1/2">
                        <div className="card-body">
                            <h1 className="lg:text-5xl text-3xl text-center my-6 font-bold">Login now!</h1>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Login</button>
                            </div>
                            <h4 className="text-xl mt-6">Don’t have account? <Link className='text-secondary hover:text-black' to='/signUp'>Sign up</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;