import { useEffect, useState } from "react";
import Header from "../../component/header";
import { useRouter } from "next/router";
import { getProductById } from "../../config/auth";
import styles from "./index.module.css";
import moment from "moment";
import { useDispatch } from 'react-redux';
import { setObjectData } from '../../slices/storeProductSlices';
const Book = () => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        price: 0,
        beforePrice: 0,
        imageUrl: "",
        description: "0",
        released: "",
        review: 0,
        shippingCharge: 0,
        isAvailable: true
    });
    const router = useRouter();
    const dispatch = useDispatch();
    const response: any = localStorage.getItem('token')
    const userData = JSON.parse(response);
    useEffect(() => {
        const id = router.query?.id;
        getProductById(Number(id)).then((res) => {
            console.log("res", res);
            setBook(res);
            dispatch(setObjectData(res));
        }).catch((error) => { console.log(error); });
    }, [])

    const [isbuy, setIsBuy] = useState(true);
    console.log("book", book);

    return (
        <>
            <Header />
            <div style={{ width: "100%", border: "1px solid red" }}></div>
            <div className={styles.box}>
                <div className={styles.imageBox}>
                    <div className="col-md-4 col-lg-3">
                        <div className="position-relative border" style={{ padding: "25px", minHeight: "300px" }}>
                            <img src={book?.imageUrl} id="ctl00_phBody_ProductDetail_imgProduct" style={{ display: "inline-block" }} className="card-img-top bklazy" alt="The Hobbit &amp; The Lord of the Rings Boxed Set" title="The Hobbit &amp; The Lord of the Rings Boxed Set" />
                        </div>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.h1}>
                        <h1 className={styles.title}>{book.title}</h1>
                    </div>
                    <input type="hidden" name="ctl00$phBody$ProductDetail$hdnISBN" id="ctl00_phBody_ProductDetail_hdnISBN" value="9780008387754" />
                    <label id="ctl00_phBody_ProductDetail_lblBinding">(Mixed media product)</label>
                    <label id="ctl00_phBody_ProductDetail_lblRelease"> |Released: {moment(new Date(book.released)).format("DD MMMM YYYY")}</label>
                    <br />

                    <div className=" d-inline authordetailtext">
                        <label id="ctl00_phBody_ProductDetail_lblAuthor1">By: <a href="https://www.bookswagon.com/author/j.-r.-r.-tolkien">{book.author}</a></label>
                        <label id="ctl00_phBody_ProductDetail_lblAuthorType1">(Author)</label>
                    </div>
                    <hr />
                    <span className="actualprice themecolor font-weight-bold">
                        <label id="ctl00_phBody_ProductDetail_lblourPrice">₹{book.price?.toLocaleString()}</label>
                    </span>
                    <br />
                    <span className="maxprice"><del>
                        <label id="ctl00_phBody_ProductDetail_lblListPrice">₹{book.beforePrice?.toLocaleString()}</label>
                    </del></span>
                    <br />
                    <div className="available mt-2 mb-2">
                        <span id="ctl00_phBody_ProductDetail_lblAvailable" style={{ color: book.isAvailable ? "green" : "red" }} className="available">Available</span>
                        <p>
                            <label id="ctl00_phBody_ProductDetail_lblBusiness">Ships within <b>2-4 Business Days</b></label>
                            <br />
                            <label id="ctl00_phBody_ProductDetail_lishipping"><br />₹{book.shippingCharge} shipping in India per item and low cost Worldwide.</label>
                        </p>
                    </div>
                    <div id="divNotifyMsg" className="notifymebox" style={{ display: book.isAvailable ? "none" : "initial" }}>We will notify you once this book available in stock.</div>
                    <div className={styles.buttonBox}>
                        <input type="button" className={styles.button} style={{ backgroundColor: isbuy ? "red" : "white", color: isbuy ? "white" : "red" }} onClick={() => {
                            !isbuy ? setIsBuy(true) : setIsBuy(false);
                            userData ?
                                router.push(`/checkOut`) : router.push(`/customer/login`);

                        }} value="Buy Now" />
                    </div>
                </div>
            </div>
            <div className={styles.box} style={{ marginTop: "20px" }}>
                <div className="row mt-4" id={styles.aboutbook}>
                    <div className="col-sm-12">
                        <span className={styles.themecolor}>About the Book</span>
                        <p>
                            <span id="ctl00_phBody_ProductLongDesc_lblLongDesc">{book.description}</span>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Book;