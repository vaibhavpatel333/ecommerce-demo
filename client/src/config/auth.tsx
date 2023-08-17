import axios from "axios";

export const getProductList = async () => {
    const { data } = await axios.get(`http://localhost:3000/products`)
        .then((response) => {
            return response;
        });
    return data;
};


export const getProductById = async (id: number) => {
    const { data } = await axios.get(`http://localhost:3000/products/${id}`)
        .then((response) => {
            return response;
        });
    return data;
};

export const login = async (id: number) => {
    const { data } = await axios.get(`http://localhost:3000/auth/login`)
        .then((response) => {
            return response;
        });
    return data;
};

export const getAllLocation = async () => {
    const tokenData: any = localStorage.getItem('token');
    const response = JSON.parse(tokenData);

    const { data } = await axios.get(`http://localhost:3000/locations/user/${response?.userId}`, {
        headers: {
            Authorization: `Bearer ${response.token}`
        }
    })
        .then((response) => {
            return response;
        });
    return data;
};

export const createTransaction = async (transaction: any) => {
    const tokenData: any = localStorage.getItem('token');
    const response = JSON.parse(tokenData);
    const { data } = await axios.post(`http://localhost:3000/transaction`, {
        address: transaction.address,
        paymentMethod: transaction.paymentMethod,
        product: transaction.product,
        quantity: transaction.quantity,
        totalAmount: transaction.totalAmount,
        userId: transaction.userId,
    }, {
        headers: {
            Authorization: `Bearer ${response.token}`,
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
            return response;
        });
    return data;
};