import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setDefaultLocale } from "react-datepicker";

const Exercise = props => {
  console.log(props);
  return (
    <Fragment>
      {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
      <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date}</td>
        <td>
          <Link to={`exercise/${props.exercise._id}`}>Edit</Link> |{" "}
          <a
            href="#"
            onClick={() => {
              props.deleteExercise(props.exercise._id);
            }}
          >
            delete
          </a>
        </td>
      </tr>
    </Fragment>
  );
};

const ListExercise = () => {
  const [allExercise, setAllExercise] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchData() {
    const res = await fetch("http://localhost:5000/exercise/all-exercise");
    const data = await res.json();
    setAllExercise(data);
  }

  const deleteExercise = id => {
    fetch("http://localhost:5000/exercise/" + id)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));

    setAllExercise(allExercise.filter(el => el._id !== id));
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  console.log(allExercise);

  return (
    <Fragment>
      <h2 className="mt-5">Exercise Tracker List</h2>
      <p>Below are all the exercise for all user on this platform</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allExercise.map(data => (
            <Exercise
              exercise={data}
              id={data.id}
              deleteExercise={deleteExercise}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListExercise;
