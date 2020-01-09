import React, { useState } from "react";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const onSubmitForm = e => {
    e.preventDefault();

    const user = {
      username
    };

    console.log(username);

    fetch("http://localhost:5000/users/create-user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        window.location = "/";
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <form className="mt-5" onSubmit={onSubmitForm}>
      <div class="form-group">
        <label>Username</label>
        <input
          type="text"
          class="form-control"
          placeholder="username ..."
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreateUser;
