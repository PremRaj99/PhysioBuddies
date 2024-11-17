import { useState } from "react";
import ImageGrid from "./ImageGrid";

export default function About() {
  const [patient, setPatient] = useState(150);
  return (
    <div className="bg-green-50 flex flex-wrap p-2">
      {/* text section */}
      <div className=" col-span-10 m-auto w-full md:w-1/2 p-2">
        <h2 className="font-bold text-lg md:text-2xl my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          dolorum, cupiditate ex veritatis expedita odio?
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          quos vel. Quia, exercitationem sunt! Ipsum qui, asperiores atque nisi
          maxime tempora tenetur nostrum quaerat veniam. Non, odit
          reprehenderit.
        </p>
        <h2>Lorem ipsum.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          blanditiis iusto molestias expedita corporis ad cumque placeat tenetur
          voluptatum in illum numquam culpa, facere, et, vero mollitia? Quas
          repudiandae commodi nesciunt reprehenderit, provident sapiente quo
          recusandae soluta ex rem incidunt sint iste. Commodi possimus
          perspiciatis quas, accusamus nesciunt est laborum error voluptas
          pariatur vel mollitia cupiditate reprehenderit. Delectus impedit,
          consequuntur expedita sapiente tempora libero corporis numquam
          voluptatibus. Voluptate porro, explicabo, fugiat omnis ut soluta
          distinctio iste consequuntur perspiciatis tenetur ab!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque iste
          quis sint, impedit porro eius omnis. Placeat iure error fuga voluptate
          repudiandae facere, inventore iste explicabo mollitia totam temporibus
          odit accusamus hic iusto excepturi adipisci possimus debitis
          voluptatum, ullam nulla deleniti. Ipsam quos molestias voluptates.
        </p>

        {/* HR tag */}
        <hr className="mx-auto my-6 border-gray-600 w-4/5" />

        {/* Figures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4" style={{ fontFamily: "'Brush Script MT', cursive" }}>
          <div className="border-gray-800 w-full h-36 text-3xl flex flex-col justify-center items-center p-4">
            <div className="text-lg md:text-3xl font-extrabold text-gray-800 text-center">15k</div>
            <div className="text-xs md:text-xl text-gray-800 text-center">Total Patients Treated Successfully</div>
          </div>
          
          <div className="border-gray-800 w-full h-36 text-3xl flex flex-col justify-center items-center p-4">
            <div className="text-lg md:text-3xl font-extrabold text-gray-800 text-center">15k</div>
            <div className="text-xs md:text-xl text-gray-800 text-center">Total Patients Treated Successfully</div>
          </div>
          
          <div className="border-gray-800 w-full h-36 text-3xl flex flex-col justify-center items-center p-4">
            <div className="text-lg md:text-3xl font-extrabold text-gray-800 text-center">15k</div>
            <div className="text-xs md:text-xl text-gray-800 text-center">Total Patients Treated Successfully</div>
          </div>
          
          <div className="border-gray-800 w-full h-36 text-3xl flex flex-col justify-center items-center p-4">
            <div className="text-lg md:text-3xl font-extrabold text-gray-800 text-center">15k</div>
            <div className="text-xs md:text-xl text-gray-800 text-center">Total Patients Treated Successfully</div>
          </div>
          
        </div>
      </div>

      {/* image section */}
      <div className="col-span-2 bg-green-500 mx-auto">
        {/* Image 1 */}
        <div className="rounded-lg overflow-hidden shadow-md h-[306px] w-full mt-20 flex">
          <img
            src="https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="rounded-lg overflow-hidden shadow-md h-[266px] w-full flex">
          <img
            src="https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="rounded-lg overflow-hidden shadow-md h-[266px] w-full">
          <img
            src="https://images.unsplash.com/photo-1581090465357-c8a1f71f0407?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4 */}
        <div className="rounded-lg overflow-hidden shadow-md h-[266px] w-full ">
          <img
            src="https://plus.unsplash.com/premium_photo-1661373540779-edba6b49f420?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
