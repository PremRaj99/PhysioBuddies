import TherapistItemCard from "../../components/Therapist/TherapistItemCard";

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
    "Raj Ghat"
  ];
  const physiotherapists = [
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. John Doe",
      specialization: "Sports Physiotherapy",
      rating: 3.5,
      isAvailable: true,
      reviewCount: 120,
      verified: true,
      experience: "10 years"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. Jane Smith",
      specialization: "Orthopedic Physiotherapy",
      rating: 4.5,
      isAvailable: false,
      reviewCount: 95,
      verified: true,
      experience: "8 years"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. Mark Taylor",
      specialization: "Neurological Rehabilitation",
      rating: 4.7,
      isAvailable: true,
      reviewCount: 110,
      verified: true,
      experience: "12 years"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1681966531074-0957dc900a5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. Emma Brown",
      specialization: "Pediatric Physiotherapy",
      rating: 4.9,
      isAvailable: true,
      reviewCount: 150,
      verified: true,
      experience: "9 years"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Dr. Rahul Sharma",
      specialization: "Geriatric Physiotherapy",
      rating: 4.4,
      isAvailable: false,
      reviewCount: 80,
      verified: false,
      experience: "7 years"
    }
  ];
  
  
  return (
    <div className="bg-green-50 ">
      {/* search bar */}
      <div className="bg-green-600 h-40 flex flex-col justify-center items-center gap-2 shadow-md">
        <div className="w-full text-2xl text-white text-center font-semibold">
          Search Physio in your area
        </div>
        <div className="py-2 flex w-full px-4 md:px-16 border-white flex-col md:flex-row md:justify-center md:items-center" >
          <input
            type="search"
            className=" rounded-lg m-1 p-2 flex-1 focus:outline-none"
            placeholder="Search"
          />
          <select className="p-[10px] rounded-lg ">
            {delhiPlaces.map((places)=>(<option value={places} > {places}</option>))}   
          </select>
        </div>
      </div>
      {/* Content for the therapist list goes here */}
      <div className="bg-green-50">
        {/* Sidebar */}
        <div className="hidden "></div>
        {/* Therapist List */}
        <div className="flex flex-col gap-4 p-2 flex-wrap justify-center items-center ">
          {physiotherapists.map((therapist)=>(<TherapistItemCard profilePhoto={therapist.profilePhoto} fullName={therapist.fullName} experience={therapist.experience} rating={therapist.rating} verified={therapist.verified} specialization={therapist.specialization} reviewCount={therapist.reviewCount} isAvailable={therapist.isAvailable}/>))}
        </div>
      </div>
    </div>
  );
}
