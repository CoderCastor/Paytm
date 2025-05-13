

function Button ({value,OnClick}:{value : string
    OnClick : any,
    
}) {

    return <button className="bg-blue-800 text-white text-xl tracking-wide py-2 px-8 rounded-xl border-none" onClick={()=>OnClick()} >{value}</button>
}

export default Button;