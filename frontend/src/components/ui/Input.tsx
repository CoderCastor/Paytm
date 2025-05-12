interface inputInterface {
    type : string
    value : string
    placeholder : string
    onChange : ()=>{}
}

function Input ({type,value,onChange,placeholder}:inputInterface){

    return <input className="text-xl border border-zinc-200 py-2 px-3 rounded-xl w-full" type={type || "text"} value={value} onChange={onChange} placeholder={placeholder} />

}

export default Input