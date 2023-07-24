import React from "react";
import * as F7 from "framework7-react";
import { f7 } from "framework7-react";

const UserInfo = (props) => {
  let users = props.userData;

  const handleClick = (e, id) => {
    // f7.view[0].router.navigate(`/profile/${id}`);

    f7.views.main.router.navigate(`/profile/${id}`);

    // f7.views.main.router.navigate({
    //   name: "profile",
    //   path: `/profile/${id}`,
    // });
  };

  const openConfirm = () => {
    f7.dialog.confirm("Are you sure want to delete?", () => {
      f7.dialog.alert("Deleted!");
    });
  };

  return (
    <>
      {users.map((user) => (
        <tr key={Math.random()}>
          <td className="title-sm">
            <div className="flex items-center align-middle ">
              <div className="flex">
                {user.image && (
                  <img
                    src={user.image}
                    className="small-image"
                    alt=""
                    loading="lazy"
                  />
                )}
              </div>
              <div className="flex ">
                {user.firstName + " " + user.lastName}
                {/* <p className="title-xxs text-black-300">{user.username}</p> */}
              </div>
            </div>
          </td>
          <td className="text-center title-xs">{user.id}</td>
          <td className="title-xs">{user.age}</td>
          <td className="title-xs">{user.email}</td>
          <td>
            <div className=" phone-number title-xs">{user.phone}</div>
          </td>
          <td className="title-xs">{user.company.title}</td>
          <td className="title-xs">{user.company.department}</td>

          <td className=" ">
            <div className="flex">
              <F7.Button
                raised
                fill
                small
                className="icon-btn primary-light-btn"
                IconColor={"primary"}
                onClick={(action = "Edit", id = user.id) =>
                  handleClick(action, user.id)
                }
              >
                <i className="f7-icons icon-size">pencil</i>
              </F7.Button>
              <F7.Button
                raised
                fill
                small
                className="icon-btn red-btn"
                IconColor={"red"}
                onClick={openConfirm}
              >
                <i className="f7-icons icon-size">trash_fill</i>
              </F7.Button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserInfo;
