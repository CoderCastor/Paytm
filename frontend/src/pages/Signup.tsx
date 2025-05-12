import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function Signup() {
    const shadow = `shadow-[0_1px_12px_rgba(255,255,255,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]`;

    return (
        <div className="h-screen flex justify-center items-center bg-zinc-100">
            <div
                className={`flex flex-col justify-center items-center w-2/3 lg:w-2/6 gap-4 px-8 py-10 ${shadow} rounded-2xl bg-white`}
            >
                <h3 className="text-3xl font-semibold">Signup</h3>
                <div className="flex gap-4">
                    <Input
                        type="text"
                        placeholder="First Name"
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
                <Input
                    type="text"
                    placeholder="Username"
                />
                <Input
                    type="email"
                    placeholder="Email"
                />
                <Input
                    type="password"
                    placeholder="Password"
                />
                <Button value="Signup" />
                <p className="italic">Already have an account ? <Link className="text-blue-500" to={'/signin'}>Signin</Link></p>
            </div>
        </div>
    );
}

export default Signup;
