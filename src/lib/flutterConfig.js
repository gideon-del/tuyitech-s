const configFunction = (email,phone,customerName, amount) =>{
    const config = {
        public_key: import.meta.env.VITE_FLUTTER,
        tx_ref: Date.now(),
        amount,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
          email,
          phone_number: phone,
          name: customerName,
        },
        customizations: {
          title: "my Payment Title",
          description: "Payment for items in cart",
          logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
        },
      };
      return config
    
}
export default configFunction