import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./product.css"
import Loader from '../Loader/Loader'

const Product = () => {
    let [loader, setLoader] = useState(false)
    let [data, setData] = useState([])
    useEffect(() => {
        FetchApi()
    }, [])
    const FetchApi = async () => {
        setLoader(true)
        try {
            let respone = await axios.get("https://fakestoreapi.com/products")
            let user_Data = respone.data
            setData([...user_Data])
            setLoader(false)  
        } catch (error) {
            setLoader(false)  
        }
    }
    return (
        <>
            {
                loader ? <Loader /> : (
                    <div className="main_container">

                        {
                            data.map((value, index) => (
                                <div key={index} className="card">
                                    <div className="top">
                                        <img src={value.image} />
                                    </div>
                                    <div className="bottom">
                                        <div className="title">
                                            <h2>{value.title}</h2>
                                        </div>
                                        <div className="des">
                                            <p>{value.description}</p>
                                        </div>
                                        <div className="price">
                                            <h3>Price</h3> : <span>{value.price}</span>
                                        </div>
                                        <div className="btn">
                                            <button>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                )}
        </>
    )
}

export default Product