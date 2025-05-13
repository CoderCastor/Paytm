import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useEffect, useRef, useState } from "react";

interface interfaceSignin {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

function Signup() {
    const shadow = `shadow-[0_1px_12px_rgba(255,255,255,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]`;

    const [formData, setFormData] = useState<interfaceSignin>({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
    });

    const firstNameRef = useRef("")
    const lastNameRef = useRef("")
    const usernameRef = useRef("")
    const emailRef = useRef("")
    const passwordRef = useRef("")
    
    const handleSubmit = () => {
        console.log("hi")
        console.log(firstNameRef.current)
    }

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
                        name="firstName"
                        Ref={firstNameRef}
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        Ref={lastNameRef}
                    />
                </div>
                <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    Ref={usernameRef}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    Ref={emailRef}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    Ref={passwordRef}
                />
                <Button value="Signup" OnClick={handleSubmit} />
                <p className="italic">
                    Already have an account ?{" "}
                    <Link
                        className="text-blue-500"
                        to={"/signin"}
                    >
                        Signin
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
