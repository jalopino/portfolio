import React, { useEffect } from "react"
import { useState, useRef } from "react"
import "../styles/nav.css"
import Loading from '../assets/loading.svg'
import { animateScroll as scroll } from 'react-scroll';


const Logo = '<Paolo/>'
const scrollToTop = () => {
    scroll.scrollToTop();
 }
const Nav = ({fn, noti, notiStat, closeNoti}: any) => {
    const [openBar, setOpenBar] = useState(false)
    const startUp = 'invisible'
    const [count, setCount] = useState(0)
    const navBox = useRef<HTMLDivElement>(null)
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      });
    const handleOutsideClick = (e: any) => {
        if (navBox.current && !navBox.current.contains(e.target)) {
            setOpenBar(false)
        }
      };
    return(
        <div ref={navBox} className="bg-[#F7F7F7] shadow-xl relative sticky top-0 z-20">
            <div className="py-[1rem] flex flex-row w-[100%] justify-center items-center gap-[50%]">
                <div>
                    <button onClick={scrollToTop} className="font-[gabarito] font-black text-[#606470] text-lg transition-all hover:scale-110 hover:text-black">{Logo}</button> 
                </div>
            {/*Desktop View*/}
                <div className="flex flex-row justify-center items-center gap-[3rem] xs:hidden md:flex">
                    <div className="transition-all hover:scale-110">
                        <button onClick={()=> fn('about')} className="font-[Thasadith] text-[#606470] font-semibold hover:text-black">About</button>
                    </div>
                    <div className="transition-all hover:scale-110">
                        <button onClick={()=> fn('portfolio')} className="font-[Thasadith] text-[#606470] font-semibold hover:text-black">Portfolio</button>
                    </div>
                    <div className="transition-all hover:scale-110">
                        <button onClick={()=> fn('contact')} className="font-[Thasadith] text-[#606470] font-semibold hover:text-black">Contact</button>
                    </div>
                </div>
            {/*Desktop View*/}
            {/*Mobile View*/}
                <div className="md:hidden">
                    <button onClick={()=>{
                        if(openBar) {
                            setOpenBar(false)
                        } else {
                            setOpenBar(true)
                            setCount(count < 1 ? count + 1 : count + 0)
                        }
                    }
                }
                        className="transition-all hover:scale-125 text-[#606470] hover:text-black"><i className="fa fa-bars"></i></button> 
                </div>
            </div>
            {/*Desktop View Notification*/}
            <div className={closeNoti <= 0 || null ? "hidden" : "block"}>
                <div className={noti ? "xs:hidden md:block noti absolute right-0 mt-10 mr-10" : "xs:hidden md:hidden"}>
                    <div className="bg-white flex flex-col w-[30rem] h-[7rem] p-[1rem] border rounded-2xl items-center justify-center shadow-2xl gap-[0.2rem]">
                        <img src={Loading} className="animate-spin h-[2rem]" alt=""/>
                        <div className="font-[Thasadith] text-3xl">
                            Message is being sent.... 
                        </div>
                    </div>
                </div>
                <div className={notiStat !== '' ? "xs:hidden md:block absolute right-0 mt-10 mr-10" : "noticlose absolute right-0 mt-10 mr-10"}>
                    <div className="bg-white flex flex-col w-[30rem] h-[7rem] p-[1rem] border rounded-2xl items-center justify-center shadow-2xl gap-[0.2rem]">
                        <i className={notiStat === 'sent' ? "fa-solid fa-check text-3xl bg-[#3f8f29] p-[1rem] px-[1.2rem] rounded-full" : "fa-solid fa-x text-xl bg-[#de1a24] p-[1rem] px-[1.2rem] rounded-full"}></i>
                        <div className="font-[Thasadith] text-3xl">
                            {notiStat === 'sent' ? 'Message was successfully sent!' : 'Message Failed...'} 
                        </div>
                    </div>
                </div>
            </div>
            {/*Desktop View Notification*/}
            <div className="md:hidden">
                <fieldset disabled={openBar ? false : true} className={count < 1 ? startUp : ''}>
                    <div className={openBar ? 
                    "mobilenav px-[2rem] py-[0.5rem] gap-[0.5rem] flex flex-col absolute right-7 bg-[#F7F7F7] text-start border-solid border-1 border-[#F7F7F7] shadow-2xl rounded-lg mt-[1rem]" : 
                    "mobilenavclose px-[2rem] py-[0.5rem] gap-[0.5rem] flex flex-col absolute right-7 bg-[#F7F7F7] text-start border-solid border-1 border-[#F7F7F7] shadow-2xl rounded-lg mt-[1rem]"}>
                        <div className="transition-all hover:scale-125">
                            <button onClick={()=> fn('about')} className="font-[Thasadith] text-[#606470] font-semibold hover:text-black"><i className="fa fa-person px-[0.5rem]"></i> about</button>
                        </div>
                        <div className="transition-all hover:scale-125">
                            <button onClick={()=> fn('portfolio')} className="font-[Thasadith] text-[#606470] font-semibold hover:text-black"><i className="fa fa-check px-[0.5rem]"></i>portfolio</button>
                        </div>
                        <div className="transition-all hover:scale-125">
                            <button onClick={()=> fn('contact')} className="font-[Thasadith] text-[#606470] font-semibold hover:text-black"><i className="fa fa-phone px-[0.5rem]"></i>contact</button>
                        </div>
                    </div>
                </fieldset>
            </div>
            {/*Mobile View*/}
        </div>
    )
}

export default Nav