function Title({
    value,
    color = "black",
    size,
}: {
    value: string;
    color: "black" | "white";
    size: "big" | "medium" | "small";
}) {
    return (
        <p style={getSizeOfFont(size)} className={`${color == "black" ? "text-black" : "text-white"}`}>
            {value}
        </p>
    );
}

const getSizeOfFont = (size : string)=>{
    if(size === 'small') return { fontSize : "15px" }
    else if(size === 'medium') return { fontSize : "30px" }
}

export default Title;
