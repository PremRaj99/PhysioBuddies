import TherapistItemCard from "../../components/Therapist/TherapistItemCard";

export default function TherapistDetail({
  fullName = "Dr. Davis",
  specialization = "General Physician",
  experience = "10 years",
  about = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo, numquam consequatur ex voluptates dicta minus nobis, alias quae cum assumenda consequuntur voluptatibus odit, accusantium corrupti ratione. Voluptatem eius magnam illum quasi odit, nihil libero fugiat nostrum molestias quaerat adipisci nemo neque architecto, doloremque id corporis. Quidem in quaerat dolore eaque doloribus! ",
}) {
  const relatedPhysiotherapists = [
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

  return (
    <div className="p-8">
      <div>
        <div className="flex flex-wrap justify-center gap-4 ">
          <div className="rounded-lg w-72">
            <img
              className="bg-green-400 w-full sm:max-w-72 rounded-lg"
              src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png"
              alt=""
            />
          </div>
          <div className=" border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
              {fullName}
            </p>
            <div className="flex items-center gap-2 mt-1 text-gray-600">
              <p>{specialization}</p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-[#262626] mt-3">
                About{" "}
                <img
                  className="w-3"
                  src="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.5%200C3.80559%200%200%203.80554%200%208.5C0%2013.1944%203.80559%2017%208.5%2017C13.1945%2017%2017%2013.1944%2017%208.5C17%203.80554%2013.1945%200%208.5%200ZM8.5%2015.3C4.75049%2015.3%201.7%2012.2495%201.7%208.5C1.7%204.75049%204.75049%201.7%208.5%201.7C12.2496%201.7%2015.3%204.75049%2015.3%208.5C15.3%2012.2495%2012.2496%2015.3%208.5%2015.3ZM9.56436%205.1C9.56436%205.71628%209.11565%206.1625%208.50864%206.1625C7.87706%206.1625%207.43936%205.71628%207.43936%205.08821C7.43936%204.48456%207.88891%204.0375%208.50864%204.0375C9.11565%204.0375%209.56436%204.48456%209.56436%205.1ZM7.65186%207.65H9.35186V12.75H7.65186V7.65Z'%20fill='black'/%3e%3c/svg%3e"
                  alt=""
                />
              </p>
              <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                {about}
              </p>
            </div>
            <p className="text-gray-600 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-800">
                $50
              </span>{" "}
            </p>
          </div>
        </div>

        {/* Related Doctors Section */}
        <div className="flex flex-col items-center gap-4 my-16 text-[#262626]">
          <h1 className="text-3xl font-medium">
            Related Doctors
          </h1>
          <p className="sm:w-1/3 text-center text-sm">
            Simply browse through our extensive
            list of trusted doctors.
          </p>
          <div className="flex flex-wrap gap-4">
            {relatedPhysiotherapists.map(
              (physiotherapist) => (
                <TherapistItemCard
                  profilePhoto={
                    physiotherapist.profilePhoto
                  }
                  fullName={
                    physiotherapist.fullName
                  }
                  reviewCount={
                    physiotherapist.reviewCount
                  }
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
