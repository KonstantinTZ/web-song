import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseListData from "../../dataStore/courseList.json";
import SongItem from "../../components/SongItem";

function SongListPage() {
  const params = useParams();
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const response = courseListData.find((item) => item.courseId === params.id);
    setCourseData(response);
  }, [params.id]);
  return (
    <div className="container">
      <h3>Вы выбрали курс: {courseData.courseName}</h3>
      <h4 className="pt-3 mb-3">Выберите композицию:</h4>
      <div className="row row-cols-auto ">
        {courseData.songList?.map((data) => (
          <SongItem
            key={data.songId}
            itemID={data.songId}
            cardName={data.songName}
            cardDescr={data.songDescr}
          />
        ))}
      </div>
    </div>
  );
}

export default SongListPage;
