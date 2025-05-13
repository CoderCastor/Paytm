interface inputInterface {
    type : string
    value : string
    placeholder : string
    name : string
    Ref : any
}

function Input ({type,value,name,placeholder,Ref}:inputInterface){

    return <input ref={Ref} name={name} className="text-xl border border-zinc-200 py-2 px-3 rounded-xl w-full" type={type || "text"} value={value} placeholder={placeholder} />

}

export default Input
