export interface College {
  id: string;
  name: string;
  location: string;
  state: string;
  fees: {
    tuition: number;
    total: number;
  };
  rating: number;
  images: string[];
  description: string;
  established: number;
  type: string;
  courses: Course[];
  placements: Placement;
  reviews: Review[];
  admission: Admission;
}

export interface Course {
  id: string;
  name: string;
  duration: string;
  fees: number;
  eligibility: string;
}

export interface Placement {
  averagePackage: number;
  highestPackage: number;
  placementRate: number;
  topRecruiters: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  course?: string;
}

export interface Admission {
  process: string[];
  requirements: string[];
  deadlines: string;
  entranceExams: string[];
}

export const colleges: College[] = [
  {
    id: "1",
    name: "Indian Institute of Technology, Bombay",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    fees: {
      tuition: 250000,
      total: 300000,
    },
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    ],
    description: "IIT Bombay is a premier engineering institution known for its excellence in technical education and research.",
    established: 1958,
    type: "Public",
    courses: [
      {
        id: "c1",
        name: "B.Tech Computer Science",
        duration: "4 Years",
        fees: 250000,
        eligibility: "JEE Advanced",
      },
      {
        id: "c2",
        name: "B.Tech Electrical Engineering",
        duration: "4 Years",
        fees: 250000,
        eligibility: "JEE Advanced",
      },
      {
        id: "c3",
        name: "M.Tech Artificial Intelligence",
        duration: "2 Years",
        fees: 300000,
        eligibility: "GATE",
      },
    ],
    placements: {
      averagePackage: 2500000,
      highestPackage: 12000000,
      placementRate: 95,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Apple", "Meta"],
    },
    reviews: [
      {
        id: "r1",
        author: "Rahul Sharma",
        rating: 5,
        comment: "Excellent faculty and world-class infrastructure. The research opportunities are unparalleled.",
        date: "2024-01-15",
        course: "B.Tech Computer Science",
      },
      {
        id: "r2",
        author: "Priya Patel",
        rating: 4,
        comment: "Great placement support and industry exposure. Campus life is vibrant and competitive.",
        date: "2024-02-20",
        course: "B.Tech Electrical Engineering",
      },
    ],
    admission: {
      process: [
        "Appear for JEE Advanced exam",
        "Qualify with required rank",
        "Register for JoSAA counseling",
        "Choose IIT Bombay as preference",
        "Complete admission formalities",
      ],
      requirements: [
        "75% aggregate in 12th board exams",
        "Qualified JEE Advanced",
        "Valid rank in merit list",
      ],
      deadlines: "June 30, 2025",
      entranceExams: ["JEE Advanced", "JEE Main"],
    },
  },
  {
    id: "2",
    name: "Indian Institute of Technology, Delhi",
    location: "New Delhi, Delhi",
    state: "Delhi",
    fees: {
      tuition: 250000,
      total: 300000,
    },
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581362072978-14998d01fdaa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop",
    ],
    description: "IIT Delhi is one of the oldest IITs and is renowned for its academic excellence and research contributions.",
    established: 1961,
    type: "Public",
    courses: [
      {
        id: "c4",
        name: "B.Tech Computer Science",
        duration: "4 Years",
        fees: 250000,
        eligibility: "JEE Advanced",
      },
      {
        id: "c5",
        name: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        fees: 250000,
        eligibility: "JEE Advanced",
      },
      {
        id: "c6",
        name: "M.Tech Data Science",
        duration: "2 Years",
        fees: 300000,
        eligibility: "GATE",
      },
    ],
    placements: {
      averagePackage: 2800000,
      highestPackage: 15000000,
      placementRate: 96,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "McKinsey"],
    },
    reviews: [
      {
        id: "r3",
        author: "Amit Kumar",
        rating: 5,
        comment: "The best place for engineering education. The curriculum is constantly updated to match industry needs.",
        date: "2024-01-10",
        course: "B.Tech Computer Science",
      },
      {
        id: "r4",
        author: "Sneha Gupta",
        rating: 5,
        comment: "Amazing research facilities and professors who are experts in their fields.",
        date: "2024-03-05",
        course: "M.Tech Data Science",
      },
    ],
    admission: {
      process: [
        "Appear for JEE Advanced exam",
        "Qualify with required rank",
        "Register for JoSAA counseling",
        "Choose IIT Delhi as preference",
        "Complete admission formalities",
      ],
      requirements: [
        "75% aggregate in 12th board exams",
        "Qualified JEE Advanced",
        "Valid rank in merit list",
      ],
      deadlines: "June 30, 2025",
      entranceExams: ["JEE Advanced", "JEE Main"],
    },
  },
  {
    id: "3",
    name: "National Institute of Technology, Trichy",
    location: "Tiruchirappalli, Tamil Nadu",
    state: "Tamil Nadu",
    fees: {
      tuition: 150000,
      total: 200000,
    },
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
    ],
    description: "NIT Trichy is one of the premier NITs known for its strong academic programs and excellent placement record.",
    established: 1964,
    type: "Public",
    courses: [
      {
        id: "c7",
        name: "B.Tech Computer Science",
        duration: "4 Years",
        fees: 150000,
        eligibility: "JEE Main",
      },
      {
        id: "c8",
        name: "B.Tech Civil Engineering",
        duration: "4 Years",
        fees: 150000,
        eligibility: "JEE Main",
      },
      {
        id: "c9",
        name: "M.Tech Structural Engineering",
        duration: "2 Years",
        fees: 180000,
        eligibility: "GATE",
      },
    ],
    placements: {
      averagePackage: 1800000,
      highestPackage: 8000000,
      placementRate: 92,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Amazon", "Zoho"],
    },
    reviews: [
      {
        id: "r5",
        author: "Karthik Rajan",
        rating: 4,
        comment: "Good college with decent placements. The campus is beautiful and well-maintained.",
        date: "2024-02-15",
        course: "B.Tech Computer Science",
      },
      {
        id: "r6",
        author: "Divya Lakshmi",
        rating: 5,
        comment: "Excellent faculty and great learning environment. The college focuses on overall development.",
        date: "2024-03-10",
        course: "B.Tech Civil Engineering",
      },
    ],
    admission: {
      process: [
        "Appear for JEE Main exam",
        "Qualify with required rank",
        "Register for CSAB counseling",
        "Choose NIT Trichy as preference",
        "Complete admission formalities",
      ],
      requirements: [
        "75% aggregate in 12th board exams",
        "Qualified JEE Main",
        "Valid rank in merit list",
      ],
      deadlines: "July 15, 2025",
      entranceExams: ["JEE Main"],
    },
  },
  {
    id: "4",
    name: "Birla Institute of Technology and Science, Pilani",
    location: "Pilani, Rajasthan",
    state: "Rajasthan",
    fees: {
      tuition: 400000,
      total: 500000,
    },
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1581362072978-14998d01fdaa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    ],
    description: "BITS Pilani is a deemed university known for its flexible curriculum and strong industry connections.",
    established: 1964,
    type: "Private",
    courses: [
      {
        id: "c10",
        name: "B.E. Computer Science",
        duration: "4 Years",
        fees: 400000,
        eligibility: "BITSAT",
      },
      {
        id: "c11",
        name: "B.E. Electronics",
        duration: "4 Years",
        fees: 400000,
        eligibility: "BITSAT",
      },
      {
        id: "c12",
        name: "M.E. Software Systems",
        duration: "2 Years",
        fees: 450000,
        eligibility: "BITSAT / GATE",
      },
    ],
    placements: {
      averagePackage: 2200000,
      highestPackage: 10000000,
      placementRate: 94,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Oracle", "Adobe"],
    },
    reviews: [
      {
        id: "r7",
        author: "Vikram Singh",
        rating: 5,
        comment: "The flexible curriculum allows students to explore different fields. Great campus life.",
        date: "2024-01-20",
        course: "B.E. Computer Science",
      },
      {
        id: "r8",
        author: "Ananya Reddy",
        rating: 4,
        comment: "Excellent placement opportunities and industry exposure. The college has a strong alumni network.",
        date: "2024-02-25",
        course: "B.E. Electronics",
      },
    ],
    admission: {
      process: [
        "Register for BITSAT exam",
        "Appear for the online test",
        "Apply for admission with BITSAT score",
        "Participate in counseling",
        "Complete admission formalities",
      ],
      requirements: [
        "75% aggregate in 12th board exams",
        "Qualified BITSAT",
        "Valid score in merit list",
      ],
      deadlines: "May 31, 2025",
      entranceExams: ["BITSAT"],
    },
  },
  {
    id: "5",
    name: "Delhi Technological University",
    location: "New Delhi, Delhi",
    state: "Delhi",
    fees: {
      tuition: 180000,
      total: 220000,
    },
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    ],
    description: "DTU is a premier technical university offering quality education in engineering and technology.",
    established: 1941,
    type: "Public",
    courses: [
      {
        id: "c13",
        name: "B.Tech Computer Science",
        duration: "4 Years",
        fees: 180000,
        eligibility: "JEE Main",
      },
      {
        id: "c14",
        name: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        fees: 180000,
        eligibility: "JEE Main",
      },
      {
        id: "c15",
        name: "M.Tech Computer Science",
        duration: "2 Years",
        fees: 200000,
        eligibility: "GATE",
      },
    ],
    placements: {
      averagePackage: 1600000,
      highestPackage: 7000000,
      placementRate: 90,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra"],
    },
    reviews: [
      {
        id: "r9",
        author: "Rohit Verma",
        rating: 4,
        comment: "Good college with affordable fees. The faculty is experienced and helpful.",
        date: "2024-01-25",
        course: "B.Tech Computer Science",
      },
      {
        id: "r10",
        author: "Pooja Mishra",
        rating: 4,
        comment: "Decent placement support and good infrastructure. The college is improving every year.",
        date: "2024-03-15",
        course: "B.Tech Mechanical Engineering",
      },
    ],
    admission: {
      process: [
        "Appear for JEE Main exam",
        "Qualify with required rank",
        "Register for DTU counseling",
        "Choose preferred branch",
        "Complete admission formalities",
      ],
      requirements: [
        "75% aggregate in 12th board exams",
        "Qualified JEE Main",
        "Valid rank in merit list",
      ],
      deadlines: "July 20, 2025",
      entranceExams: ["JEE Main"],
    },
  },
  {
    id: "6",
    name: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu",
    state: "Tamil Nadu",
    fees: {
      tuition: 350000,
      total: 450000,
    },
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    ],
    description: "VIT is a private university known for its modern infrastructure and international collaborations.",
    established: 1984,
    type: "Private",
    courses: [
      {
        id: "c16",
        name: "B.Tech Computer Science",
        duration: "4 Years",
        fees: 350000,
        eligibility: "VITEEE",
      },
      {
        id: "c17",
        name: "B.Tech Biotechnology",
        duration: "4 Years",
        fees: 350000,
        eligibility: "VITEEE",
      },
      {
        id: "c18",
        name: "M.Tech Biotechnology",
        duration: "2 Years",
        fees: 400000,
        eligibility: "VITEEE / GATE",
      },
    ],
    placements: {
      averagePackage: 1400000,
      highestPackage: 6000000,
      placementRate: 88,
      topRecruiters: ["Amazon", "Microsoft", "Zoho", "Cognizant", "Accenture"],
    },
    reviews: [
      {
        id: "r11",
        author: "Suresh Kumar",
        rating: 4,
        comment: "Modern campus with good facilities. The international exchange programs are a great opportunity.",
        date: "2024-02-01",
        course: "B.Tech Computer Science",
      },
      {
        id: "r12",
        author: "Meena Devi",
        rating: 4,
        comment: "Good placement support and industry connections. The college focuses on practical learning.",
        date: "2024-03-20",
        course: "B.Tech Biotechnology",
      },
    ],
    admission: {
      process: [
        "Register for VITEEE exam",
        "Appear for the online test",
        "Apply for admission with VITEEE score",
        "Participate in counseling",
        "Complete admission formalities",
      ],
      requirements: [
        "60% aggregate in 12th board exams",
        "Qualified VITEEE",
        "Valid score in merit list",
      ],
      deadlines: "April 30, 2025",
      entranceExams: ["VITEEE"],
    },
  },
  {
    id: "7",
    name: "Indian Institute of Technology, Madras",
    location: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    fees: {
      tuition: 250000,
      total: 300000,
    },
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop",
    ],
    description: "IIT Madras is a premier engineering institution known for its research excellence and beautiful campus.",
    established: 1959,
    type: "Public",
    courses: [
      {
        id: "c19",
        name: "B.Tech Computer Science",
        duration: "4 Years",
        fees: 250000,
        eligibility: "JEE Advanced",
      },
      {
        id: "c20",
        name: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        fees: 250000,
        eligibility: "JEE Advanced",
      },
      {
        id: "c21",
        name: "M.Tech Computer Science",
        duration: "2 Years",
        fees: 300000,
        eligibility: "GATE",
      },
    ],
    placements: {
      averagePackage: 2400000,
      highestPackage: 11000000,
      placementRate: 94,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Flipkart", "Oracle"],
    },
    reviews: [
      {
        id: "r13",
        author: "Suresh Kumar",
        rating: 5,
        comment: "Excellent research facilities and beautiful campus. The faculty is very supportive.",
        date: "2024-01-18",
        course: "B.Tech Computer Science",
      },
      {
        id: "r14",
        author: "Lakshmi Priya",
        rating: 4,
        comment: "Great placement support and industry connections. The campus environment is conducive to learning.",
        date: "2024-02-28",
        course: "B.Tech Mechanical Engineering",
      },
    ],
    admission: {
      process: [
        "Appear for JEE Advanced exam",
        "Qualify with required rank",
        "Register for JoSAA counseling",
        "Choose IIT Madras as preference",
        "Complete admission formalities",
      ],
      requirements: [
        "75% aggregate in 12th board exams",
        "Qualified JEE Advanced",
        "Valid rank in merit list",
      ],
      deadlines: "June 30, 2025",
      entranceExams: ["JEE Advanced", "JEE Main"],
    },
  },
  {
    id: "8",
    name: "Indian Institute of Technology, Kharagpur",
    location: "Kharagpur, West Bengal",
    state: "West Bengal",
    fees: {
      tuition: 250000,
      total: 300000,
    },
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
    ],
    description: "IIT Kharagpur is the oldest IIT known for its strong engineering programs and vast campus.",
    established: 1951,
    type: "Public",
    courses: [
      {
        id: "c22",
        name: "B.Tech Computer Science",
        duration: "4 Years",
        fees: 250000,
        eligibility: "JEE Advanced",
      },
      {
        id: "c23",
        name: "B.Tech Electrical Engineering",
        duration: "4 Years",
        fees: 250000,
        eligibility: "JEE Advanced",
      },
      {
        id: "c24",
        name: "M.Tech Artificial Intelligence",
        duration: "2 Years",
        fees: 300000,
        eligibility: "GATE",
      },
    ],
    placements: {
      averagePackage: 2300000,
      highestPackage: 10000000,
      placementRate: 93,
      topRecruiters: ["Google", "Microsoft", "Amazon", "IBM", "Samsung"],
    },
    reviews: [
      {
        id: "r15",
        author: "Rajesh Kumar",
        rating: 5,
        comment: "The oldest IIT with excellent infrastructure and research facilities. Great alumni network.",
        date: "2024-01-22",
        course: "B.Tech Computer Science",
      },
      {
        id: "r16",
        author: "Anita Singh",
        rating: 4,
        comment: "Strong academic curriculum and good placement support. The campus is huge and beautiful.",
        date: "2024-03-01",
        course: "B.Tech Electrical Engineering",
      },
    ],
    admission: {
      process: [
        "Appear for JEE Advanced exam",
        "Qualify with required rank",
        "Register for JoSAA counseling",
        "Choose IIT Kharagpur as preference",
        "Complete admission formalities",
      ],
      requirements: [
        "75% aggregate in 12th board exams",
        "Qualified JEE Advanced",
        "Valid rank in merit list",
      ],
      deadlines: "June 30, 2025",
      entranceExams: ["JEE Advanced", "JEE Main"],
    },
  },
  {
    id: "9",
    name: "Anna University",
    location: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    fees: {
      tuition: 100000,
      total: 150000,
    },
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    ],
    description: "Anna University is a premier technical university in Tamil Nadu known for its quality education and research.",
    established: 1978,
    type: "Public",
    courses: [
      {
        id: "c25",
        name: "B.Tech Computer Science",
        duration: "4 Years",
        fees: 100000,
        eligibility: "TNEA",
      },
      {
        id: "c26",
        name: "B.Tech Civil Engineering",
        duration: "4 Years",
        fees: 100000,
        eligibility: "TNEA",
      },
      {
        id: "c27",
        name: "M.Tech Computer Science",
        duration: "2 Years",
        fees: 120000,
        eligibility: "TANCET",
      },
    ],
    placements: {
      averagePackage: 1200000,
      highestPackage: 5000000,
      placementRate: 85,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Zoho"],
    },
    reviews: [
      {
        id: "r17",
        author: "Karthik S",
        rating: 4,
        comment: "Good college with affordable fees. The faculty is experienced and the curriculum is practical.",
        date: "2024-02-05",
        course: "B.Tech Computer Science",
      },
      {
        id: "r18",
        author: "Divya R",
        rating: 4,
        comment: "Decent placement support and good infrastructure. The college has strong industry connections.",
        date: "2024-03-12",
        course: "B.Tech Civil Engineering",
      },
    ],
    admission: {
      process: [
        "Apply through TNEA counseling",
        "Submit required documents",
        "Choose Anna University as preference",
        "Attend counseling session",
        "Complete admission formalities",
      ],
      requirements: [
        "50% aggregate in 12th board exams",
        "Valid TNEA rank",
        "Tamil Nadu domicile or other eligibility",
      ],
      deadlines: "August 15, 2025",
      entranceExams: ["TNEA", "TANCET"],
    },
  },
  {
    id: "10",
    name: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    fees: {
      tuition: 300000,
      total: 400000,
    },
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
    ],
    description: "SRM University is a private institution known for its modern infrastructure and international collaborations.",
    established: 2002,
    type: "Private",
    courses: [
      {
        id: "c28",
        name: "B.Tech Computer Science",
        duration: "4 Years",
        fees: 300000,
        eligibility: "SRMJEEE",
      },
      {
        id: "c29",
        name: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        fees: 300000,
        eligibility: "SRMJEEE",
      },
      {
        id: "c30",
        name: "M.Tech Computer Science",
        duration: "2 Years",
        fees: 350000,
        eligibility: "SRMJEEE / GATE",
      },
    ],
    placements: {
      averagePackage: 1300000,
      highestPackage: 5500000,
      placementRate: 86,
      topRecruiters: ["Amazon", "Microsoft", "Zoho", "Cognizant", "Infosys"],
    },
    reviews: [
      {
        id: "r19",
        author: "Vikram R",
        rating: 4,
        comment: "Modern campus with excellent facilities. The international exposure is great.",
        date: "2024-02-10",
        course: "B.Tech Computer Science",
      },
      {
        id: "r20",
        author: "Priya S",
        rating: 4,
        comment: "Good placement support and industry connections. The college focuses on practical skills.",
        date: "2024-03-18",
        course: "B.Tech Mechanical Engineering",
      },
    ],
    admission: {
      process: [
        "Register for SRMJEEE exam",
        "Appear for the online test",
        "Apply for admission with SRMJEEE score",
        "Participate in counseling",
        "Complete admission formalities",
      ],
      requirements: [
        "60% aggregate in 12th board exams",
        "Qualified SRMJEEE",
        "Valid score in merit list",
      ],
      deadlines: "May 15, 2025",
      entranceExams: ["SRMJEEE"],
    },
  },
];

