
const Footer = () => {
    return (
        <footer className="bg-[#FFFFFF] py-4 w-full mt-auto">
            <section className="grid md:grid-cols-4 place-items-center">
                <div className="flex flex-col gap-2 ">
                    <h1 className="font-semibold">Get in touch</h1>
                    <div className="flex flex-col">
                        <a className="text-green-700">About Us</a>
                        <a className="text-green-700">Careers</a>
                        <a className="text-green-700">Press Releases</a>
                        <a className="text-green-700">Blog</a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold">Connections</h1>
                    <div className="flex flex-col">
                        <a className="text-green-700">Facebook</a>
                        <a className="text-green-700">Twitter</a>
                        <a className="text-green-700">Instagram</a>
                        <a className="text-green-700">Youtube</a>
                        <a className="text-green-700">LinkedIn</a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold">Earnings</h1>
                    <div className="flex flex-col">
                        <a className="text-green-700">Become an Affiliate</a>
                        <a className="text-green-700">Advertise your product</a>
                        <a className="text-green-700">Sell on Market</a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold">Account</h1>
                    <div className="flex flex-col">
                        <a className="text-green-700">Your account</a>
                        <a className="text-green-700">Returns Centre</a>
                        <a className="text-green-700">100% purchase protection</a>
                        <a className="text-green-700">Chat with us</a>
                        <a className="text-green-700">Help</a>
                    </div>
                </div>
            </section>

            <section className="px-36 flex flex-col gap-2">
                <h1>Product tags</h1>
                <div className="flex gap-4">
                    <div className="bg-gray-400 w-fit px-2 rounded-full">
                        <h1>Beans</h1>
                    </div>

                    <div className="bg-gray-400 w-fit px-2 rounded-full">
                        <h1>Beans</h1>
                    </div>

                    <div className="bg-gray-400 w-fit px-2 rounded-full">
                        <h1>Beans</h1>
                    </div>

                    <div className="bg-gray-400 w-fit px-2 rounded-full">
                        <h1>Beans</h1>
                    </div>
                </div>
                <h1 className="py-2">Copyright &copy; {new Date().getFullYear()} Riza Nurfat Risyam</h1>
            </section>
        </footer>
    )
}

export default Footer;