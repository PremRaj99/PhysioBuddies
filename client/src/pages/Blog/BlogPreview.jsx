import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPreview() {
  const doctor = {
    imageUrl:
      "https://images.unsplash.com/photo-1583639687726-84d20638bf63?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dr. Ethan Anderson, Gastroenterologist",
    description: "Specializes in digestive system treatments and procedures.",
    date: "2024-02-14",
    views: 3320,
  };
  //   const key = useParams().key;
  return (
    <div className="mx-auto py-2 px-4 md:h-screen bg-green-50">
      <div className="mx-auto px-3 py-2 w-4/5 md:w-4/6">
        <img src={doctor.imageUrl} alt="cover photo" className="h-60 mx-auto" />
      </div>

      <div className="w-full justify-between align-middle flex flex-wrap ">
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
          reiciendis!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in nemo
          ut, sed labore dignissimos qui ea doloremque odio nulla magnam
          voluptatibus aspernatur dolorem, impedit cumque accusantium
          voluptates, similique quis!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          voluptate hic nemo nisi id quidem. Quo nulla dolore maiores possimus
          natus tenetur, quasi atque nam placeat exercitationem at eveniet
          quibusdam nemo. Facere soluta at laudantium. Amet deserunt ex ad
          eligendi aliquid omnis tempore cumque, debitis, delectus mollitia
          architecto laboriosam assumenda voluptate!
        </p>

        <span className="mx-4">{doctor.date}</span>
        <span className="mx-4">{doctor.views}</span>
      </div>
      
    </div>
  );
}
