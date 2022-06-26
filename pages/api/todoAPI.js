import axios from "axios";


export const getTodoListAjax = async (page) => {
    const res = await axios.get("http://localhost:8080/guest/todo/list", {params:{page}})

    return res.data
}