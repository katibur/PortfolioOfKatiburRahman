import React from 'react';

const ProjectsDetailsCard = ({ project }) => {

    const { title, cover, technology, description, live, server, client, img1, img2, img3, img4 } = project;
    return (
        <div>
            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
                <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    </div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5'>
                        <button className='button'><a target={"blank"} href={live}>Live Site</a></button>
                        <button className='button'><a target={"blank"} href={client}>Clint Site Code</a></button>
                        <button className='button'><a target={"blank"} href={server}>Server Site Code</a></button>
                    </div>
                    <div className="flex flex-wrap space-x-2 ">
                        <p href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"><span className='font-bold text-2xl'>Technology Used: </span>  {technology}</p>
                    </div>
                </article>
                <div>


                    <div className="space-y-2 border-t border-dashed dark:border-gray-400">
                        <h4 className="text-lg font-semibold my-3">Description</h4>
                        <ul className="ml-4 space-y-1 list-disc pb-6">
                            <li>
                                <p href="#" className="hover:underline">{description}</p>
                            </li>
                        </ul>
                    </div>

                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={img1} className="w-full" alt='' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={img2} className="w-full" alt='' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={img3} className="w-full" alt='' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={img4 ? img4 : cover} className="w-full" alt='' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>













                </div>
            </div>
        </div>
    );
};

export default ProjectsDetailsCard;