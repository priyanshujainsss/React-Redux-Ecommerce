
import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";

function Home() {


  return (
      <div>
    <Navbar />

    <div className="container my-4">
    <div className="row row-cols-1 row-cols-md-3 g-4"> 
      <Card productName={"Laptop"} prize={25000} image ="https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373__340.jpg"/>
      <Card productName={"Mobile"} prize={10000} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlnpCO4YDtBcQkASwjLrtgsw6lXaygvsmHCkFWELF69it2KzbX3F7gboEau_92dkIi7k&usqp=CAU"  />
      <Card productName={"Tablet"} prize={15000} image="https://www.reliancedigital.in/medias/Apple-MYLD2HN-A-Tablets-491901098-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjk3OHxpbWFnZS9qcGVnfGltYWdlcy9oN2EvaGQ5LzkzODM5MjI3Mjg5OTAuanBnfGYzNWI5ODIwZGQ3ZGZmNTE3OGIyMDIzYWQyYmY3MjY5OGY5NmE3MWIwZmUzNDZjMjBlMDhhNjZjOWEwYTY3ZGQ"/>
      <Card productName={"HeadPhone"} prize={1500} image="https://i.ytimg.com/vi/xFe_ZYtfsZg/maxresdefault.jpg"/>
      <Card productName={"EarPhone"} prize={500} image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/100-wireless-black.png"/>      
      </div>
    </div>
</div>
  );
}
 
export default Home;
