

export default function ButtonBlue (props:any){
    console.log(props);
    return <button onClick={props.onClick}>{props.children}</button>
}

