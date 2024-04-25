/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useEffect, useState } from "react";
import catchAsync from "../../../utils/catchAsync";
import axiosInstance from "../../../utils/axiosInstance";
import { useParams } from "react-router-dom";

const SingleApplicationDetail = () => {
  const { reviewId } = useParams();
  console.log(reviewId);
  const [application, setApplication] = useState();
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  useEffect(() => {
    catchAsync(async () => {
      const res = await axiosInstance.get(`/applications/${reviewId}`);
      setApplication(res.data.data);
    })();
  }, [refetchTrigger, reviewId]);

  const refetch = () => {
    setRefetchTrigger((ps) => !ps);
  };

  return (
    <div className="flex flex-col justify-center">
      <div>
        <h1 className="text-lg mt-2">
          <b>Name: </b>
          {application?.ta_applicant?.name}
        </h1>
      </div>
      <div>
        <h1 className="text-lg mt-2">
          <b>Email: </b>
          {application?.ta_applicant?.email}
        </h1>
      </div>
      <div>
        <h1 className="text-lg mt-2">
          <b>Z Number: </b>
          {application?.ta_applicant?.ta_applicant?.z_id}
        </h1>
      </div>
      <div>
        <h1 className="text-lg mt-2">
          <b>CV Link: </b>
          <a
            href={application?.cv_link}
            target="_blank"
            className="underline text-blue-500"
          >
            Link
          </a>
        </h1>
      </div>
      <div>
        <h1 className="text-lg mt-2">
          <b>Course Name: </b>
          {application?.course?.title}
        </h1>
      </div>
      <div>
        <h1 className="text-lg mt-2">
          <b>Subject Name: </b>
          {application?.course?.subject}
        </h1>
      </div>
    </div>
  );
};

export default SingleApplicationDetail;
