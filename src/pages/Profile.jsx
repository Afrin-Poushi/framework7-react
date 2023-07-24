import React, { useEffect, useState } from "react";

import * as F7 from "framework7-react";
import { f7 } from "framework7-react";

import store from "../store";
import InputLabel from "../components/InputLabel";

const Profile = (props) => {
  const [user, setUser] = useState([]);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    dob: new Date(),
    company: "",
    team: "",
    position: "",
  });

  useEffect(() => {
    setValues({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      address: user?.address?.address,
      city: user?.address?.city,
      state: user?.address?.state,
      dob: user.birthDate || new Date(),
      company: user?.company?.name,
      team: user?.company?.department,
      position: user?.company?.title,
    });
  }, [user]);

  const userId = props.f7route.params.id;
  let profileData = store.getters.profileData;

  const fetchSingleUser = async () => {
    await store.dispatch("getProfile", userId);
    setUser(...profileData.value);
  };

  /** TRIGGERS WHENEVER SUBMITTED AND SET THE VALUE IN USESTATE */
  const handleChange = (e, field) => {
    const id = e.target.id;
    const value = e.target.value;
    console.log({ field, value });
    setValues({ ...values, [id]: value });
    console.log(values);
  };
  /** TRIGGERS WHENEVER SUBMITTED  */
  const handleSubmit = (e) => {
    e.preventDefault();
    // const updateSingleUser = async () => {
    //   try {
    //     console.time("Time Taken to update");
    //     const res = await axios.put(`https://dummyjson.com/users/${userId}`, {
    //       ...values,
    //     });
    //     let user = res.data;
    //     console.log(user);

    //     console.timeEnd("Time Taken to update");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // updateSingleUser();
    // dispatch(editProfile(values, userId));
    // setUser(...profileData);
  };

  const goBackToHome = () => {
    f7.views.main.router.navigate(`/`);
  };

  // converting required date format
  const convertDate = (date) => {
    date = new Date(date);
    return `${date.getFullYear()}-${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
  };

  return (
    <F7.Page name="profile" onPageInit={fetchSingleUser}>
      <F7.Navbar
        title="Profile"
        subtitle="Edit your profile"
        backLink="Home"
        onBackClick={goBackToHome}
      />

      {/* Edit section */}
      <F7.Card className="p-4 mx-auto">
        <h4>Edit Profile</h4>
        {/* Profile Image */}
        <div className="relative">
          <div className="w-36 h-36 bg-primary-lighter mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-8 flex items-center justify-center">
            {
              <img
                className="w-25 h-25 -top-2 rounded-full"
                src={user?.image}
                alt="Profile Pic"
              ></img>
            }
          </div>
        </div>

        {/* form starts */}
        <F7.Block>
          <form onSubmit={handleSubmit} className="relative mt-32">
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <InputLabel
                label={"First Name"}
                id="firstName"
                type="text"
                value={values.firstName}
                on_change={(e = this) => handleChange(e)}
              ></InputLabel>

              <InputLabel
                label="Last Name"
                id="lastName"
                type="text"
                value={values.lastName}
                on_change={(e = this) => handleChange(e)}
              ></InputLabel>

              <InputLabel
                label="Email Address"
                id="email"
                type="email"
                value={values.email}
                on_change={(e = this) => handleChange(e)}
              ></InputLabel>

              <InputLabel
                label="Phone"
                id="phone"
                type="tel"
                value={values.phone}
                on_change={(e = this) => handleChange(e)}
              ></InputLabel>

              <InputLabel
                label="Address"
                id="address"
                type="text"
                value={values.address}
                on_change={(e = this) => handleChange(e)}
              ></InputLabel>

              <InputLabel
                label="City"
                id="city"
                type="text"
                value={values.city}
                on_change={(e = this) => handleChange(e)}
              ></InputLabel>

              <InputLabel
                label="State"
                id="state"
                type="text"
                value={values.state}
                on_change={(e = this) => handleChange(e)}
              ></InputLabel>

              <InputLabel
                label="Birth Date"
                id="bod"
                type="date"
                value={convertDate(values.dob ? values.dob : new Date())}
                on_change={(e = this) => handleChange(e)}
              ></InputLabel>

              <InputLabel
                label="Company"
                id="company"
                type="text"
                value={values.company}
                on_change={(e = this) => handleChange(e)}
              ></InputLabel>

              <InputLabel
                label="Team"
                id="team"
                type="text"
                value={values.team}
                on_change={(e = this) => handleChange(e)}
              ></InputLabel>

              <InputLabel
                label="Position"
                id="position"
                type="text"
                value={values.position}
                on_change={(e = this) => handleChange(e)}
              ></InputLabel>

              {/* file upload start */}
              <div className="border-2 border-gray-500 border-dashed px-6 pt-5 pb-6">
                <label
                  className="block text-sm font-medium text-gray-800"
                  htmlFor="file_input"
                >
                  Upload Image
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                />
                <p className="text-xs text-gray-900 mt-1" id="file_input_help">
                  SVG, PNG, JPG or GIF
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary-light focus:outline-none">
                Save
              </button>
            </div>
          </form>
        </F7.Block>
      </F7.Card>
    </F7.Page>
  );
};

export default Profile;
