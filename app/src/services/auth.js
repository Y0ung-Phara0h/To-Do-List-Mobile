import React from 'react'
import axios from 'axios';

const Auth = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/1');
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default Auth