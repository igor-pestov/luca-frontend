import axios from "axios";

const URL = "http://localhost:4000";
async function addQuestion(payload) {
  const data = await axios.post(URL + `/add-question?idUser=602a611b7c1a98554dd376bf`, payload);
  console.log("asdasdadasd",data)
  return data;
}
export default {
  addQuestion,
};
