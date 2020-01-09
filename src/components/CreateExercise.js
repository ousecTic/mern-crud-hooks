import React, { useState, useEffect } from "react";

const CreateExercise = () => {
  const [allUsername, setAllUsername] = useState([]);
  const [username, setUsername] = useState("");

  async function getData() {
    const res = await fetch("http://localhost:5000/users/all-users");
    const data = await res.json();
    setAllUsername(data);
  }

  useEffect(() => {
    getData();
  }, []);

  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState("");

  const onSubmitForm = e => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date
    };

    fetch(`http://localhost:5000/exercise/create-exercise`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(exercise)
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
      {/*<div class="form-group">
        <label>Username</label>
        <input
          type="text"
          class="form-control"
          placeholder="username ..."
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
      </div> */}
      <div className="form-group">
        <label>Username</label>
        <select
          class="form-control"
          onChange={e => setUsername(e.target.value)}
          value={username}
        >
          <option>User ...</option>
          {allUsername.map(user => (
            <option value={user.username}>{user.username}</option>
          ))}
        </select>
      </div>

      <div class="form-group">
        <label>Description</label>
        <input
          type="text"
          class="form-control"
          placeholder="description"
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div class="form-group">
        <label>Duration</label>
        <input
          type="number"
          class="form-control"
          placeholder="duration"
          onChange={e => setDuration(e.target.value)}
          value={duration}
        />
      </div>
      <div class="form-group">
        <label>Date</label>
        <input
          type="date"
          class="form-control"
          placeholder="date"
          onChange={e => setDate(e.target.value)}
          value={date}
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreateExercise;
