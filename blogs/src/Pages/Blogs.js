import { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import HeaderSection from "../Components/HeaderSection";
import BreadCrumb from "../Components/BreadCrumb";
function Blogs() {
const [data,setData]=useState([])
const [loading,setLoading]=useState(false)
useEffect(()=>{
  getBlogs()
},[])
const getBlogs=()=>{
  setLoading(true)
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");

var formdata = new FormData();

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://s2fwl9bcyl.execute-api.ap-south-1.amazonaws.com/dev/blogslist", requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status_code===200&&result.status==="Success"){
      
      setData(result.data)
    }
    else{
      setData([])
    }
  })
  .catch(error => console.log('error', error)).finally(()=>setLoading(false))
}

  return (
    <div>
      <HeaderSection>
    <div className="max-w-screen-xl mx-auto p-5"><BreadCrumb pageUrl={"blogs"} Page={"Blogs"} /></div>
    { loading?<div className="my-40 w-full text-center">
      <img src="logo-1-tbg.png" className="animate-spin mx-auto" />
      <div>Loading...</div></div>: <div>
      <div className="sm:max-w-3xl text-center mx-auto mb-4  mx-auto max-w-screen-xl px-5">
      
        <div className="text-2xl font-semibold">From E-learning to EdTech: Trending Themes in Education</div>
        <div className="text-sm text-gray-700 mt-2">
        Discover a rich tapestry of educational insights in our blog, where we spotlight and dissect the trending topics that are redefining the realms of teaching, learning, and educational technology.
        </div>
        </div>
        {data.length?<div className="grid grid-cols-1 sm:mb-10 mb-6 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-xl p-5 ">
        
          {data.map((item) => {
            return (
              <div key={item.id}>
                <BlogCard data={item} />
              </div>
            );
          })
        }
        </div> :<div className="text-center mt-24">No data!!</div>}</div>}
      </HeaderSection>
    </div>
  );
}
export default Blogs;
