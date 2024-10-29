import React from 'react'

const Services = () => {
  return (
    <>
    <div className="relative">
                <img src="./public/services.jpg" alt="" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-7xl font-bold font-bebas">Our Services</h2>
                </div>
            </div>

            <div className="services-section grid grid-cols-1 md:grid-cols-4 gap-6 p-10">
    {/* Card 1 - Laundry */}
    <div className="service-card group transform transition duration-300 hover:scale-105 shadow-lg p-4 rounded-lg">
        <img src="./public/laundry.jpg" alt="Laundry" className="w-full h-48 object-cover rounded-md" />
        <h3 className="text-xl font-bold text-center mt-4 text-gray-800 group-hover:text-blue-600 cursor-pointer">Laundry</h3>
    </div>

    {/* Card 2 - Dry Cleaning */}
    <div className="service-card group transform transition duration-300 hover:scale-105 shadow-lg p-4 rounded-lg">
        <img src="./public/dryclean.jpg" alt="Dry Cleaning" className="w-full h-48 object-cover rounded-md" />
        <h3 className="text-xl font-bold text-center mt-4 text-gray-800 group-hover:text-blue-600 cursor-pointer">Dry Cleaning</h3>
    </div>

    {/* Card 3 - Shoe Cleaning */}
    <div className="service-card group transform transition duration-300 hover:scale-105 shadow-lg p-4 rounded-lg">
        <img src="./public/shoeclean.avif" alt="Shoe Cleaning" className="w-full h-48 object-cover rounded-md" />
        <h3 className="text-xl font-bold text-center mt-4 text-gray-800 group-hover:text-blue-600 cursor-pointer">Shoe Cleaning</h3>
    </div>

    {/* Card 4 - Ironing Service */}
    <div className="service-card group transform transition duration-300 hover:scale-105 shadow-lg p-4 rounded-lg">
        <img src="./public/iron.jpg" alt="Ironing Service" className="w-full h-48 object-cover rounded-md" />
        <h3 className="text-xl font-bold text-center mt-4 text-gray-800 group-hover:text-blue-600 cursor-pointer">Ironing Service</h3>
    </div>
</div>

<div className="separate bg-cyan-400 w-full h-2 mt-5 "></div>

<div className=" flex justify-around mt-16 bg-[rgb(253,250,238)]">
                <img src="https://washmart.in/wp-content/uploads/2023/07/Laundry-Process-2.png" alt="" className="w-[50%] h-[32rem] object-cover ml-20  rounded-md " />
                <div className="  flex flex-col justify-around">
                    <h2 className='font-bold text-3xl text-zinc-900 flex justify-center items-center mr-[2.5rem]'>Laundry</h2>
                   <p className='text-zinc-900 pl-40 pr-40 text-lg mb-72  '>At Fresh Fold, we take laundry care to the next level with a thorough, step-by-step process to give your clothes the quality they deserve. Entrust us with your laundry needs and experience the ease of receiving clothes that are fresh, spotless, and perfectly folded—ready to wear right out of the bag!</p>
                </div>
            </div>
<div className="separate bg-cyan-400 w-full h-2 mt-16 "></div>

<div className=" flex justify-around mt-16 bg-[rgb(253,250,238)]">
                <div className="  flex flex-col justify-around">
                    <h2 className='font-bold text-3xl text-zinc-900 flex justify-center items-center mr-[2.5rem]'>Dry Cleaning</h2>
                   <p className='text-zinc-900 pl-40 pr-40 text-lg mb-72  '>Trust Fresh Fold for top-notch, hygienic, and eco-friendly dry cleaning services. Enjoy the ease and confidence our detailed process offers, ensuring your garments look pristine while reducing environmental impact.</p>
                </div>
                <img src="https://washmart.in/wp-content/uploads/2023/07/2.png" alt="" className="w-[50%] h-[32rem] object-cover mr-20  rounded-md " />
            </div>

<div className="separate bg-cyan-400 w-full h-2 mt-16 "></div>

<div className=" flex justify-around mt-16 bg-white">
                <img src="https://washmart.in/wp-content/uploads/2023/07/shoe-cleaning-process-1024x773.png" alt="" className="w-[50%] h-[32rem] object-cover ml-20  rounded-md " />
                <div className="  flex flex-col justify-around">
                    <h2 className='font-bold text-3xl text-zinc-900 flex justify-center items-center mr-[2.5rem]'>Shoe Cleaning</h2>
                   <p className='text-zinc-900 pl-40 pr-40 text-lg mb-72  '>At Fresh Fold, we offer careful and detailed shoe cleaning services to give your footwear the care it deserves. Trust us to bring back the original shine and extend the life of your favorite shoes!</p>
                </div>
            </div>

<div className="separate bg-cyan-400 w-full h-2 mt-16 "></div>
<div className=" flex justify-around mt-16 bg-white">
                <div className="  flex flex-col justify-around">
                    <h2 className='font-bold text-3xl text-zinc-900 flex justify-center items-center mr-[2.5rem]'>Ironing Service</h2>
                   <p className='text-zinc-900 pl-40 pr-40 text-lg mb-72  '>Enjoy the ease and perfection of Fresh Fold’s ironing service. Trust us to bring a crisp, polished look to your clothes, so they’re always ready to impress!</p>
                </div>
                <img src="https://washmart.in/wp-content/uploads/2023/07/Ironing-Process.png" alt="" className="w-[50%] h-[32rem] object-cover mr-20  rounded-md " />
            </div>

            <div className="separate bg-cyan-400 w-full h-2 mt-16 "></div>
    </>
  )
}

export default Services
