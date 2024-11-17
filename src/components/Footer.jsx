
const Footer = () => {
    return (
        <div className="py-10  px-36 relative flex flex-col items-center">
            <div className="absolute rounded-3xl -top-96 bg-transparent p-5 border">
                <div className="bg-white  py-20 px-96 rounded-3xl flex flex-col gap-5 items-center">
                    <h1 className="text-xl font-semibold">Subscribe to our Newsletter</h1>
                    <p className="text-slate-600">Get the latest updates and news right in your inbox!</p>
                    <div className="flex gap-3">
                        <input className="p-3 border rounded-lg" type="email" placeholder="Enter your email" name="" id="" />
                        <button className="py-1 px-9 font-semibold rounded-lg" style={{
                            background: 'linear-gradient(135deg, #f8b4c4, #fedea8)',
                        }}>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-10">
                <div>
                <img className="w-28" src="https://i.ibb.co.com/rkHpXDq/logo-footer.png" alt="logo" />
                </div>
                <div className="flex justify-between gap-96">
                <div className="w-1/3">
                    <h1 className="text-white pb-5">About Us</h1>
                    <p className="text-slate-400 textarea-xs p-0 mr-20">We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className="w-1/3">
                <h1 className="text-white pb-5"> Quick Link</h1>
                <li className="text-slate-400 textarea-xs p-0">Home</li>
                <li className="text-slate-400 textarea-xs p-0">Services</li>
                <li className="text-slate-400 textarea-xs p-0">About</li>
                <li className="text-slate-400 textarea-xs p-0">Contact</li>
                </div>
                <div className="w-1/3 flex flex-col gap-3">
                    <h1 className="text-white pb-5">
                        Subscribe
                    </h1>
                    <p className="text-slate-400 textarea-xs p-0">Subscribe to our newsletter for the <br /> latest updates.</p>
                    <div className="flex rounded-lg border">
                        <input className="p-1 rounded-tl-lg rounded-bl-lg" type="email" name="" placeholder="Enter your email" id="" />
                        <button className="py-1 px-9 font-semibold rounded-tr-lg rounded-br-lg" style={{
                            background: 'linear-gradient(135deg, #f8b4c4, #fedea8)',
                        }}>Subscribe</button>
                    </div>
                </div>
                </div>
                <p className="text-slate-400 textarea-xs p-0">
                @2024 Your Company All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;