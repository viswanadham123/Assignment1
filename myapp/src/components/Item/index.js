const Item=(props)=>{
 const eachItem=props
 const {name,time}=eachItem
 return (
    <div>
        <p>name:{name}</p>
        <p>time:{time}</p>
    </div>
 )
}
export default Item