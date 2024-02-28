import { useMemo } from "react";

export function useLoadList() {
    const boardList = useMemo(() => {
        const lsboardList = localStorage.getItem(("boardList"));
        return !lsboardList ? [] : JSON.parse(lsboardList);
    },[])

    const lastIndex = boardList.length -1;
    const firstId = lastIndex < 0 ? 0 : boardList[0].boardId;
    const lastId = lastIndex < 0 ? 0 : boardList[lastIndex].boardId;
    const size = boardList.length;

    return { boardList , size , firstId , lastId } ;
}