export const discussions = [
  {
    id: "d1",
    collegeId: "1",
    author: "Rajesh Kumar",
    question: "What is the hostel accommodation like at IIT Bombay?",
    answers: [
      {
        id: "a1",
        author: "Amit Singh",
        content: "The hostel facilities are excellent. Each room has basic amenities and there are common areas for recreation. The mess food is decent and there are multiple food options on campus.",
        date: "2024-03-10",
        likes: 45,
      },
    ],
    date: "2024-03-05",
    likes: 32,
  },
  {
    id: "d2",
    collegeId: "2",
    author: "Sneha Patel",
    question: "How difficult is it to get into IIT Delhi for Computer Science?",
    answers: [
      {
        id: "a2",
        author: "Vikram Sharma",
        content: "It's extremely competitive. You need a rank under 100 in JEE Advanced for CS at IIT Delhi. Consistent preparation over 2 years is essential.",
        date: "2024-03-12",
        likes: 67,
      },
    ],
    date: "2024-03-08",
    likes: 54,
  },
  {
    id: "d3",
    collegeId: "3",
    author: "Priya Nair",
    question: "What are the research opportunities at NIT Trichy?",
    answers: [
      {
        id: "a3",
        author: "Karthik R",
        content: "NIT Trichy has good research facilities. You can work with professors on various projects. There are also opportunities for summer internships and research publications.",
        date: "2024-03-15",
        likes: 38,
      },
    ],
    date: "2024-03-12",
    likes: 29,
  },
];
