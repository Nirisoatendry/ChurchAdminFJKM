import axios from "axios";
const ajout =  async (url,data) => {
    let resp=""
    try {
        resp =  await axios.post(url,data);
    } catch (error) {
        resp =  error
    }
    return resp
}


export {ajout}