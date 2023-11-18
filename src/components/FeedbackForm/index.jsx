import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { usePopper } from "react-popper";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const FeedbackForm = () => {
    const { t } = useTranslation("error");
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: "offset", options: { offset: [10, 10] } }],
    });
    const [showWidget, setShowWidget] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState(0);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            feedbackMessage.trim() === "" ||
            email.trim() === "" ||
            rating === 0
        ) {
            setError("Please fill in all fields before submitting.");
        } else {
            try {
                setError("");
                setShowWidget(false);

                const response = await fetch(
                    "https://formsubmit.co/sidisaidmel@gmail.com",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            feedbackMessage,
                            email,
                            rating,
                        }),
                    }
                );

                if (response.ok) {
                    toast.success("Feedback submitted successfully!");
                } else {
                    toast.error("Failed to submit feedback. Please try again.");
                }
            } catch (err) {
                setError("There was an error submitting the form.");
            }
        }
    };

    return (
        <div>
            <ToastContainer />
            <div
                ref={setReferenceElement}
                className='absolute bottom-6 right-2 p-2 rounded-l-lg rounded-t-lg bg-green-500 hover:bg-green-400 shadow-md hover:shadow-lg text-white'
            >
                <button
                    onClick={() => setShowWidget(!showWidget)}
                    type='button'
                >
                    {t("error.feedback")}
                </button>
            </div>
            {showWidget && (
                <div
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                    className='bg-white p-2 rounded-md shadow-lg'
                >
                    <form onSubmit={handleSubmit} method='POST'>
                        <label htmlFor='feedback'>{t("error.improve")}</label>
                        <div className='flex flex-col space-y-2'>
                            <textarea
                                id='feedback'
                                className='p-2 h-24 w-64 border border-gray-400 rounded-md'
                                type='textarea'
                                name='texterea'
                                value={feedbackMessage}
                                onChange={(e) =>
                                    setFeedbackMessage(e.target.value)
                                }
                            ></textarea>

                            <label htmlFor='email'>{t("error.email")}</label>
                            <input
                                id='email'
                                className='p-2 border border-gray-400 rounded-md'
                                type='email'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label htmlFor='rating'>{t("error.rate")}</label>
                            <div className='text-3xl'>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        role='button'
                                        name='star'
                                        onClick={() => setRating(star)}
                                        className={
                                            star <= rating
                                                ? "text-yellow-500"
                                                : "text-gray-300"
                                        }
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>

                            {error && <p className='text-red-500'>{error}</p>}
                            <input
                                type='hidden'
                                name='_subject'
                                value='New feedback submission'
                            />
                            <button
                                className='p-2 ml-auto rounded-lg bg-green-500 hover:bg-green-400 shadow-md hover:shadow-lg text-white'
                                type='submit'
                            >
                                {t("error.send")}
                            </button>
                            <input
                                type='hidden'
                                name='_autoresponse'
                                value='Successfully submitted feedback'
                            />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default FeedbackForm;
