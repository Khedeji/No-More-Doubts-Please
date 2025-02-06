import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store.tsx";
import createQuestion from "../Redux/reducers/question_action.tsx";

const AskQuestion = () => {

    const Navigate = useNavigate();
    const dispatch :AppDispatch =  useDispatch();
    const ref = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    if(!localStorage.getItem("token")){
        alert("Please Login to Ask Question");
        Navigate("/login")
        return;

    }
    e.preventDefault();
    // const url = "http://localhost:5000/api/questions/createQuestion";
    // const body = formData;
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "auth-token" : localStorage.getItem("token") ?? ""
    //   },
    //   body: JSON.stringify(body),
    // };
    // options.headers["auth-token"] = options.headers["auth-token"].replaceAll('"',"");
    // console.log("auth token :",options.headers["auth-token"]);
    // const response = await fetch(url, options);
    // const data = await response.json()
    // console.log(data)
    // console.log("Form Data Submitted:", formData);
    dispatch(createQuestion(formData));
    if(ref.current){
        ref.current.click();
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 mt-3">
          <h3 className="text-center">Ask a New Question</h3>
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter question title"
                required
              />
            </div>

            {/* Body */}
            <div className="mb-3">
              <label className="form-label">Body</label>
              <textarea
                className="form-control"
                name="body"
                value={formData.body}
                onChange={handleChange}
                placeholder="Describe your question..."
                rows="4"
                required
              ></textarea>
            </div>

            {/* Tags */}
            <div className="mb-3">
              <label className="form-label">Tags</label>
              <input
                type="text"
                className="form-control"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Enter tags (comma separated)"
              />
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button ref={ref} className="btn btn-secondary" onClick={() => Navigate(-1)} >
                Cancel
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default AskQuestion;
