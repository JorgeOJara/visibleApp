import axios from 'axios';
export const postData =  async (url, obj) => {
    try {
      const response = await axios.post(url, obj);
      console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error Data:", error.response.data);
        console.error("Error Status:", error.response.status);
        console.error("Error Headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error Request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error Message:', error.message);
      }
      console.error("Error Config:", error.config);
      return null; // or you can return error message or status based on your app's needs
    }
  }
  