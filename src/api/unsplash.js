import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID p8PiVVLcX7nvLBnZcYBVI4GbLvFaN9qbK5JnGwKgX48"
    }
});

