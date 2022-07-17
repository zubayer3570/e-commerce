import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
    const [searchText, setSearchText] = useState()
    const router = useRouter()
    const navigateToSearchPage = () => {
        router.push(`/searchResult?searchText=${searchText}`)
    }
    return (
        <div className="navbar bg-base-100 w-full">
            {/* navbar start */}
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            {/* navbar end */}
            <div className="navbar-end">
                <ul tabIndex="0" className="menu menu-horizontal hidden lg:flex p-0">
                    <li><Link href='/'><a>Home</a></Link></li>
                    <li><Link href='/'><a>Cart</a></Link></li>
                </ul>
                <label htmlFor="searchModal" className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </label>
                {/* dropdown menu */}
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href='/'><a>Home</a></Link></li>
                        <li><Link href='/'><a>Cart</a></Link></li>
                    </ul>
                </div>
            </div>
            {/* modal */}
            <input type="checkbox" id="searchModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box flex flex-col lg:flex-row justify-center">
                    <label htmlFor="searchModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input onChange={(e) => setSearchText(e.target.value)} name="searchText" type="text" className="input input-bordered m-4" />
                    <label htmlFor="searchModal" onClick={navigateToSearchPage} className="btn m-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </label>
                </div>
            </div>
        </div >
    );
};

export default Navbar;