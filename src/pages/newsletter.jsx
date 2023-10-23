import Image from "next/image";
import React from "react";
function newsletter() {
    return (
        <>
            <div
                class='grid grid-rows-3 grid-flow-col gap-4'
                style={{ border: "1px solid gray" }}
            >
                <div class='row-span-3 ...'>
                    <Image src='/heart.png' width={400} height={500} />
                </div>
                <div class='col-span-2 ...'>
                    <b>join our newsletter to know more</b>
                    <h2>we need you to stop the hunger</h2>
                </div>
                <div class='row-span-2 col-span-2 ...'>
                    <form
                        action='https://formsubmit.co/sidisaidmel@gmail.com'
                        method='POST'
                    >
                        <input
                            type='email'
                            placeholder='email'
                            name='email'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{
                                width: "200px",
                                marginLeft: "10px",
                                textAlign: "center",
                            }}
                        />
                        <input
                            type='email'
                            placeholder='email'
                            name='email'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{
                                width: "200px",
                                marginLeft: "10px",
                                textAlign: "center",
                            }}
                        />

                        <input
                            type='hidden'
                            name='_subject'
                            value='New submission!'
                        />

                        <button
                            type='submit'
                            class='py-2 px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'
                            style={{ width: "150px", marginLeft: "10px" }}
                        >
                            submit
                        </button>
                        <input
                            type='hidden'
                            name='_autoresponse'
                            value='Successfully subscribed'
                        ></input>
                    </form>
                </div>
            </div>
            <div
                class='grid grid-rows-3 grid-flow-col gap-4'
                style={{ border: "1px solid gray" }}
            >
                <div class='row-span-3 ...'>
                    <Image src='/Group.png' width={400} height={500} />
                </div>
                <div class='col-span-2 ...'>
                    <b>join our newsletter to know more</b>
                    <h2>we need you to stop the hunger</h2>
                </div>
                <div class='row-span-2 col-span-2 ...'>
                    <form
                        action='https://formsubmit.co/sidisaidmel@gmail.com'
                        method='POST'
                    >
                        <input
                            type='email'
                            placeholder='email'
                            name='email'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{
                                width: "200px",
                                marginLeft: "10px",
                                textAlign: "center",
                            }}
                        />
                        <input
                            type='email'
                            placeholder='email'
                            name='email'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{
                                width: "200px",
                                marginLeft: "10px",
                                textAlign: "center",
                            }}
                        />

                        <input
                            type='hidden'
                            name='_subject'
                            value='New submission!'
                        />

                        <button
                            type='submit'
                            class='py-2 px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'
                            style={{ width: "150px", marginLeft: "10px" }}
                        >
                            submit
                        </button>
                        <input
                            type='hidden'
                            name='_autoresponse'
                            value='Successfully subscribed'
                        ></input>
                    </form>
                </div>
            </div>
            <div
                class='grid grid-rows-3 grid-flow-col gap-4'
                style={{ border: "1px solid gray" }}
            >
                <div class='row-span-3 ...'>
                    <Image src='/flat.png' width={400} height={500} />
                </div>
                <div class='col-span-2 ...'>
                    <b>join our newsletter to know more</b>
                    <h2>we need you to stop the hunger</h2>
                </div>
                <div class='row-span-2 col-span-2 ...'>
                    <form
                        action='https://formsubmit.co/sidisaidmel@gmail.com'
                        method='POST'
                    >
                        <input
                            type='email'
                            placeholder='email'
                            name='email'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{
                                width: "200px",
                                marginLeft: "10px",
                                textAlign: "center",
                            }}
                        />
                        <input
                            type='email'
                            placeholder='email'
                            name='email'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{
                                width: "200px",
                                marginLeft: "10px",
                                textAlign: "center",
                            }}
                        />

                        <input
                            type='hidden'
                            name='_subject'
                            value='New submission!'
                        />

                        <button
                            type='submit'
                            class='py-2 px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'
                            style={{ width: "150px", marginLeft: "10px" }}
                        >
                            submit
                        </button>
                        <input
                            type='hidden'
                            name='_autoresponse'
                            value='Successfully subscribed'
                        ></input>
                    </form>
                </div>
            </div>
            {/*  */}
        </>
    );
}

export default newsletter;
