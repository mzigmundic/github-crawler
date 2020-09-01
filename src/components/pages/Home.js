import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";
import Alert from "../layout/Alert";

const Home = () => {
    return (
        <Fragment>
            <Search />
            <Alert />
            <Users />
        </Fragment>
    );
};

export default Home;
