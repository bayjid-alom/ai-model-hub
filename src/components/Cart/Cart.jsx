import { Delete, DeleteIcon, Trash } from 'lucide-react';
import React from 'react';

const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    console.log(">>>", totalPrice);


    return (
        <section className="w-[94%] md:w-[95%] lg:w-[85%] mx-auto my-12 rounded-2xl border border-[#E8DFD1] bg-gradient-to-b from-[#FAF7F1] to-white px-6 py-3 md:py-5">


            {/* Empty Message  | Conditional*/}
            {/* {carts.length == 0 && Empty Cart} */}

            {
                carts.length === 0 && <div className="empty-message my-2 px-5 py-10 text-center sm:py-14">
                    <div className="relative mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-red-50 to-orange-100/70">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white bg-white shadow-md shadow-red-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-10 w-10 text-red-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m20.25 7.5-8.25-4.5L3.75 7.5m16.5 0L12 12m8.25-4.5v9L12 21m0-9L3.75 7.5m8.25 4.5v9m-8.25-13.5v9L12 21"
                                />
                            </svg>
                        </div>

                        <span className="absolute right-1 top-2 h-3 w-3 rounded-full bg-orange-400 ring-4 ring-white"></span>
                    </div>

                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                        Nothing here yet</p>

                    <h4 className="mb-4 text-2xl font-extrabold tracking-tight text-[#211A2C] sm:text-3xl">
                        Your AI Collection Starts Here
                    </h4>

                    <p className="mx-auto max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                        No AI models in your cart yet. Discover your favorite AI tools
                        and bring everything you need into one powerful hub.
                    </p>

                    <div className="mt-7 flex items-center justify-center gap-2">
                        <span className="h-1.5 w-6 rounded-full bg-red-500"></span>
                        <span className="h-1.5 w-2 rounded-full bg-orange-300"></span>
                        <span className="h-1.5 w-2 rounded-full bg-orange-200"></span>
                    </div>
                </div>
            }





            {/* Heading if card.lenght > 0  | Conditioanl*/}
            {carts.length > 0 && (
                <h2 className="mb-6 mt-8 w-[95%] mx-auto text-left text-xl font-bold tracking-tight text-[#211A2C] sm:text-2xl">
                    Your Selected AI Models
                    <span className="ml-2 text-sm font-semibold text-red-500">
                        ({carts.length})
                    </span>
                </h2>
            )}






            {/* Cart Card Container */}
            <div className="cart-card-container mx-auto flex w-[95%] flex-col gap-5">

                {carts.map(item => (
                    <div
                        key={item.id}
                        className="cart-card group flex flex-col gap-5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-colors duration-300 hover:border-red-200 sm:p-5 md:flex-row md:items-center md:justify-between"
                    >

                        {/* Model Information */}
                        <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-5">

                            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 sm:h-28 sm:w-28">
                                <img
                                    className="h-full w-full object-cover"
                                    src={item.image}
                                    alt={item.title}
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h2 className="mb-2 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-red-600 sm:text-xl">
                                    {item.title}
                                </h2>

                                <p className="line-clamp-2 max-w-xl text-sm leading-6 text-slate-500">
                                    {item.description}
                                </p>

                                <div className="mt-3 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                    <span className="text-xs font-medium text-slate-500">
                                        Added to your collection
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Price & Remove */}
                        <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4 md:justify-end md:border-l md:border-t-0 md:pl-6 md:pt-0">

                            <div>
                                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                                    Monthly plan
                                </p>

                                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                                    ${item.price}
                                    <span className="ml-1 text-sm font-medium text-slate-400">
                                        / month
                                    </span>
                                </h3>
                            </div>

                            <button
                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors duration-200 hover:border-red-500 hover:bg-red-500 hover:text-white"
                                aria-label={`Remove ${item.title} from cart`}
                            >
                                <Trash size={19} strokeWidth={1.8} />
                            </button>

                        </div>

                    </div>
                ))}
            </div>




            {/* Total Price + Proceed to Checkout wide Card  */}
            {
                carts.length > 0 && <div className="mt-8 flex flex-col gap-4 w-[95%] mx-auto">

                    {/* Total Price Card */}
                    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-gradient-to-r from-[#18181B] to-[#27272A] px-6 py-5 shadow-lg sm:px-8">
                        <div>
                            <h3 className="text-lg font-bold text-white sm:text-xl">
                                Total
                            </h3>
                            <p className="mt-1 text-sm text-slate-400">
                                Monthly subscription
                            </p>
                        </div>

                        <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                            ${totalPrice}
                        </h3>
                    </div>


                    {/* Checkout Button Card */}
                    <div className="rounded-2xl border border-[#E8DFD1] bg-white shadow-sm ">

                        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 md:py-5 text-base font-bold text-white shadow-md shadow-red-500/20 transition-all duration-300 hover:from-red-600 hover:to-orange-600 hover:shadow-lg hover:shadow-red-500/30 sm:text-lg">
                            Proceed to Checkout!
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>

                </div>
            }






        </section>
    );
};

export default Cart;