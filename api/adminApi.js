import axios from "axios";

export const API_URL = "https://react-native-e-commerce-backend.onrender.com";

//get all users
export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/users/`)
        if (response.data.ok === false) {
            return response.data
        }
        return response.data
    } catch (error) {
        console.error(error)
    }
} // work ok

//update by userId: name, email
export const updateUser = async (userId, name, email) => {
    try {
        const response = await axios.put(`${API_URL}/api/users/${userId}`, {name, email});
        const { ok, user } = response.data;
        if (ok) {
           return user
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error).message);
    }
}; //work ok

//delete by userId
export const deleteUser = async (user_id) => {
    try {
        const response = await axios.delete(`${API_URL}/api/users/${user_id}`);
        const { ok } = response.data;
        if (ok) {
           return ok
        } else {
            console.error("Error retrieving user:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error).message);
    }
} //work ok