import Cookies from "js-cookie";
import React from "react";
import { useEffect, useState } from "react";

import N1 from "@/components/newsletter/N1";
import N2 from "@/components/newsletter/N2";
import N3 from "@/components/newsletter/N3";

const Newsl = () => {
    const [showNewsletter, setShowNewsletter] = useState(false);
    const closeNewsletter = () => {
        setShowNewsletter(false);
        Cookies.set("newsletterShown", "true", { expires: 1 });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const lastShownTime = Cookies.get("newsletterShownTime");
            if (
                !lastShownTime ||
                Date.now() - parseInt(lastShownTime) > 30 * 60 * 1000
            ) {
                setShowNewsletter(true);
                Cookies.set("newsletterShownTime", Date.now().toString(), {
                    expires: 1,
                });
            }
        }, 30000);

        return () => clearTimeout(timer);
    }, []);

    const newsletterComponents = [N1, N2, N3];

    const RandomNewsletter =
        newsletterComponents[
            Math.floor(Math.random() * newsletterComponents.length)
        ];

    return (
        <div>
            {showNewsletter && (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className='bg-white border rounded-lg p-5 relative'>
                        <button
                            className='absolute top-2 right-2 text-gray-500 hover-text-gray-800'
                            onClick={closeNewsletter}
                        >
                            Close
                        </button>
                        <RandomNewsletter />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Newsl;
