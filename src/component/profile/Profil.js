import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const handelClick = () => {
    props.handelName(props.fullName);
  };
  console.log(props);
  return (
    <div className="blog_post">
      <div className="img_pod">{props.children}</div>
      <div className="container_copy">
        <h3>{props.fullName}</h3>
        <h1>{props.profession}</h1>
        <p>{props.bio}</p>
        <a className="btn_primary" href="#!" onClick={handelClick}>
          Click Here
        </a>
      </div>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  handelName: PropTypes.func.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};
Profile.defaultTypes = {
  fullName: "this is the full name of this profile user",

  bio: "this is the description of the user name",
  profession: "your profession is ",
};
export default Profile;