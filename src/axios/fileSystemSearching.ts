import axios from "axios";
import {TEST_API_URL} from "../constants.ts";


export interface ParentDirectory {
    parentSeq: number;
    ownerId: string;
}

//post 메서드
const getDirectories = async (parentDirectory: ParentDirectory) => {
    return await axios({
        url: `http://localhost:8080/api/v1/dirs`,
        method: "POST",
        data: parentDirectory,
    }).then((response) => {
        console.log(response);
        return response.data;
    })
}

export {getDirectories}