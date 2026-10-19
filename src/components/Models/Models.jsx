import React, { use } from 'react';
import ModelCard from '../ModelCard/ModelCard';

const Models = ({ modelPromise }) => {
    const models = use(modelPromise)
    // console.log(models);  // [{....}]


    return (
        <section className='w-[94%] md:w-[95%] lg:w-[85%] mx-auto mb-20'>

            {/* Heading */}
            <div className="heading-div mb-8 text-center my-13">

                <h2 className="flex items-center justify-center gap-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                    Choose Your AI Model
                    <span className="text-red-500">✦</span>
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500 md:text-base">
                    One subscription gives you access to all frontier AI models
                </p>
            </div>


            {/* Card Container */}
            <div className="card-container mx-auto grid w-11/12 grid-cols-1 gap-6 rounded-3xl border border-red-100/70 bg-gradient-to-br from-white via-red-50/40 to-orange-50/50 p-4 sm:p-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
            >
                {models.map(model => <ModelCard
                    key={model.id}
                    model={model}></ModelCard>)}
            </div>



        </section>
    );
};

export default Models;