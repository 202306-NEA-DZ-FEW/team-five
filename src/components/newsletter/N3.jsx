import Image from "next/image";
import React from "react";

const N3 = () => {
    return (
        <div>
            <div className='flex flex-wrap'>
                <div className=''>
                    <Image
                        src='/flat.png'
                        width={200}
                        height={200}
                        alt='no image'
                    />
                </div>

                <b>join our newsletter to learn more</b>
                <h1>We need you to stop hunger!</h1>

                <form
                    action='https://formsubmit.co/sidisaidmel@gmail.com'
                    method='POST'
                >
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        required
                        className='pl-2 mr-5 h-8'
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='E-mail'
                        required
                        className='pl-2 mr-5 h-8'
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
    );
};

export default N3;
