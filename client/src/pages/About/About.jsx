import { useState } from "react";

export default function About({
  patient = "4,500+",
  session = "1,500+",
  experts = "300+",
  checkup= "5,000"
}) {
  return (
    <div className="bg-green-50 flex flex-wrap p-2">
      {/* text section */}
      <div className=" col-span-10 mx-auto w-full md:w-2/5 py-8 px-4">
        <h2 className="font-bold text-lg md:text-2xl my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          dolorum, cupiditate ex veritatis expedita odio?
        </h2>
        <p className="font-thin text-sm md:text-base my-1 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          quos vel. Quia, exercitationem sunt! Ipsum qui, asperiores atque nisi
          maxime tempora tenetur nostrum quaerat veniam. Non, odit
          reprehenderit.
        </p>
        <h2 className="font-bold text-lg md:text-2xl my-2">Lorem ipsum.</h2>
        <p className="font-thin text-sm md:text-base my-1 ">
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
        <p className="font-thin text-sm md:text-base my-1 ">
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
            <div className="text-lg md:text-3xl font-extrabold text-gray-800 text-center">{patient}</div>
            <div className="text-xs font-light md:text-xl text-gray-500 text-center">Total Patients Treated Successfully</div>
          </div>
          
          <div className="border-gray-800 w-full h-36 text-3xl flex flex-col justify-center items-center p-4">
            <div className="text-lg md:text-3xl font-extrabold text-gray-800 text-center">{session}</div>
            <div className="text-xs font-light md:text-xl text-gray-500 text-center">Total Sessions Conducted</div>
          </div>
          
          <div className="border-gray-800 w-full h-36 text-3xl flex flex-col justify-center items-center p-4">
            <div className="text-lg md:text-3xl font-extrabold text-gray-800 text-center">{experts}</div>
            <div className="text-xs font-light md:text-xl text-gray-500 text-center">Verified Experts</div>
          </div>
          
          <div className="border-gray-800 w-full h-36 text-3xl flex flex-col justify-center items-center p-4">
            <div className="text-lg md:text-3xl font-extrabold text-gray-800 text-center">{checkup}</div>
            <div className="text-xs font-light md:text-xl text-gray-500 text-center">Total Checkups this year</div>
          </div>
          
          
        </div>
      </div>

      {/* image section */}
      <div className="flex w-full lg:w-2/5 md:gap-4 gap-1 mx-auto py-8 flex-wrap md:flex-nowrap md:mx-auto justify-center">
        {/* Image 1 */}
        <div className="m-5 rounded-lg md:overflow-hidden overflow-auto w-36 h-52 shadow-md md:h-[500px] md:w-[500px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1"
            className="md:h-[500px] md:w-[500px] w-36 h-52 object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="m-5 md:mt-24 rounded-lg md:overflow-hidden overflow-auto w-36 h-52 shadow-md md:h-[500px] md:w-[500px]">
          <img
            src="https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
            className="md:h-[500px] md:w-[500px] w-36 h-52 object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="m-5 rounded-lg md:overflow-hidden overflow-auto w-36 h-52 shadow-md md:h-[500px] md:w-[500px]">
          <img
            src="https://images.unsplash.com/photo-1581090465357-c8a1f71f0407?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
            className="md:h-[500px] md:w-[500px] w-36 h-52 object-cover"
          />
        </div>

        {/* Image 4 */}
        <div className="m-5 md:mt-24 rounded-lg md:overflow-hidden overflow-auto w-36 h-52 shadow-md md:h-[500px] md:w-[500px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1661373540779-edba6b49f420?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 4"
            className="md:h-[500px] md:w-[500px] w-36 h-52 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
