import React from 'react'

export default function GetInTouch() {
    const handleFormSubmit = (e) => {
        console.log(e)                  // ???
    }
    return (
        <div className='flex justify-center border border-red-500 rounded-lg bg-skin-bg200'>
            <div className="leftSide border border-green-400 flex flex-col py-10 justify-between items-center w-2/3">
                <div className="texts flex flex-col justify-center">
                    <div className="text text-2xl font-bold text-skin-text100 text-center mb-3">
                        About Codeango
                    </div>
                    <div className="text text-center">
                        Creating Interactive Courses to Deliver Quality Training
                    </div>
                </div>
                <img src="/img/home/getInTouchRobot.svg" alt="Robot showing victory sign with computer" className='w-2/3 h-3/4 mb-5 border border-red-400 object-scale-down' />
            </div>
            <div className="rightSide flex flex-col w-1/3 px-5 border border-black rounded-lg justify-center">
                <div className="GetInTouch text-skin-text100 font-sans font-bold text-3xl mb-10 text-center">
                    Get In Touch
                </div>
                <div className="info text-skin-text100 font-sans mb-5 text-center">
                    Kindly fill the form so that our executive can call you and take you into the world of new technology
                </div>
                <form action={handleFormSubmit} className="form ">
                    <div className='row1 grid grid-cols-3 mb-5'>
                        <div className="FirstName text-skin-text100 font-sans mb-1">
                            First name *
                        </div>
                        <div className="LastName text-skin-text100 font-sans mb-1">
                            Last name *
                        </div>
                        <div className="Email text-skin-text100 font-sans mb-1">
                            Email *
                        </div>
                        <input className="Firstname border border-pink-500 rounded-md h-8 w-5/6 px-2" />
                        <input className="Lastname border border-pink-500 rounded-md h-8 w-5/6 px-2" />
                        <input className="Email border border-pink-500 rounded-md h-8 w-5/6 px-2" />
                    </div>
                    <div className="row2 mb-5">
                        <div className="subject flex flex-col ">
                            <div className="text text-skin-text100 font-sans mb-1 ">
                                Subject
                            </div>
                            <div className="input flex ">
                                <input type="text" className="text border  border-pink-500 rounded-md w-full h-8 px-2" />
                            </div>
                        </div>
                    </div>
                    <div className="row3 mb-5">
                        <div className="message flex flex-col  ">
                            <div className="text text-skin-text100 font-sans mb-1">
                                Leave us a message...
                            </div>
                            <div className="input flex ">
                                <textarea type="text" className="text border  border-pink-500 rounded-md w-full h-32 p-2" />
                            </div>

                        </div>
                    </div>
                    <div className="row4 mb-5">
                        <div className="buttons flex justify-between px-2">
                            <div className="submit text-center w-32 hover:bg-skin-primary200 cursor-pointer hover:shadow-lg hover:shadow-blue-200 text-skin-text100 rounded-3xl bg-skin-primary100 p-2 px-5">
                                Submit
                            </div>
                            <div className="LearnMore text-center w-32 hover:bg-skin-primary200 cursor-pointer hover:shadow-lg hover:shadow-blue-200 text-skin-text100 rounded-3xl bg-skin-primary100 p-2 px-5">
                                Learn More
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
