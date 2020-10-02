import React from "react";
import "./comingsoon.css";
import Page from "./page";
import BlogCard from "components/Blog/BlogCard";

export default class Blog extends React.Component {
  render() {
    return (
      <Page>
        <BlogCard />
      </Page>
    );
  }
}
