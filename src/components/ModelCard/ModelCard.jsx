import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({ model, carts, setCarts }) => {
    // model >> object received from Models.jsx

    const [isSubscribed, setIsSubscribed] = useState(false)


    const handleSubscription = (model) => {
        const existingCartItem = carts.find(c => c.id === model.id)
        if (existingCartItem) {
            toast.info("This AI model is already in your collection!");
            return;
        }

        setIsSubscribed(true)
        setCarts([...carts, model])
        toast.success(`${model.title} added to your collection!`);
    }


    return (
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
                    <span className="inline-flex items-center rounded-full border border-red-100 bg-white/95 px-3.5 py-1.5 text-xs font-bold capitalize tracking-wide text-red-600 shadow-md shadow-red-500/10 backdrop-blur-md">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></span>
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
                <button
                    onClick={() => handleSubscription(model)}
                    className="mt-4 w-full rounded-xl bg-gradient-to-r from-pink-500 to-red-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-red-500/15 transition-all duration-300 hover:from-pink-600 hover:to-red-600 hover:shadow-lg hover:shadow-red-500/25 active:scale-[0.98]">
                    {isSubscribed ? "Subscribed" : "Subscribe Now"}
                </button>
            </div>
        </div>
    );
};

export default ModelCard;