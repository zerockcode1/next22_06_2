import React from 'react';
import {useRouter} from "next/router";

const TodoPagination = ({start,end,prev,next}) => {

    const router = useRouter()
    const pageArr = Array.from({length:(end-start +1)}, (v,i) => i+ start )

    return (
        <div>
            <ul style={{display:'flex', listStyle:'none'}}>
                {prev ? <li><h4 onClick={() => router.push({pathName:"/todo/list", query:{page: start-1 }}) }>PREV</h4></li>:<></>}
                {pageArr.map(pageNum => <li key={pageNum} onClick={() => router.push({pathName:"/todo/list", query:{page: pageNum }}) } ><h4>{pageNum}</h4></li>)}
                {next ? <li><h4  onClick={() => router.push({pathName:"/todo/list", query:{page: end + 1 }}) } >NEXT</h4></li>:<></>}
            </ul>
        </div>
    );
};

export default TodoPagination;