import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [studentdetails, setStudentDetails] = useState([]);
  useEffect(() => {
    axios
      .get("https://68495a7245f4c0f5ee71101b.mockapi.io/studentdetails")
      .then((res) => {
        console.log(res.data);
        setStudentDetails(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const DeleteRecord = (id) => {
    console.log(id, "deleted successfully");
    if (window.confirm("R u sure u want to delete")) {
      axios
        .delete(
          `https://68495a7245f4c0f5ee71101b.mockapi.io/studentdetails/${id}`
        )
        .then(() => {
          alert("Successfully Deleted");
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    }
  };

  const UpdateRecord = (id, name, mail, pswd) => {
    console.log(id, name, mail, pswd);
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", mail);
    localStorage.setItem("pswd", pswd);
  };
  return (
    <>
      <h1>welcome to the read page</h1>
      <div className="container">
        <button className="btn btn-info">
          <Link to={"/"}>Add New+</Link>
        </button>
        <table className="table bg-warning table-bordered text-white">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>OP</th>
          </tr>
          {studentdetails.map((student) => {
            return (
              <>
                <tr>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.mail}</td>
                  <td>{student.pswd}</td>
                  <td>
                    <Link to={"/update"}>
                      <button
                        className="btn bg-primary"
                        onClick={() =>
                          UpdateRecord(
                            student.id,
                            student.name,
                            student.mail,
                            student.pswd
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      className="btn bg-danger"
                      onClick={() => DeleteRecord(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Read;
