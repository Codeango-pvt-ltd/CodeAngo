import React from 'react'

export default function Hero() {
    const StackELement = ({ text = null, link = null } = {}) => {
        return (
            <>
                <div className={`${text} border cursor-pointer border-red-500 my-2.5 py-2 bg-black text-white flex justify-center  rounded-lg w-3/4`}>
                    <a href={`${link}`} className='h-full text-center'>
                        {text}
                    </a>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="mainContainer border border-green-400 flex justify-center">
                <div className="leftSide flex flex-col items-center border-r-black border-r-2 border border-red-500 w-1/6">
                    <StackELement text={"Home"} link={"/home"} />
                    <StackELement text={"Courses"} link={"/courses"} />
                    <StackELement text={"Events"} link={"/events"} />
                    <StackELement text={"Corporate Trainings"} link={"/corporatetrainings"} />
                    <StackELement text={"Careers"} link={"/careers"} />
                    <StackELement text={"Contact Us"} link={"/contactus"} />
                    <StackELement text={"About Us"} link={"/aboutus"} />
                </div>
                <div className="rightSide w-3/4 border border-blue-500">

                </div>
            </div>
        </>
    )
}
