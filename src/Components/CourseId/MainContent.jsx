import React, { useEffect, useState } from "react";
import SideBarContent from "./SideBarContent";
import LandingPage from "./LandingPage";
import Content from "./Content";
import Instructor from "./Instructor";
import Reviews from "./Reviews";
import Courses from "../Courses";
import useApiHook from "../../customHooks/useApiHook";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../../Styles/LandingPage.css";
import { BASE_URL } from "../../helper";
import axios from "axios";
import { useSelector } from "react-redux";
import Footer from "../Footer";
import RateCourseModal from "../../Modals/RateCourseModal";
import FeatureReviews from "./FeatureReview/FeatureReviews";
const MainContent = () => {
  const [showRateModal, setShowRateModal] = useState(false);

    const _id = useSelector((state)=>state.auth.user?._id ?? "6597adac3ced8d07a6d9355f")


  const { id } = useParams();


  const {
    data: allData,
    error,
    loading,
  } = useApiHook(`${BASE_URL}/course/find/all`, "GET");
  const {
    data,
    error: getCourseError,
    loading: getLoadingError,
  } = useApiHook(`${BASE_URL}/course/getByid/${id}`, "GET");
  console.log("tehse are courses",data)

  const {
    data:userRated,
    error: getUserRatedError,
    loading: getuserLoadingError,
  } = useApiHook(`${BASE_URL}/course/haveUserRated/${_id}/${id}`, "GET");
  console.log("Have user rated",userRated)

  useEffect(()=>{
    if(userRated?.userHaveRated === true){
setShowRateModal(false)
    }
    else{
   
      setTimeout(() => {
        if(userRated?.userHaveRated === false){
        setShowRateModal(true);
        }
    }, 2000);
     
    }
  },[userRated])

  const userId = data?.course?.userId?._id
  console.log("This is user id",userId)
  //creating an alias for error and loading --> alias is an alternative orshort name for an identifier,reference the same entity..
  const {data:courseData,error:courseError,loading:courseLoading} = useApiHook(`${BASE_URL}/course/createrCourse/${userId}`)
  return (
    <div className=" px-5 lg:px-40 h-80  bg-gray-800 lg:h-96  w-full">
      {showRateModal && (
        <RateCourseModal
          _id={_id}
          id={id}
          setShowRateModal={setShowRateModal}
        />
      )}
      <div className="flex py-5 h-96">
        {getLoadingError ? (
          <p>Loading...</p>
        ) : getCourseError ? (
          <p>getCourseError.message</p>
        ) : (
          <div className="flex flex-col h-60  md:h-72 lg:h-80 justify-around text-white">
            <span>Developement == Web Developer</span>
            <h2 className="text-3xl lg:text-4xl font-bold learnings ">
              {data.course.title}
            </h2>
            <span className="text-base lg:text-2xl  w-fit md:w-3/4">
              {data.course.subtitle}
            </span>
            <div className="flex items-center gap-3">
              <span>Created by: {data.course.author}</span>
              <small className="font-bold">
                {data.course.enrollment} students
              </small>
            </div>
            <span>
              Created on = {new Date(data.course.createdAt).toDateString()}
            </span>
            <label className="flex">
              Average Rating :
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={24}
                  color={
                    star <= data?.course.averageRating ? "#ffc107" : "#e4e5e9"
                  } //sets the color to yellow if the value of stai is less or equal to userrating
                  style={{ marginRight: "5px", cursor: "pointer" }}
                />
              ))}{" "}
              {data?.course.averageRating}{" "}
            </label>
          </div>
        )}

        <SideBarContent
          price={data?.course.price}
          image={data?.course.img}
          includes={data?.course.includes}
     courses={data?.course}
        />
      </div>
      <LandingPage lessons={data?.course.whatYouWillLearn} />

      <Content
        curriculum={data?.course.curriculum}
        requirements={data?.course.requirements}
        courseDesc={data?.course.desc}
      />
<FeatureReviews
courseId={id}/>
      <Instructor
        author={data?.course?.author}
        image={data?.course?.userId?.image}
        biography={data?.course?.userId?.biography}
        id={data?.course?.userId?._id}
        desc={data?.course?.desc}
      />

      <Reviews
      createrId={userId} />

      <Courses
        header={`More Courses By ${data?.course?.author}..`}
        courseInfo={courseData?.getCourses}
        loading={loading}
      />
    </div>
  );
};

export default MainContent;
