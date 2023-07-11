import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [modal, setModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [quantity, setQuantity] = useState(0);




    const closeModel = () => {
        setModal(false);
    };

    // Add to Cart with quantity 

    const addFromDetails = (product) => {
        if (quantity !== 0) {
            // For new item
            const newItem = { ...product, amount: quantity }

            // If item already is in the cart   
            const cartItem = cart.find((item) => item.id === product.id)

            // add item which already in the cart 
            if (cartItem) {
                const newCart = [...cart].map((item) => {
                    if (item.id === product.id) {
                        return { ...item, amount: cartItem.amount + quantity }
                    } else {
                        return item;
                    }

                });
                setCart(newCart);
            } else {
                setCart([...cart, newItem])
            }
            setQuantity(0)
        }

    };

    // Add To Cart
    const addToCart = (product) => {
        // For new item
        const newItem = { ...product, amount: 1 }

        // If item already is in the cart   
        const cartItem = cart.find((item) => item.id === product.id)

        // add item which already in the cart 
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === product.id) {
                    return { ...item, amount: cartItem.amount + 1 }
                } else {
                    return item;
                }

            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem])
        }
    };

    // Decrease Amount 

    const decreaseAmount = (product) => {
        const cartItem = cart.find((item) => {
            return item.id === product.id;
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === product.id && cartItem.amount > 1) {
                    return { ...item, amount: cartItem.amount - 1 }
                } else {
                    return item;
                }
            });
            setCart(newCart);
        };
        if (cartItem.amount < 2) {
            setModal(true)
            setSelectedProduct(product);
        }
    }

    // Remove Item
    const removeItem = (product) => {
        setModal(true);
        setSelectedProduct(product);
    }


    // Items will be removed after confirm from modal
    const removeModel = (product) => {
        const newCart = cart.filter((item) => item.id !== product.id)
        setCart(newCart)
        setModal(false);

    }

    // Clear all basket

    const clearBasket = () => {
        if (window.confirm("Are you sure?")) {
            setCart([]);
        }
    }

    // All items price
    useEffect(() => {
        var total = cart.map((item) => {
            return item.price * item.amount
        })
        const last = total.reduce((acc, curr) => {
            return acc + curr;
        }, 0)
        setTotalPrice(last)

    }, [cart])





    return <CartContext.Provider value={{ addFromDetails, setQuantity, quantity, addToCart, decreaseAmount, selectedProduct, removeModel, closeModel, modal, cart, clearBasket, removeItem, totalPrice }}>{children}</CartContext.Provider>


}

export default CartProvider;