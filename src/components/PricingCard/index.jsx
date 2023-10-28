import axios from "axios";

const PricingCard = ({ price }) => {
    const handlePayment = async (e) => {
        e.preventDefault();
        const { data } = await axios.post(
            "/api/payment",
            {
                priceId: price.id,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        window.location.assign(data);
    };

    return (
        <div>
            PricingCard
            <div>
                <h4>{price.nickname}</h4>
                <h1>
                    {(price.unit_mount / 100).toLocaleString("en-US", {
                        style: "currency",
                        currency: "TR",
                    })}
                </h1>
            </div>
            <button className='go-to-checkout' onClick={handlePayment}></button>
        </div>
    );
};

export default PricingCard;
