export default function authHeader() {
    const accessToken = sessionStorage.getItem('TOKEN');
    if (accessToken) {
      return { 'Authorization': "Bearer " + accessToken };
    } else {
      return {};
    }
  }