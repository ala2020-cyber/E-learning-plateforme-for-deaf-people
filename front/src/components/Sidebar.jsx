import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    
  return (
    <div className="sidebar-formateur wrapper">
    <center className="wrapper" >
      <Link to="/formateur">
        <Button id="addlesson" variant="contained" size="meduim">
          <AddIcon style={{ paddingInline: "2px" }} /> course
        </Button>
      </Link>
      <Link to="/addLesson">
        <Button id="addlesson" variant="contained" size="meduim">
          <AddIcon style={{ paddingInline: "2px" }} /> Lesson
        </Button>
      </Link>
    </center>

    <h3 className="section_title">Courses</h3>
    <section className="courses">
      {/* <center className="section_content"> */}

      {courses.map((item) => (
        <div style={{ marginBlock: "10px" }}>
          <Button variant="outlined" size="meduim">
            {item[0]}
          </Button>

          <button
            className="delete_btn"
            variant="text"
            color="error"
            onClick={() => {
              dispatch(deleteCourse(item[1]));
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      ))}
      {!courses && <p>No course existed yet !</p>}

      <br />
    </section>
  </div>
  );
}

export default Sidebar;
