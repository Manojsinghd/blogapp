'use client';

import Link from "next/link";
import atas from "@/component/lib/one.json";
import styles from "./Blog.module.css"
const Blog=()=>{
    let a=atas;
    return(
        <>
        <div className={styles["body"]}>
            <h1 className={styles["up"]}>RCB Players</h1>
        <div className={styles["one"]}>
            {
            a.map((e)=>(
                <Link key={e.id} href={`/Blog/${e.id}`} className={styles["htitle"]}>
                <image src={e.src} className={styles['image']}></image>
                <div className={styles["title"]} >{e.title}</div>
                </Link>
            ))
        }
        </div>
        </div>
        </>
    )
}
export default Blog;