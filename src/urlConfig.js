const baseUrl = "https://joy-flip-back.herokuapp.com";
// const baseUrl = "http://localhost:2000";

export const api = `${baseUrl}/api`;
export const genPublicUrl = (fileName) => {
  return `http://localhost:2000/public/${fileName}`;
};
