export default function Header() {
    return (   
        <div className="flex flex-col items-center text-center">
            <header className="font-syne text-[#3E076C] text-5xl font-bold mt-10 w-full">
                Welcome Back, Kiwi! Your Ledger is Secure.  <br></br>
                Let's Keep that Budget Score Optimal.
            </header>

             <p className="font-poppins text-xl mt-5">
                The future of Finance is Automated.
                Stop Tracking, Start Flowing.</p>

             <div className="flex felx-col items-center gap-5">
                <button className="bg-[#FFBF47] text-[#241838] font-syne px-6 py-3 rounded-full font-bold mt-5">
                    Explore Full FLow
                </button>

                <button className="text-[#241838] border-[#FFBF47] border-2 font-syne px-7 py-3 rounded-full font-bold mt-5">
                    Create Budget
                </button>
             </div>

             <p className="font-syne text-xl font-semibold mt-5">
                The Full Data Story is Unfolding. <br></br>
                Your AI-Driven Metrics are Logged and ready for instant analysis below.
             </p>
        </div>
    );
}