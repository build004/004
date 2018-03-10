import React, { Component } from "react";
import LoginPage from "containers/LoginPage/LoginPage";
import MainPage from "containers/MainPage/MainPage";
import SignupPage from "containers/SignupPage/SignupPage";
import UploadPhotoPage from "containers/UploadPhotoPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./App.scss";

const cx = classNames.bind(styles);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={cx("app")}>
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/signup" component={SignupPage} />
                        <Route path="/upload" component={UploadPhotoPage} />
                        {/* Route Page */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
