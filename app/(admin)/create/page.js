"use client";
import Link from "next/link";
const create=()=>{
    return(
        <>
        <h1>create Blog</h1>
        <Link href="/update">Update Blog</Link><br></br>
        <Link href="/list">List all blogs</Link>
        </>
    )
}
export default create;