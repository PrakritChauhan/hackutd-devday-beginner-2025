import React from 'react';

const data = [
  {
    "courseCode": "CS 1200",
    "title": "Introduction to Computer Science and Software Engineering",
    "description": "Overview of computer science and software engineering concepts.",
    "creditHours": 2
  }
];

const CourseCard = (props) => {
  return (
    <div className=" bg-white shadow-md rounded-lg overflow-hidden m-10">
        <div>
          <h3 className="text-blue-600 px-8 py-2 pt-6 font-bold text-2xl">
            {props.courseCode}
          </h3>
          <h4 className="px-8 py-2 text-gray-800 font-semibold text-xl">
            {props.title}
          </h4>
          <h5 className="px-8 py-2 text-gray-600">
            {props.description}
          </h5>
          <div className="bg-green-300 w-fit shadow-md rounded-lg overflow-hidden ml-7 m-2 mb-5">
            <h5 className="px-2 text-shadow-green-900">
              {props.creditHours} Credit Hours
            </h5>
          </div>
        </div>
    </div>
  );
};

export default CourseCard;