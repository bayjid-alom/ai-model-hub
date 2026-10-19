import React, { use } from 'react';

const Models = ({ modelPromise }) => {
    const models = use(modelPromise)
    // console.log(models);  // [{....}]

    return (
        <section className='w-[94%] md:w-[95%] lg:w-[85%] mx-auto mb-20'>

            {/* Tab buttons */}
            <div className="buttons mx-auto flex w-full max-w-md items-center gap-3">
                <button className="flex-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-pink-500/20 transition-colors duration-300 hover:from-pink-600 hover:to-red-600">
                    Models
                </button>

                <button className="flex-1 rounded-full bg-transparent px-6 py-3 text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-red-500">
                    Cart (0)
                </button>
            </div>


            {/* Heading */}
            <div className="heading-div mb-8 text-center my-13">

                <h2 className="flex items-center justify-center gap-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                    Choose Your AI Model
                    <span className="text-red-500">✦</span>
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500 md:text-base">
                    One subscription gives you access to all frontier AI models
                </p>
            </div>


            {/* Card Container */}
            <div className="card-container mx-auto grid w-11/12 grid-cols-1 gap-6 rounded-3xl border border-red-100/70 bg-gradient-to-br from-white via-red-50/40 to-orange-50/50 p-4 sm:p-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">

                {models.map((model) => (
                    <div
                        key={model.id}
                        className="model-card group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5"
                    >


                        {/* Model Image */}

                        <div className="relative flex h-48 items-center justify-center overflow-hidden bg-zinc-50">
                            <img
                                className="h-30 w-30 rounded-xl object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                                src={model.image}
                                alt={model.title}
                            />

                            {/* Status Badge */}
                            <div className="absolute right-3 top-3">
                                <span className="inline-flex items-center rounded-full border border-white/80 bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-red-600 shadow-sm backdrop-blur-md">
                                    {model.status}
                                </span>
                            </div>
                        </div>



                        {/* Model Details */}
                        <div className="flex flex-1 flex-col p-5">
                            <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-red-600">
                                {model.title}
                            </h3>

                            <p className="mt-2 flex-1 whitespace-pre-line text-sm leading-6 text-slate-500">
                                {model.description}
                            </p>

                            {/* Price */}
                            <div className="mt-3 border-t border-slate-100 pt-4">
                                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                                    {model.price === 0
                                        ? (<span className='text-green-600'>Free</span>)
                                        :
                                        <>
                                            ${model.price}
                                            <span className="ml-1 text-sm font-medium text-slate-400">
                                                / month
                                            </span>
                                        </>
                                    }
                                </h2>
                            </div>


                            {/* Subscribe Button */}
                            <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-pink-500 to-red-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-red-500/15 transition-all duration-300 hover:from-pink-600 hover:to-red-600 hover:shadow-lg hover:shadow-red-500/25 active:scale-[0.98]">
                                Subscribe
                            </button>
                        </div>
                    </div>
                ))}

            </div>





        </section>
    );
};

export default Models;