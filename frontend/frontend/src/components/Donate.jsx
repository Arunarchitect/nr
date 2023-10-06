import React, {useState} from 'react'


const Donate = () => {
    const [amount, setamount] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(amount === ""){
            alert("Please Enter Amount");
        }else{
            var options = {
                key: "rzp_test_xrxUvxctcnUws9",
                key_secret: "vrkxqzTxuQOLF0lbgoUAHVf3",
                amount: amount *100,
                currency:"INR",
                name: "modelflick",
                description: "product development",
                handler: function(response){
                    alert(response.razorpay_payment_id);
                },
                prefill: {
                    name:"arun",
                    email:"intformbase@gmail.com",
                    contact:"9567014967",
                },
                notes:{
                    address:"Razorpay"
                },
                theme:{
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open()
        }
    }

  return (
    <div id='donate' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#ec4242]'>Donate</h1>
      
      <p className='text-center'>
        This project is all about helping both everyday folks and professionals in the Architecture, Engineering, and Construction (AEC) field create top-notch design solutions by providing the best quality data and friendly advice in the easiest way possible. <strong>The donate system is a test link, it doesn't involve real money!</strong>
      </p>

      <br/>
        <div className="flex flex-col items-center">
            <div className="flex space-x-4">
                <input
                className="border-2 rounded-full p-3 border-gray-300"
                type="text"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setamount(e.target.value)}
                />
                <button
                onClick={handleSubmit}
                className="bg-[#2f7c1b] text-gray-100 p-4 rounded-full"
                >
                Donate
                </button>
            </div>
        </div>


      
    </div>
  )
}

export default Donate