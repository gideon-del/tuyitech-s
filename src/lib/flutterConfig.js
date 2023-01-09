
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
          title: "Checkout",
          description: "complete purchase",
          logo: 'https://firebasestorage.googleapis.com/v0/b/tuyitech-3f023.appspot.com/o/tuyitech.jpg?alt=media&token=cb10b9ab-c3a0-4cab-b4fb-c4b13861ae28',
        },
      };
      return config
    
}
export default configFunction