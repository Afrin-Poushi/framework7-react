import React, { useState } from "react";
import { Page, Navbar, Card } from "framework7-react";
import * as F7 from "framework7-react";

import store from "../store";
import UserInfo from "../components/UserInfo";

const Dashboard = () => {
  const [userInfoLoaded, setUserInfoLoaded] = useState(false);

  // retrieve "users" getter handler value. Initially empty array
  let users = store.getters.users;
  let loading = store.getters.setLoading;

  const fetchAllUsers = async () => {
    await store.dispatch("getUsers");
    setUserInfoLoaded(loading.value);
  };

  const onPageInit = () => {
    console.log("onPageInit");
  };

  const clearPreviousUser = () => {
    console.log("onPageReinit");
  };

  return (
    <Page
      name="home"
      onPageInit={onPageInit}
      onPageBeforeIn={fetchAllUsers}
      onPageReinit={clearPreviousUser}
    >
      <Navbar title="Dashboard" className="title-xl" />
      <br />
      <Card raised>
        <F7.CardHeader className="title-lg">
          Employees
          <F7.Button fill className="primary-btn title-lg">
            Add<i className="f7-icons ">plus</i>
          </F7.Button>
        </F7.CardHeader>
        <F7.CardContent>
          <F7.Card className="data-table">
            <table>
              <thead>
                <tr>
                  <td className="subtitle-1">
                    Name <i className="f7-icons">chevron_down</i>
                  </td>
                  <td className="subtitle-1">
                    Emp id <i className="f7-icons">chevron_down</i>
                  </td>
                  <td className="subtitle-1">
                    Age <i className="f7-icons">chevron_down</i>
                  </td>
                  <td className="subtitle-1">
                    Email <i className="f7-icons">chevron_down</i>
                  </td>
                  <td className="subtitle-1">
                    Phone <i className="f7-icons">chevron_down</i>
                  </td>
                  <td className="subtitle-1">
                    Position <i className="f7-icons">chevron_down</i>
                  </td>
                  <td className="subtitle-1">
                    Team <i className="f7-icons">chevron_down</i>
                  </td>
                  <td className="subtitle-1">Action</td>
                </tr>
              </thead>
              <tbody>
                {/* add user info component when rendering is finish */}
                {userInfoLoaded ? (
                  <UserInfo userData={users.value} />
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      <span>
                        <F7.Button preloader loading={true} small>
                          Load
                        </F7.Button>
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </F7.Card>
        </F7.CardContent>
      </Card>

      <br />
    </Page>
  );
};

export default Dashboard;
