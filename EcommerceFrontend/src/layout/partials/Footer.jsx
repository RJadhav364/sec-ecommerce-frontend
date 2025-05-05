import React from "react";
// import FullsizeImage from "../../components/FullsizeImage";
// import footerLogoImg from "../../assets/footerLogoImg.png";
const date = new Date();
// console.log(date.getFullYear());
const fullYear = date.getFullYear();
const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] mt-[30px]">
        <div className="mx-auto w-[70%]">
            <div className="py-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="before:contents-[''] before:inline-block before:w-[2px] before:h-full before:bg-[#e3e2e2] before:absolute relative before:right-0 before:rounded-[10px]">
                    <div className="text-teal-600 2xl:block xl:block lg:block md:block sm:flex flex justify-center">
                    <img src="https://serviceapi.spicezgold.com/download/1744255975457_logo.jpg" />
                    </div>

                    <p className="mt-4 max-w-xs text-gray-500 mb-5">
                    Stay up to date with our latest features and releases by joining
                    our newsletter.
                    </p>
                    <div className="mb-5 mr-[5px]">
                    <input
                        type="email"
                        placeholder="Enter email here"
                        className="rounded px-5 py-1 bg-transparent border border-gray-500 placeholder:text-sm mr-5 inline-block"
                        name="email"
                        id="email"
                    />
                    <button className="text-black bg-white py-1 px-2 rounded m 2xl:mt-auto xl:mt-auto lg:mt-2 md:mt-auto">
                        Subscribe
                    </button>
                    </div>
                    <p className="mt-4 max-w-xs text-gray-500 text-xs">
                    By subscribe, you agree to our Privacy Policy and consent to
                    receive updates from our company.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                    <div>
                    <p className="font-[600] text-black text-[18px]">Most Sold Products</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a
                            href="#"
                            className="text-black transition hover:opacity-75 text-[14px]"
                        >
                            {" "}
                            ProLiner{" "}
                        </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            className="text-black transition hover:opacity-75 text-[14px]"
                        >
                            {" "}
                            Aloe Vera Gel{" "}
                        </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            className="text-black transition hover:opacity-75 text-[14px]"
                        >
                            {" "}
                            Male Complete Solution{" "}
                        </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            className="text-black transition hover:opacity-75 text-[14px]"
                        >
                            {" "}
                            Healthforce{" "}
                        </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            className="text-black transition hover:opacity-75 text-[14px]"
                        >
                            {" "}
                            ProCare{" "}
                        </a>
                        </li>
                    </ul>
                    </div>

                    <div>
                    <p className="font-[600] text-black text-[18px]">Useful links</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a
                            href="#"
                            className="text-black transition hover:opacity-75 text-[14px]"
                        >
                            {" "}
                            Pricing{" "}
                        </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            className="text-black transition hover:opacity-75 text-[14px]"
                        >
                            {" "}
                            About Karuna Wellness Hub{" "}
                        </a>
                        </li>
                    </ul>
                    </div>

                    <div>
                    <p className="font-[600] text-black text-[18px]">Follow us</p>
                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:opacity-75 flex"
                        >
                            <svg
                            className="h-7 w-7"
                            viewBox="0 0 24 24"
                            fill="#1877F2"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <rect width="24" height="24" rx="12" fill="#FFFFFF" />

                            <path
                                fill="#1877F2"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            />
                            </svg>
                            <span className="flex justify-center ml-3.5 text-sm text-black">
                            Facebook
                            </span>
                        </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:opacity-75 flex"
                        >
                            <div className="h-7 w-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex justify-center items-center">
                            <svg
                                className="h-5 w-5"
                                fill="white"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                width="24"
                                height="24"
                                rx="12"
                                fill="transparent"
                                />

                                <path
                                fill="#ffffff"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                />
                            </svg>
                            </div>
                            <span className="flex justify-center ml-3.5 text-sm text-black">
                            Instagram
                            </span>
                        </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:opacity-75 flex"
                        >
                            {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M23.525 7.067c-.21-.79-.821-1.4-1.578-1.609C20.863 5 12 5 12 5s-8.863 0-9.947.458c-.757.209-1.368.819-1.578 1.609C.118 8.15 0 11.975 0 12s.118 3.85.475 4.933c.21.79.821 1.4 1.578 1.609 1.083.458 9.947.458 9.947.458s8.863 0 9.947-.458c.757-.209 1.368-.819 1.578-1.609C23.882 15.85 24 12.025 24 12s-.118-3.85-.475-4.933zm-15.8 6.8V9.133l5.867 2.867-5.867 2.867z" />
                            </svg> */}
                            <div className="h-7 w-7 bg-red-700 rounded-full flex justify-center items-center">
                            <svg
                                className="w-5 h-5 text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 576 512"
                            >
                                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                            </svg>
                            </div>
                            <span className="flex justify-center ml-3.5 text-sm text-black">
                            YouTube
                            </span>
                        </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:opacity-75 flex"
                        >
                            <div className="h-7 w-7 bg-green-700 rounded-full flex justify-center items-center">
                            <svg
                                className="h-5 w-5 text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512"
                            >
                                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                            </div>
                            <span className="flex justify-center ml-3.5 text-sm text-black">
                            Whatsapp
                            </span>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>

                <p className="text-xs text-black">
                &copy; {fullYear} Karunawellnesshub. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
