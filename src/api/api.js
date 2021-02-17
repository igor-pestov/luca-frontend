import axios from "axios";

const URL = "http://localhost:4000";
async function addQuestion(payload) {
  const data = await axios.post(URL + `/add-question?idUser=602a611b7c1a98554dd376bf`, payload);
  return data;
}
async function getAllQuestions() {
    const data = await axios.get(URL + `/questions`);
    return data;
  }
async function getUserInfo(payload) {
    const data = await axios.get(URL + `/get-user-info?idUser=${payload}`);
    return data;
  }
  async function deleteQuestion(payload) {
    const data = await axios.delete(URL + `/delete-question?idQuestion=${payload}`);
    return data;
  }
  async function editQuestion(id, payload) {
    const data = await axios.post(URL + `/edit-question?idQuestion=${id}`, payload);
    return data
  }
export default {
  addQuestion,
  getAllQuestions,
  getUserInfo,
  deleteQuestion,
  editQuestion
};
