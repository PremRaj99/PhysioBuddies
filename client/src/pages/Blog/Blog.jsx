import React from "react";
import BlogCard from "../../components/Common/BlogCard";

export default function Blog() {
  const doctors = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1581090124355-6c1376cf3047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dr. Sarah Johnson, Cardiologist",
      description:
        "Dr. Johnson specializes in advanced cardiology treatments and preventive care.",
      date: "2024-11-12",
      views: 3250,
    },
    {
      imageUrl: "https://plus.unsplash.com/premium_photo-1663052427377-3f41fde11508?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dr. James Lee, Pediatrician",
      description:
        "Dr. Lee provides comprehensive pediatric care for children of all ages.",
      date: "2024-10-05",
      views: 2890,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1620052079778-7d5b7509645c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dr. Amelia Chen, Dermatologist",
      description:
        "Expert in skin care and treatment of various skin conditions.",
      date: "2024-09-20",
      views: 3105,
    },
    {
      imageUrl: "https://plus.unsplash.com/premium_photo-1663091434747-1d64d6602a23?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dr. Michael Patel, Orthopedic Surgeon",
      description:
        "Specialized in joint replacement and sports injury surgeries.",
      date: "2024-08-18",
      views: 4020,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1637580679542-5c7ca60c6fae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBoeXNpY2FsJTIwdGhlcmFweXxlbnwwfDB8MHx8fDA%3D",
      title: "Dr. Emma Gupta, Endocrinologist",
      description:
        "Dr. Gupta has a deep understanding of hormone-related disorders.",
      date: "2024-07-24",
      views: 2780,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dr. Liam Wilson, Neurologist",
      description: "Provides comprehensive care for neurological disorders.",
      date: "2024-06-30",
      views: 3505,
    },
    {
      imageUrl: "https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dr. Olivia Taylor, Obstetrician",
      description: "Specializes in prenatal care and childbirth.",
      date: "2024-05-15",
      views: 2690,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dr. William Lopez, Oncologist",
      description: "Experienced in cancer treatment and supportive care.",
      date: "2024-04-12",
      views: 3150,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1550977616-efc580084ac5?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dr. Sophia Martinez, Psychiatrist",
      description: "Expert in mental health and behavioral therapy.",
      date: "2024-03-22",
      views: 2980,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1583639687726-84d20638bf63?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dr. Ethan Anderson, Gastroenterologist",
      description: "Specializes in digestive system treatments and procedures.",
      date: "2024-02-14",
      views: 3320,
    },
  ];

  doctors.map((doctors)=>({}))

  return (
    <>
      <div className="w-screen bg-green-100 text-green-950 flex justify-center align-middle text-center py-16">
        <h2 className="text-xl font-semibold">Our Blogs</h2>
      </div>
      <div className="flex flex-wrap p-4 md:p-16 mx-auto justify-center items-center gap-4">
        {doctors.map((doctors)=>(<BlogCard title={doctors.title} descr={doctors.description} img={doctors.imageUrl} date={doctors.date} views={doctors.views}/>))}
      </div>
    </>
  );
}
