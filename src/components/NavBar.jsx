import React from "react";
import BlackIcon from "../logos/BlackIcon";
//import { useRef } from "react";


function NavBar(){

	const bodyScroll = () =>{
		const middleSection = document.getElementById("Intro");
		middleSection.scrollIntoView({behavior:"smooth"});
	}

	const contactScroll = () => {
		const contactSection = document.getElementById("Contact");
		contactSection.scrollIntoView({behavior:"smooth"});
	}

	const communityScroll = () => {
		const communityScroll = document.getElementById("Community");
		communityScroll.scrollIntoView({behavior:"smooth"});
	}

	return (
		<header className="h-15 w-full flex items-center fixed left-0 top-0 bg-black">
			<div className="">
			<BlackIcon></BlackIcon>
			</div>
			<div className="w-full">
				<button className="text-slate-300 hover:text-white hover:cursor-pointer" onClick={bodyScroll}>
			Home 
			</button>
				<button className="ml-20 text-slate-300 hover:text-white hover:cursor-pointer">
			GitHub
			</button>
				<button className="ml-20 text-slate-300 hover:text-white hover:cursor-pointer" onClick={communityScroll}>
			Community
			</button>
				<button className="ml-20 text-slate-300 hover:text-white hover:cursor-pointer" onClick={contactScroll}>
			Contact us
			</button>
			</div>
		</header>
	)
}

export default NavBar;
