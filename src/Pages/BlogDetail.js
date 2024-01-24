import { useParams } from "react-router-dom";
import HeaderSection from "../Components/HeaderSection";
import { useEffect, useState } from "react";
import BlogDetailCard from "../Components/BlogDetailCard";
import BreadCrumb from "../Components/BreadCrumb";

function BlogDetail() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 1435a113995b2c25c2376646e271312f1873a674"
    );

    var formdata = new FormData();
    formdata.append("Id", id);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://s2fwl9bcyl.execute-api.ap-south-1.amazonaws.com/dev/blogbyid", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status_code === 200 && result.status === "Success") {
          setData(result.data);
        } else {
          setData({});
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  };
  const dateHandler = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const monthNameLong = dateObj.toLocaleString("en-US", { month: "short" });
    const year = dateObj.getFullYear();
    return (day <= 9 ? "0" : "") + day + "-" + monthNameLong + "-" + year;
  };
  return (
    <div>
      <HeaderSection>
     <div className="bg-gray-100"><div className="max-w-screen-xl bg-gray-100 mx-auto p-5">
     <BreadCrumb pageUrl={"/blogs"} Page={"Blogs"} PageTwo={data?.Title} /></div>
     </div>  {loading ? (
          <div className="py-40 bg-gray-100 w-full text-center">
            <img src="/logo-1-tbg.png" className="animate-spin mx-auto" />
            <div>Loading...</div>
          </div>
        ) : (
      <div className="sm:pb-10 bg-gray-100 pb-6">
      <BlogDetailCard data={data} /></div>
        )}
      </HeaderSection>
    </div>
  );
}
export default BlogDetail;
