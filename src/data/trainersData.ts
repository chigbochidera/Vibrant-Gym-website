
// Trainer data type
export interface Trainer {
  id: number;
  name: string;
  image: string;
  specialty: string;
  bio: string;
  experience: string;
  certifications: string[];
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

// Testimonial data type
export interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
  trainer: string;
}

// Trainer data with Ghanaian names and African photos
export const trainers: Trainer[] = [
  {
    id: 1,
    name: "Kwame Mensah",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    specialty: "HIIT & CrossFit Specialist",
    bio: "Kwame has been transforming lives through high-intensity training for over 8 years. His dynamic approach helps clients push their limits safely and effectively.",
    experience: "8+ years",
    certifications: ["CrossFit Level 3 Trainer", "NASM Certified Personal Trainer", "Kettlebell Specialist"],
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Akosua Boateng",
    image: "https://images.unsplash.com/photo-1593351799222-54d34257f1b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    specialty: "Strength & Nutrition Coach",
    bio: "Akosua specializes in strength training and nutrition coaching, helping clients build muscle and improve overall health through personalized programs.",
    experience: "6+ years",
    certifications: ["ISSA Certified Personal Trainer", "Precision Nutrition Certified", "Strength & Conditioning Specialist"],
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Ama Darko",
    image: "https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    specialty: "Yoga & Mindfulness Expert",
    bio: "Ama's holistic approach to fitness integrates physical practice with mindfulness techniques for total wellbeing and stress reduction.",
    experience: "10+ years",
    certifications: ["200-Hour Yoga Alliance Certified", "Mindfulness-Based Stress Reduction", "CorePower Yoga Certified"],
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "Kofi Ankrah",
    image: "https://images.unsplash.com/photo-1567037782848-cdbe37ca5bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    specialty: "Cardio & Endurance Coach",
    bio: "Kofi specializes in endurance training and cardio fitness, helping clients build stamina, improve heart health, and maximize calorie burn.",
    experience: "7+ years",
    certifications: ["AFAA Certified", "Spin Instructor", "TRX Qualified"],
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 5,
    name: "Efua Owusu",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    specialty: "Pilates & Rehabilitation",
    bio: "Efua combines Pilates with rehabilitation techniques to help clients recover from injuries, improve posture, and develop core strength.",
    experience: "9+ years",
    certifications: ["Comprehensive Pilates Certification", "Corrective Exercise Specialist", "Post-Rehabilitation Specialist"],
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 6,
    name: "Kwesi Appiah",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    specialty: "Boxing & Martial Arts",
    bio: "Kwesi brings combat sports expertise to fitness, teaching boxing and martial arts techniques that improve coordination, power, and confidence.",
    experience: "12+ years",
    certifications: ["Ghana Boxing Association Certified Coach", "Muay Thai Level 2", "Functional Training Specialist"],
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
];

// Testimonial data with Ghanaian names
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nana Agyeman",
    image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "Working with Kwame has completely changed my fitness journey. His HIIT workouts are challenging but so effective. I've lost 14 kilos and gained so much strength in just 6 months!",
    rating: 5,
    trainer: "Kwame Mensah",
  },
  {
    id: 2,
    name: "Abena Frimpong",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "Akosua's approach to nutrition alongside strength training has been eye-opening. She doesn't just tell you what to do; she explains why it works. I've never felt healthier!",
    rating: 5,
    trainer: "Akosua Boateng",
  },
  {
    id: 3,
    name: "Yaw Osei",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "Ama's yoga classes are the perfect balance of challenge and relaxation. Her mindfulness techniques have helped me manage stress and improve my focus both in and out of the gym.",
    rating: 5,
    trainer: "Ama Darko",
  },
  {
    id: 4,
    name: "Adwoa Manu",
    image: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "Kofi pushed me to achieve my marathon goal! His endurance training program was perfectly tailored to my needs, and his encouragement kept me going when I wanted to give up.",
    rating: 5,
    trainer: "Kofi Ankrah",
  },
  {
    id: 5,
    name: "Kojo Asante",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "After my back injury, I thought I'd never work out properly again. Efua's Pilates rehabilitation program has not only eliminated my pain but made me stronger than before!",
    rating: 5,
    trainer: "Efua Owusu",
  },
  {
    id: 6,
    name: "Akua Mensah",
    image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "Kwesi makes boxing fun and accessible! I joined for fitness but stayed for the confidence it's given me. His patience and expertise make every session valuable.",
    rating: 5,
    trainer: "Kwesi Appiah",
  },
];
