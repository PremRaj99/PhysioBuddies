import TherapistItemCard from "../../components/Therapist/TherapistItemCard";
import { FaFilter } from "react-icons/fa";

export default function TherapistList() {
  const delhiPlaces = [
    "India Gate",
    "Red Fort",
    "Qutub Minar",
    "Humayun's Tomb",
    "Lotus Temple",
    "Akshardham Temple",
    "Chandni Chowk",
    "Connaught Place",
    "Jama Masjid",
    "National Museum",
    "Lodhi Garden",
    "Hauz Khas Village",
    "Rashtrapati Bhavan",
    "Raj Ghat",
  ];
  const physiotherapists = [
    {
      profilePhoto:
        "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. John Doe",
      specialization: "Sports Physiotherapy",
      rating: 3.5,
      isAvailable: true,
      reviewCount: 120,
      verified: true,
      experience: "10 years",
    },
    {
      profilePhoto:
        "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. Jane Smith",
      specialization: "Orthopedic Physiotherapy",
      rating: 4.5,
      isAvailable: false,
      reviewCount: 95,
      verified: true,
      experience: "8 years",
    },
    {
      profilePhoto:
        "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. Mark Taylor",
      specialization:
        "Neurological Rehabilitation",
      rating: 4.7,
      isAvailable: true,
      reviewCount: 110,
      verified: true,
      experience: "12 years",
    },
    {
      profilePhoto:
        "https://plus.unsplash.com/premium_photo-1681966531074-0957dc900a5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. Emma Brown",
      specialization: "Pediatric Physiotherapy",
      rating: 4.9,
      isAvailable: true,
      reviewCount: 150,
      verified: true,
      experience: "9 years",
    },
    {
      profilePhoto:
        "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. Rahul Sharma",
      specialization: "Geriatric Physiotherapy",
      rating: 4.4,
      isAvailable: false,
      reviewCount: 80,
      verified: false,
      experience: "7 years",
    },
  ];

  const filterSpeciality = [
    "Sports Physiotherapy",
    "Orthopedic Physiotherapy",
    "Neurological Rehabilitation",
    "Pediatric Physiotherapy",
    "Geriatric Physiotherapy",
  ];

  return (
    <div className="bg-green-50 ">
      {/* search bar */}
      <div className="bg-green-600 h-40 flex flex-col justify-center items-center gap-2 shadow-md">
        <div className="w-full text-2xl text-white text-center font-semibold">
          Search Physio in your area
        </div>
        <div className="py-2 flex w-full px-4 md:px-16 border-white flex-col md:flex-row md:justify-center md:items-center">
          <input
            type="search"
            className=" rounded-lg m-1 p-2 flex-1 focus:outline-none"
            placeholder="Search"
          />
          <select className="p-[10px] rounded-lg ">
            {delhiPlaces.map((places) => (
              <option value={places}>
                {" "}
                {places}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Content for the therapist list goes here */}
      <div className="bg-green-50 flex flex-col md:flex-row">
        {/* Sidebar for small devices*/}
        <div className="md:hidden flex p-4 justify-between mx-4 text-gray-800 text-xl">
          <div className="">Filter</div>
          <FaFilter className="w-8 h-8" />
        </div>
        {/* sidebar */}
        <div className="hidden md:block md:w-[30%] md:h-full p-8">
          <div className="bg-yellow-50 h-full w-full rounded-lg shadow-lg p-4">
            <form>
              <label>Gender</label>
              <div className="flex text-gray-700">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                />
                <span className="mx-2">Male</span>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                />
                <span className="mx-2">
                  Female
                </span>
              </div>
              <hr className="my-6" />

              <label>Speciality</label>
              <div className="flex flex-col gap-3 text-gray-700">
                {filterSpeciality.map(
                  (speciality) => (
                    <span className="flex items-center my-1">
                      <input type="checkbox" />
                      <span className="mx-2">{speciality}</span>
                    </span>
                  )
                )}
              </div>
              <hr className="my-6" />

              <label>Model</label>
              <div className="flex text-gray-700">
                <input
                  type="checkbox"
                  name="gender"
                  id="male"
                />
                <span className="mx-2">Home</span>
                <input
                  type="checkbox"
                  name="gender"
                  id="male"
                />
                <span className="mx-2">
                  Clinic
                </span>
              </div>
              <hr className="my-6" />
            </form>
          </div>
        </div>
        {/* Therapist List */}
        <div className="flex gap-12 md:gap-8 flex-wrap justify-center md:justify-start items-center py-4 px-6 mx-4 mt-5">
          {physiotherapists.map((therapist) => (
            <TherapistItemCard
              profilePhoto={
                therapist.profilePhoto
              }
              fullName={therapist.fullName}
              experience={therapist.experience}
              rating={therapist.rating}
              verified={therapist.verified}
              specialization={
                therapist.specialization
              }
              reviewCount={therapist.reviewCount}
              isAvailable={therapist.isAvailable}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
