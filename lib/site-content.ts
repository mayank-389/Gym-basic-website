export const siteContent = {
  gymName: "Your Gym Name",
  tagline: "Affordable fitness training with real results.",
  phoneNumber: "+1 (555) 123-4567",
  whatsappNumber: "15551234567",
  address: "245 W 29th St, New York, NY 10001",
  hoursWeekdays: "Mon-Fri: 6:00 AM - 10:00 PM",
  hoursWeekend: "Sat-Sun: 7:00 AM - 8:00 PM",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Manhattan+New+York+Gym&output=embed",
};

export const services = [
  {
    icon: "D",
    title: "Strength Training",
    description: "Build muscle safely with coach-guided training plans.",
  },
  {
    icon: "C",
    title: "Cardio Sessions",
    description: "Improve endurance with treadmill, cycling, and HIIT options.",
  },
  {
    icon: "N",
    title: "Nutrition Guidance",
    description: "Simple meal planning support to match your fitness goals.",
  },
  {
    icon: "P",
    title: "Personal Coaching",
    description: "1-on-1 sessions for motivation, form correction, and progress.",
  },
] as const;

export const gymHighlights = [
  { label: "Members", value: "450+" },
  { label: "Trainers", value: "12" },
  { label: "Open Daily", value: "16 Hrs" },
] as const;

export const membershipPlans = [
  {
    name: "Starter Plan",
    price: "INR 2,499/mo",
    details: "Gym access, basic equipment, and locker support.",
  },
  {
    name: "Standard Plan",
    price: "INR 3,999/mo",
    details: "Everything in Starter plus group classes and cardio zone.",
  },
  {
    name: "Coaching Plan",
    price: "INR 6,499/mo",
    details: "Includes personal coaching and monthly progress review.",
  },
] as const;

export const classSchedule = [
  { day: "Monday", className: "Strength Basics", time: "7:00 AM" },
  { day: "Wednesday", className: "HIIT Burn", time: "6:30 PM" },
  { day: "Friday", className: "Core + Mobility", time: "7:30 AM" },
  { day: "Saturday", className: "Full Body Circuit", time: "9:00 AM" },
] as const;

export const testimonials = [
  {
    name: "Aman",
    feedback: "Good trainers, clean gym, and clear workout plans.",
  },
  {
    name: "Riya",
    feedback: "Affordable membership and very supportive staff.",
  },
] as const;