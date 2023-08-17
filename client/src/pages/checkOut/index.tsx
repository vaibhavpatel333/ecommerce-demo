import { useSelector } from "react-redux";
import Header from "../../component/header";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { createTransaction } from "../../config/auth";
import { useRouter } from "next/router";

const CheckOut = () => {
    const objectData = useSelector((state: any) => { return { data: state.object.objectData } });
    const router = useRouter();
    const locations = [
        {
            "id": 1,
            "address": "13, siya ram socity, punagam, surat",
            "city": "surat",
            "state": "gujarat",
            "country": "india",
            "postalCode": "395006",
        },
        {
            "id": 2,
            "address": "13, siya ram socity, punagam, surat",
            "city": "surat",
            "state": "gujarat",
            "country": "india",
            "postalCode": "395006",
        },
        {
            "id": 3,
            "address": "13, siya ram socity, punagam, surat",
            "city": "surat",
            "state": "gujarat",
            "country": "india",
            "postalCode": "395006",
        },
    ]
    const [selectedMethod, setSelectedMethod] = useState('creditCard');
    const [locationId, setLocationId] = useState(1);
    const findLocation = locations.find((item) => item.id === locationId)
    const [transaction, setTransaction] = useState({
        userId: 0,
        product: objectData.data,
        quantity: 1,
        totalAmount: objectData.data.price,
        paymentMethod: selectedMethod,
        address: `${findLocation?.address}, ${findLocation?.city}, ${findLocation?.state}, ${findLocation?.country}, ${findLocation?.postalCode}`,
    })
    const handleMethodChange = (event: any) => {
        transaction.paymentMethod = event.target.value;
        setTransaction(transaction);
        setSelectedMethod(event.target.value);
    };
    const [quantity, setQuantity] = useState(1);
    const [totalAmount, setTotalAmount] = useState(objectData.data.price)
    const handleQuantityChange = (event: any) => {
        const newQuantity = parseInt(event.target.value, 10);
        setTotalAmount(objectData.data.price * newQuantity);
        setQuantity(newQuantity);
    };
   
    useEffect(() => {
        const response: any = localStorage.getItem('token')
        const userData = JSON.parse(response);
        transaction.userId = userData.userId;
        setTransaction(transaction);
    }, [])
   
    
    const handleCreateTransaction = (e: any) => {
        e.preventDefault();
        createTransaction(transaction).then((res) => {
            console.log(res);
            router.push('/');
        }).catch((error) => {
            console.log(error);
        })
    }
    console.log("locations", transaction);

    return (
        <>
            <Header />
            <div style={{ width: "100%", border: "1px solid red" }}></div>
            <div className={styles.box}>
                <div className={styles.quantity}>
                    {/* <div className={styles.no}>2</div> */}
                    <div className={styles.address}>
                        <h2>Add Quantity</h2>
                        <label>
                            Quantity: {" "}
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                min="1" // Set minimum value if needed
                                step="1" // Set the step increment
                            />
                        </label>
                    </div>
                </div>
                <div className={styles.location}>
                    <div className={styles.address}>
                        <ul style={{ padding: "0px" }}>
                            <h2>
                                Select a delivery address
                            </h2>
                        </ul>
                        {
                            locations.length ? locations.map((item: any) => {
                                return (
                                    <li style={{ listStyleType: "none" }}>
                                        <label>
                                            <input
                                                type="radio"
                                                value={item.id}
                                                checked={locationId === item.id}
                                                onChange={(e) => {
                                                    setLocationId(Number(e.target.value))
                                                    const findLocation = locations.find((item) => item.id === Number(e.target.value))
                                                    transaction.address = `${findLocation?.address}, ${findLocation?.city}, ${findLocation?.state}, ${findLocation?.country}, ${findLocation?.postalCode}`
                                                    setTransaction(transaction);
                                                }}
                                            />
                                            <span>{item.address}</span><br />
                                            <span>{item.city}, {item.state}, {item.postalCode}</span> <br />
                                            <span>{item.country}</span>
                                        </label>
                                    </li>
                                )
                            }) : <></>
                        }
                        {/* <button onClick={handleShowModal} style={{marginTop:"15px"}}>
                            Create a new location
                        </button>
                        {
                            <CreateLocationModal
                                show={showModal}
                                onClose={handleCloseModal}
                                onCreate={handleCreateLocation}
                            />
                        } */}
                    </div>

                </div>
                <div className={styles.deliveryAddress}>
                    {/* <div className={styles.no}>1</div> */}
                    <div className={styles.address}>
                        <ul style={{ padding: "0px" }}>
                            <h2>Select Payment Method</h2>
                        </ul>
                        <li style={{ listStyleType: "none" }}>
                            <label>
                                <input
                                    type="radio"
                                    value="creditCard"
                                    checked={selectedMethod === 'creditCard'}
                                    onChange={handleMethodChange}
                                />
                                Credit Card
                            </label>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                            <label>
                                <input
                                    type="radio"
                                    value="Cod"
                                    checked={selectedMethod === 'Cod'}
                                    onChange={handleMethodChange}
                                />
                                Cash on Delivery/Pay on Delivery
                            </label>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                            <label>
                                <input
                                    type="radio"
                                    value="UPI"
                                    checked={selectedMethod === 'UPI'}
                                    onChange={handleMethodChange}
                                />
                                Other UPI Apps
                            </label>
                        </li>
                    </div>
                </div>
                <div className={styles.review} style={{ marginBottom: "20px" }}>
                    <h2 style={{ textAlign: "center" }}>Review items and delivery</h2>
                    <div className={styles.oderDeatils}>
                        <div className={styles.image}>
                            <img src={objectData.data?.imageUrl} style={{ width: 100, height: 100 }} className="card-img-top bklazy" alt="The Hobbit &amp; The Lord of the Rings Boxed Set" title="The Hobbit &amp; The Lord of the Rings Boxed Set" />
                        </div>
                        <div className={styles.details}>
                            <p style={{ margin: "0px", }}><span className={styles.title}>{objectData.data.title}</span></p>
                            <p style={{ margin: "0px", }}>Quantity:- {quantity}</p>
                            <p style={{ textDecorationLine: "line-through", margin: "0px", color: "rgb(70, 69, 69)" }}>₹{objectData.data?.beforePrice}</p>
                            <p style={{ fontFamily: "fantasy", margin: "0px", fontWeight: "bold", color: "red" }}>₹{objectData.data.price}</p>
                        </div>
                    </div>
                    <div className={styles.orderConfirm} style={{ marginTop: "15px" }}>
                        <div className={styles.placeorder}>
                            <input type="button" className={styles.button} value={'Place your order'} onClick={handleCreateTransaction} />
                        </div>
                        <div className={styles.details}>
                            <p style={{ margin: "0px", color: "#B12704", fontFamily: "sans-serif", fontSize: "18px", fontWeight: "bolder" }}>Order Total:- ₹{totalAmount?.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut;