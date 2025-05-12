import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    return (
        <div className="h-screen flex justify-center items-center flex-col gap-3">
            <h1 className="text-6xl font-extrabold text-zinc-700">Welcome to <span className="text-[#1E3179]">Pay</span><span className="text-[#1BB9FF]">TM</span></h1>
            <p className="italic underline">Signin to Continue</p>
            <button onClick={()=> navigate('/signin')} className="bg-blue-800 text-white text-xl tracking-wide py-2 px-8 rounded-xl border-none">Signin</button>
        </div>
    );
}

export default Home;
