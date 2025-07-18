import atas from "@/component/lib/one.json";
const players=({params})=>{
    const data=atas;

return(
    <>
    <h1>{data[params.players-1].des}</h1>
    <image src={data[params.players-1].src}></image>
    </>
)
}
export default players;

