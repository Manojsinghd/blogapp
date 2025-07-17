import atas from "@/component/lib/one.json"
const players=({params})=>{
    const data=atas;

return(
    <>
    <h1>{data[params.players-1].des}</h1>
    <img src={data[params.players-1].src}></img>
    </>
)
}
export default players;

