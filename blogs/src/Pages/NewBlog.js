import HeaderSection from "../Components/HeaderSection";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import BreadCrumb from "../Components/BreadCrumb";

function NewBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

const InsertBlog=()=>{
    setLoading(true)
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");

var formdata = new FormData();
formdata.append("Title", title)
formdata.append("Content", content)
formdata.append("AuthorName", author);
formdata.append("Image", selectedImage);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://s2fwl9bcyl.execute-api.ap-south-1.amazonaws.com/dev/insertblog", requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status_code===200&&result.status==="SUCCESS"){
      toast.success("Blog Inserted Successfully!!")
      //  alert("Blog Inserted Successfully!!")
       setContent("")
       setTitle("")
       setSelectedImage("")
       setAuthor("")
      }
      else{
        toast.error("Something went wrong!!")
      }
  })
  .catch(error =>  toast.error("Something went wrong!!")).finally(()=>setLoading(false))
}

  const handleTitleChange = (e) => {
    e.target.setCustomValidity("")
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    e.target.setCustomValidity("")
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    e.target.setCustomValidity("")
    setSelectedImage(e.target.files[0]);
  };

  const handleAuthorChange = (e) => {
    e.target.setCustomValidity("")
    setAuthor(e.target.value);
  };

  return (
    <div>
      <ToastContainer theme='colored'></ToastContainer>
      <HeaderSection>
        <section className="relative flex flex-wrap lg:h-screen lg:items-start">
          <div className="w-full px-4  sm:px-6 lg:w-1/2 lg:px-8">
            <div className="mx-auto max-w-lg mt-4 sm:mt-8 text-center">
            <BreadCrumb pageUrl={""} Page={" Add New Blog"} />
              <h1 className="text-2xl font-bold sm:text-3xl mt-2">Get started today!</h1>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                libero nulla eaque error neque ipsa culpa autem, at itaque
                nostrum!
              </p>
            </div>

            <form
              onSubmit={(e)=>{e.preventDefault(); InsertBlog()}}
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div>
                <label htmlFor="title">
                  Title <sapn className="text-red-500">*</sapn>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="title"
                    required
                    onInvalid={(event) => {
                        event.target.setCustomValidity('Please Enter Blog Title.');
                      }}
                    value={title}
                    onChange={handleTitleChange}
                    className="w-full rounded-lg border border-gray-400 focus:border-[#34BE82] outline-none p-3 mt-1  text-sm shadow-sm"
                    placeholder="Enter title"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="content">
                  Content <sapn className="text-red-500">*</sapn>
                </label>
                <div className="relative">
                  <textarea
                    name="content"
                    value={content}
                    required
                    onInvalid={(event) => {
                        event.target.setCustomValidity('Please Enter Blog Description.');
                      }}
                    onChange={handleContentChange}
                    className="w-full rounded-lg border border-gray-400 focus:border-[#34BE82] outline-none p-3 mt-1  text-sm shadow-sm"
                    placeholder="Enter content"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="image">
                  Image
                </label>
                <div className="w-full rounded-lg  border border-gray-400 focus:border-[#34BE82] outline-none p-3 mt-1  text-sm shadow-sm">
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                    id="imageInput"
                  />
                  <label
                    htmlFor="imageInput"
                    className="flex justify-between cursor-pointer"
                  >
                    <span>{selectedImage ? selectedImage.name : "Upload Image"}</span>
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="author">
                  Author <sapn className="text-red-500">*</sapn>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="author"
                    required
                    onInvalid={(event) => {
                        event.target.setCustomValidity('Please Author name.');
                      }}
                    value={author}
                    onChange={handleAuthorChange}
                    className="w-full rounded-lg border border-gray-400 focus:border-[#34BE82] outline-none p-3 mt-1  text-sm shadow-sm"
                    placeholder="Enter author name"
                  />
                </div>
              </div>

          

              <div className="flex items-center justify-between">
                <div></div>

                {
                    loading?
                    <div
            
                  className="inline-block rounded-lg bg-white px-5 py-3 text-sm font-medium text-[#34BE82] border hover:opacity-80 border-[#34BE82]"
                >
                  Processing...
                </div>
                    :
                    
                    <button
                  type="submit"
                  className="inline-block rounded-lg bg-white px-5 py-3 text-sm font-medium text-[#34BE82] border hover:opacity-80 border-[#34BE82]"
                >
                  Submit
                </button>}
              </div>
            </form>
          </div>

          <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
              alt="Welcome"
              src="/image.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>
      </HeaderSection>
    </div>
  );
}

export default NewBlog;
