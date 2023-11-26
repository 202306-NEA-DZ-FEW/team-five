import Image from "next/image";
import React from "react";

const N1 = () => {
    return (
        <div>
            <div className='flex flex-row'>
                <div className='hidden md:block'>
                    <Image
                        src='/heart.png'
                        width={200}
                        height={200}
                        alt='no image'
                    />
                </div>
                <div className='p-10 text-[#212B36]'>
                    <b>join our newsletter to learn more</b>
                    <h1>We need you to stop hunger!</h1>

                    <form
                        action='https://formsubmit.co/sidisaidmel@gmail.com'
                        method='POST'
                        className='mt-10'
                    >
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            required
                            className='pl-2 mr-5 h-9 border rounded-sm mb-3'
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='E-mail'
                            required
                            className='pl-2 mr-5 h-9 border rounded-sm'
                        />
                        <input
                            type='hidden'
                            name='_subject'
                            value='New submission!'
                        />
                        <button
                            type='submit'
                            className='bg-[#20DC49] text-white px-16  font-semibold mt-3 h-9 rounded-sm w-48'
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
