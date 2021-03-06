import axios from "axios";

const API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

export default axios.create({
    baseUrl: "https://translation.googleapis.com/language/translate/v2",
    params: {
        key: API_KEY
    }
});