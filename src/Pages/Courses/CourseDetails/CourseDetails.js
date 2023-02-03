import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { name, description, price, bannerImg, duration,  lectures, language} = course;
    return (
        <div className='container mx-auto'>
            <div className='text-center mt-8 mb-16 lg:w-1/2 mx-auto'>
                <h2 className='text-4xl font-semibold mb-3'>{name} Development </h2>
                <p className='text-md '> {description} </p>
            </div>

            <div className="mx-auto mb-24 block rounded-lg p-4 shadow-lg shadow-indigo-300 max-w-[450px]">
                <img
                    alt="Home"
                    src={bannerImg}
                    class="h-64 w-full rounded-md object-cover"
                />

                <div class="mt-2">
                    <dl>
                        <div>
                            <dt class="sr-only">Price</dt>

                            <dd class="text-lg font-bold text-gray-500"> {price} BDT </dd>
                        </div>

                        <div>
                            <dt class="sr-only">Address</dt>

                            <dd class="font-medium text-2xl">{name} Development</dd>
                        </div>
                    </dl>

                    <div class="mt-6 flex items-center gap-8 text-xs">
                        <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                            <svg
                                class="h-4 w-4 text-indigo-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                />
                            </svg>

                            <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                <p class="text-gray-500"> Duration</p>

                                <p class="font-medium">{duration} </p>
                            </div>
                        </div>

                        <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                            <svg
                                class="h-4 w-4 text-indigo-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                            </svg>

                            <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                <p class="text-gray-500">Lectures</p>

                                <p class="font-medium"> {lectures}</p>
                            </div>
                        </div>

                        <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                            <svg
                                class="h-4 w-4 text-indigo-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>

                            <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                <p class="text-gray-500">Language</p>

                                <p class="font-medium">{language} </p>
                            </div>
                            
                        </div>
                    </div>
                    <button className="btn btn-outline bg-pink-600 text-white w-full hover:bg-transparent hover:text-black mt-5">Enroll  Now</button>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;