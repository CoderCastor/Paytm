import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function Signin() {

   const shadow = `shadow-[0_1px_12px_rgba(255,255,255,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]`;

    return (
        <div className="h-screen flex justify-center items-center bg-zinc-100">
            <div className={`flex flex-col justify-center items-center w-2/3 lg:w-2/6 gap-6 px-8 py-8 ${shadow} bg-white rounded-2xl`}>
            <h3 className="text-3xl font-semibold">Signin</h3>
                <Input
                    type="text"
                    placeholder="Username or Email"
                />
                <Input
                    type="password"
                    placeholder="Password"
                />
                <Button value="Signin" />
                <p className="italic">Don't have an account ? <Link className="text-blue-500" to={'/signup'}>Signup</Link></p>
            </div>
        </div>
    );
}

export default Signin;
