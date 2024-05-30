import React, { useEffect, useState } from "react";
import courseListData from "../../dataStore/courseList.json";
import CourseItem from "../../components/CourseItem";

function CourseListPage(props) {
  const [courseInfoData, setCourseInfoData] = useState([]);
  useEffect(() => {
    const response = courseListData;
    setCourseInfoData(response);
  }, []);
  return (
    <div className="container">
      <h3 className="pt-3 mb-3">Выберите интересный вам курс:</h3>
      <div className="row row-cols-auto ">
        {courseInfoData.map((data) => (
          <CourseItem
            key={data.courseId}
            itemID={data.courseId}
            cardName={data.courseName}
            cardDescr={data.courseDescr}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseListPage;
