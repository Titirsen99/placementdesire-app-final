import Image from "next/image";
import Link from "next/link";
import one from "../../public/images/one.jpg";

export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen flex-col gap-10' style={{
      backgroundImage: "url('https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600')",
      backgroundSize: 'cover',
      backgroundBlur: '2px',
      backdropFilter: 'blur(2px)',
      padding: '20px',
    }}>
      <h1 className='text-black text-3xl'>A Complete Placement Preparation App For Your Upcoming Exam.</h1>
      <button className='bg-slate-400 font-bold text-black rounded-lg p-3'><Link href="/prepare">
        Get Started</Link></button>
    </div>
  );
}
