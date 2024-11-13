import React from 'react'

const About = () => {
    return (
        <>
            <div className="relative">
                <img src="./about.jpg" alt="" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-7xl font-bold font-bebas">About Us</h2>
                </div>
            </div>
           
            <div className="about-content ">
                <h1 className='flex flex-col justify-center items-center text-sky-600 text-4xl font-semibold my-5 mt-7'>Laundry Belongs in a Laundromat</h1>
                <p className='text-zinc-800 px-56 text-lg'>An average human spends between 12000 hours of their adult life in cleaning and managing their clothes. We have all grown up on a </p>
                <p className='text-zinc-800 px-96 text-lg'>heavy dose of detergent commercials propagating the idea of ‘whiter the better’.</p>
            </div>

            <div className="separate bg-cyan-400 w-full h-2 mt-20"></div>
            <div className=" flex justify-around mt-16">
                <img src="./about2.jpg" alt="" className="w-[40%] h-96 object-cover ml-20 rounded-md" />
                <div className="  flex flex-col justify-around">
                    <p className="text-zinc-800  pl-28 pr-52 text-lg">Don’t let those socks stay in hiding under the bed or that shirt see another coffee spill. Fresh Fold is here to bring your clothes back to life! Just hand them over, and we’ll handle the washing, drying, and even the folding (it’s in the name, after all). Your clothes will come back so fresh, you’ll wonder if we sprinkled magic dust on them.</p>
                    <p className="text-zinc-800 pl-28 pr-52 text-lg mb-2">At <span className='text-sky-400 font-semibold'>Fresh Fold</span>, we don’t just ‘do’ laundry; we elevate it to an art form. Think of us as your wardrobe’s personal spa—each item is treated to a wash that’s as gentle as it is effective, dried to perfection, and folded so neatly it’s practically a work of origami.</p>
                </div>
            </div>

            <div className="separate bg-cyan-400 w-full h-2 mt-20"></div>
            <div className="commit mt-16">
    <h1 className='flex flex-col justify-center items-center text-sky-600 text-4xl font-semibold my-5 mt-7'>Our Commitment</h1>
    <div className="flex flex-row justify-evenly items-center space-x-8 space-y-6">
        <div className="con-1 text-center flex flex-col items-center">
            <img className="w-24 h-24 mb-4 rounded-full" src="./commit.gif" alt="Swift Service" />
            <h2 className="text-xl font-semibold">Swift Service</h2>
            <p className="text-zinc-900 px-3 mt-2">No more long waits! Enjoy a fast turnaround with clothes ready within 24 hours of pick-up, so you never miss a beat.</p>
        </div>
        <div className="con-1 text-center flex flex-col items-center">
            <img className="w-24 h-24 mb-4 rounded-full" src="./commit.gif" alt="Exceptional Care" />
            <h2 className="text-xl font-semibold">Exceptional Care</h2>
            <p className="text-zinc-900  mt-2">Our skilled team handles each garment with precision, ensuring your clothes get the care they deserve.</p>
        </div>
        <div className="con-1 text-center flex flex-col items-center">
            <img className="w-24 h-24 mb-4 rounded-full" src="./commit.gif" alt="Transparency" />
            <h2 className="text-xl font-semibold">Transparency</h2>
            <p className="text-zinc-900  mt-2">See the process as it happens! Our community-centered service keeps things transparent and close to home.</p>
        </div>
    </div>
</div>
<div className="separate bg-cyan-400 w-full h-2 mt-20"></div>
<div className="flex flex-row justify-evenly items-center space-x-8  mt-16">
<div className="vision text-center flex flex-col items-center">
<img className="w-24 h-24 mb-4 rounded-full" src="./vision.gif" alt="Swift Service" />
<h2 className="text-xl font-semibold">Vision</h2>
<p className="text-zinc-900 px-3 mt-2">To make quality laundry care accessible and effortless for everyone, helping our community live cleaner, fresher lives.</p>
</div>
<div className="vision text-center flex flex-col items-center">
<img className="w-24 h-24 mb-4 rounded-full" src="./vision.gif" alt="Swift Service" />
<h2 className="text-xl font-semibold">Mission</h2>
<p className="text-zinc-900 px-3 mt-2">To deliver fast, reliable, and eco-friendly laundry services that simplify life and bring convenience to our customers' doorstep.</p>
</div>
</div>
<div className="separate bg-cyan-400 w-full h-2 mt-10"></div>

        </>
    )
}

export default About
