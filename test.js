function registerUser(username, password) {
    if (localStorage.getItem(username)) {
        return "Username already exists.";
    }

    localStorage.setItem(username,password);
    return "Registration complete.";
}


const API_BASE_URL = 'https://docs.noroff.dev';

async function registerUser(url, data) {
    try {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        return json;
    }   catch (error) {
        console.log(error);
    }
}

const user = {
    name: 'testUserNr1',
    email: 'testUserNr_1@noroff.no',
    password: 'testUsersPassword',
};

registerUser(`${API_BASE_URL}/docs/v1/social/auth/register`, user);



const API_BASE_URL = 'https://nf-api.onrender.com';

async function registerUser(url, data) {
  try {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

const user = {
  name: document.getElementById ("emailReg"),
  email: 'test-may-fifteen-h@noroff.no',
  password: 'my-new-password',
};

registerUser(`${API_BASE_URL}/api/v1/social/auth/register`, user);