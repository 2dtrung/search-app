import axios from "axios";

export default axios.create({
baseURL: "https://api.unsplash.com",
headers: {
Authorization: "Client-ID m3VNnv6SoZ7b6tMC1zZDw_4pJhDJ3imd07NI_oJvUG8"
}
});