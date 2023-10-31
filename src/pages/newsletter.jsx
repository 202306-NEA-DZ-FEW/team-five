import Image from "next/image";
import React from "react";
import "../../public/flat.png";
import "../../public/Group.png";
import "../../public/heart.png";

function newsletter() {
    return (
        <>
            <div class='grid grid-rows-3 grid-flow-col gap-4'>
                <div class='row-span-3 ...'>
                    <Image
                        src='/heart.png'
                        width={400}
                        height={200}
                        alt='no image'
                    />
                </div>
                <div class='col-span-2 ...'>
                    <b>join our newsletter to learn more</b>
                    <h1>We need you to stop hunger!</h1>
                </div>
                <div class='row-span-2 col-span-2 ...'>
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
                    </form>
                </div>
            </div>
            <div class='grid grid-rows-3 grid-flow-col gap-4'>
                <div class='row-span-3 ...'>
                    <Image
                        src='/Group.png'
                        width={400}
                        height={200}
                        alt='no image'
                    />
                </div>
                <div class='col-span-2 ...'>
                    <b>join our newsletter to learn more</b>
                    <h1>We need you to stop hunger!</h1>
                </div>
                <div class='row-span-2 col-span-2 ...'>
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
                    </form>
                </div>
            </div>
            <div class='grid grid-rows-3 grid-flow-col gap-4'>
                <div class='row-span-3 ...'>
                    <Image
                        src='/flat.png'
                        width={400}
                        height={200}
                        alt='no image'
                    />
                </div>
                <div class='col-span-2 ...'>
                    <b>join our newsletter to learn more</b>
                    <h1>We need you to stop hunger!</h1>
                </div>
                <div class='row-span-2 col-span-2 ...'>
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
                    </form>
                </div>
            </div>
        </>
    );
}

export default newsletter;
