import { postUser } from "../../utils/request";

export const postUserAccount = async (data) => {
    const result = await postUser("api/user/register", data);
    return result;
};

export const postUserLogin = async (data) => {
    const result = await postUser("api/user/login", data);
    return result;
};


