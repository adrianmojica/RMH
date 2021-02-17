import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

class RMHApi {

  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.getItem('token');

    try {
      return (await axios({
        method: verb,
        url: `${BASE_URL}/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData})).data;
    } catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async login(email, password) {
    const res = await this.request('login', { email, password }, 'post');
    return res;
  }
  
  static async getUser(id) {
    
    const res = await this.request(`users/${id}`);
    return res;
  }

  static async getTherapist(id) {
    const res = await this.request(`therapists/${id}`);
    return res;
  }

  static async registerUser(data) {
    const res = await this.request('register', data, 'post');
    return res;
  }

  static async updateUser(id, data) {
    console.log(id,'HERE IT IS UPDATE', id , data);
    const res = await this.request(`users/${id}`, data, 'patch');
    return res;
  }

  static async deleteUser(id) {
    const res = await this.request(`users/${id}`, {}, 'delete');
    return res;
  }

  static async getEntry(id) {
    const res = await this.request(`entries/${id}`);
    return res.guide;
  }

  static async getEntries(data) {
    console.log('get Entries from user with id ', data);
    const res = await this.request('entries', data, 'get');
    return res;
  }

  static async registerEntry(data) {
    console.log('register Entry');
    const res = await this.request('entries', data, 'post');
    return res;
  }

//   static async updateGuide(id, data) {
//     const res = await this.request(`guides/${id}`, data, 'patch');
//     return res;
//   }

//   static async deleteGuide(id) {
//     const res = await this.request(`guides/${id}`, {}, 'delete');
//     return res;
//   }

}

export default RMHApi;