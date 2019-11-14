import Axios from "axios";

const KEY = "d5bfe8a65a2dce437fd2e6c635989395";

export default Axios.create({
	baseURL: "https://api.openweathermap.org/data/2.5/",
});
