import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div>
			<div className="grid md:grid-cols-2">
				<div className="bg-[#1F2937] py-[50px] md:py-[96px] text-center md:pl-[457px]">
					<h2 className="text-2xl md:text-[32px] text-white font-medium mb-2 md:mb-6">
						Contact Us
					</h2>
					<p className="text-[16px] md:text-xl text-white font-medium">
						123 ABS Street, Uni 21, Bangladesh
					</p>
					<p className="text-[16px] md:text-xl text-white font-medium">+88 123456789</p>
					<p className="text-[16px] md:text-xl text-white font-medium">
						Mon - Fri: 08:00 - 22:00
					</p>
					<p className="text-[16px] md:text-xl text-white font-medium">
						Sat - Sun: 10:00 - 23:00
					</p>
				</div>
				<div className="bg-[#111827] py-[50px] md:py-[96px] text-center md:pr-[457px]">
					<h2 className="text-2xl md:text-[32px] text-white font-medium mb-2 md:mb-6">
						Follow Us
					</h2>
					<p className="text-[16px] md:text-xl text-white font-medium mb-4 md:mb-8">
						Join us on social media
					</p>
					<div className="flex justify-center gap-8">
						<FaFacebookF className="h-6 w-6 text-white" />
						<FaInstagram className="h-6 w-6 text-white" />
						<FaTwitter className="h-6 w-6 text-white" />
					</div>
				</div>
			</div>
			<div className="bg-[#151515] py-[17px]">
				<p className="text-sm md:text-[18px] text-white text-center">
					Copyright © {currentYear} BistroBoss. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
