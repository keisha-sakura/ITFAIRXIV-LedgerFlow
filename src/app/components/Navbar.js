"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import bell from "lucide-react";

export default function NavBar() {
    const pathname = usePathname();

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString("en-US", { 
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
     });
    const formattedDate = time.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="relative flex items-center justify-between px-6 py-4 mt-3 fixed top-0 w-full">
        
            <p className="w-1/5 text-[#241838] font-rajdhani text-3xl">LedgerFlow</p>

            <nav className="font-poppins absolute left-1/2 -translate-x-1/2 flex items-center justify-center bg-[#3E076C] rounded-4xl text-[#F7F4EF] text-sm py-2 px-7 shadow-[0_0_10px_4px_rgba(255,191,71,0.5)]
    ">
                <ul className="flex gap-10 items-center justify-center">
                <li className={pathname === "/Dashboard" ? "font-bold" : ""}>
                    <Link className="hover:font-semibold transition-all" href="/Dashboard">Dashboard</Link>
                </li>

                <li className={pathname === "/transaction" ? "font-bold" : ""}>
                    <Link className="hover:font-semibold transition-all" href="/transaction">Transaction</Link>
                </li>

                <li className={pathname === "/budgeting" ? "font-bold" : ""}>
                    <Link className="hover:font-semibold transition-all" href="/budgeting">Budgeting</Link>
                </li>

                <li className={pathname === "/analyst" ? "font-bold" : ""}>
                    <Link className="hover:font-semibold transition-all" href="/analyst">Analyst</Link>
                </li>

                <li className={pathname === "/profile" ? "bg-[#FFBF47] text-[#3E076C] px-4 py-1 rounded-full font-bold" : "bg-[#FFBF47] text-[#3E076C] px-4 py-1 rounded-full"}>
                    <Link href="/profile">Keikei@gmail.com</Link>
                </li>
                </ul>
            </nav>

            <div className="w-1/5 text-right font-poppins text-sm text-[#241838]">
                <p>Server time: {formattedTime} WIB</p>
                <p>{formattedDate}</p>
            </div>

        </div>
    );
}
