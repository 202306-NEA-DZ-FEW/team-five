import Image from "next/image";
import React from "react";

const N1 = () => {
    return (
        // the photo with the text join our newsletter and we need to stop hunger
        <div className=''>
            <div className='grid grid-rows-3 grid-flow-col gap-4'>
                <div className='row-span-3 ...'>
                    <Image
                        src='/heart.png'
                        width={300}
                        height={200}
                        alt='no image'
                    />
                </div>
                <div className='col-span-2 text-xl  ...'>
                    <b>join our newsletter to learn more</b>
                    <h1>We need you to stop hunger!</h1>
                </div>
                <div class='row-span-2 col-span-2 mt-5 ...'>
                    {/* the form to fill */}
                    <form
                        action='https://formsubmit.co/sidisaidmel@gmail.com'
                        method='POST'
                    >
                        <input
                            type='text'
                            name='name'
                            placeholder='name'
                            required
                            style={{
                                border: "1px solid black",
                                textAlign: "center",
                            }}
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='email'
                            required
                            style={{
                                border: "1px solid black",
                                marginLeft: "20px",
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
                            style={{
                                marginLeft: "10px",
                                padding: "2px",
                                width: "200px",
                                backgroundColor: "green",
                                color: "white",
                            }}
                        >
                            Send
                        </button>

                        <input
                            type='hidden'
                            name='_autoresponse'
                            value='Successfully subscribed'
                        ></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default N1;
