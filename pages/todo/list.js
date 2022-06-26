import React from 'react';
import {useRouter} from "next/router";
import {getTodoListAjax} from "../api/todoAPI";
import useSWR from "swr";
import Layout1 from "../../components/templates/Layout1";
import TodoList from "../../components/todo/TodoList";
import TodoPagination from "../../components/todo/TodoPagination";

const fetcher = (pageNum) => getTodoListAjax(pageNum)

const List = () => {

    const router = useRouter()

    const page = router.query.page|| 1

    console.log("page", page)

    const {data, error} = useSWR(page, fetcher)

    console.log(data, error)

    if(!data){
        return <h1>Loading....</h1>
    }

    return (
        <Layout1>
          <h1>Todo List</h1>
          <TodoList todos = {data.dtoList}></TodoList>
          <TodoPagination {...data}></TodoPagination>
        </Layout1>
    );
};

export default List;