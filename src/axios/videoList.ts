import axios from "axios";
import {API_URL} from "../constants.ts";

async function getDirs() {
    console.log("click")
    try {
        const response = await axios.get(API_URL + "videos/dir")
        console.log(API_URL + "videos/dir")
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
}

async function getFiles() {
    console.log("click")
    try {
        const response = await axios.get(API_URL + "videos/file")
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
}

export {getDirs, getFiles};