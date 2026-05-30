# Campus Search - College Discovery Platform

A modern, responsive web application built with Next.js, React, and Tailwind CSS that helps students search, compare, and discover colleges across India.

## Features

- **College Search**: Search colleges by name, location, or courses with powerful filters
- **Detailed Information**: View comprehensive details about colleges including courses, placements, and reviews
- **Comparison Tool**: Compare up to 3 colleges side by side to make informed decisions
- **Discussion Forum**: Q&A platform where students can ask questions and share experiences
- **Modern UI**: Beautiful, responsive design with smooth animations using Framer Motion
- **Mobile Friendly**: Fully responsive design that works on all devices

## Tech Stack

- **Frontend Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── college/[id]/      # College details page
│   │   ├── compare/           # Comparison page
│   │   ├── discussions/       # Discussion forum
│   │   ├── about/             # About page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── CollegeCard.tsx    # College card component
│   │   └── SearchFilter.tsx   # Search and filter component
│   ├── data/                  # Mock data
│   │   └── colleges.ts        # College data structure
│   └── lib/                   # Utility functions
│       ├── utils.ts           # Helper functions
│       └── googlePlaces.ts    # Google Places API integration
├── public/                    # Static assets
└── package.json
```

## Google Places API Integration

The application includes structure for integrating with Google Places API to fetch real college data:

1. Create a `.env.local` file in the frontend directory
2. Add your Google Places API key:
```
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here
```
3. The API integration functions are available in `src/lib/googlePlaces.ts`

**Note**: The application currently uses mock data. To use real data from Google Places API, uncomment and modify the relevant code sections.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features Overview

### Home Page
- Search colleges by name, location, or courses
- Filter by state, college type, rating, and fees
- Beautiful college cards with key information
- Responsive grid layout

### College Details Page
- Overview with college information
- Courses offered with duration and fees
- Placement statistics and top recruiters
- Student reviews and ratings
- Admission process and requirements
- Add to comparison functionality

### Comparison Page
- Side-by-side comparison of up to 3 colleges
- Compare ratings, fees, placements, and more
- Easy add/remove colleges
- Visual comparison table

### Discussion Forum
- Ask questions about colleges
- Read and answer questions
- Filter by college
- Search discussions

## Customization

### Adding More Colleges

Edit `src/data/colleges.ts` to add more colleges to the mock data:

```typescript
export const colleges: College[] = [
  {
    id: "unique-id",
    name: "College Name",
    location: "City, State",
    state: "State",
    fees: {
      tuition: 0,
      total: 0,
    },
    rating: 0,
    image: "image-url",
    description: "Description",
    established: 0,
    type: "Public/Private",
    courses: [],
    placements: {
      averagePackage: 0,
      highestPackage: 0,
      placementRate: 0,
      topRecruiters: [],
    },
    reviews: [],
    admission: {
      process: [],
      requirements: [],
      deadlines: "",
      entranceExams: [],
    },
  },
  // Add more colleges...
];
```

### Styling

The application uses Tailwind CSS for styling. Modify the theme in `tailwind.config.ts` to customize colors, fonts, and other design tokens.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the application and deploy the `.next` folder to any hosting platform that supports Node.js.

```bash
npm run build
npm start
```

## Future Enhancements

- Backend API integration for real-time data
- User authentication for personalized features
- Save favorite colleges
- Advanced analytics and insights
- Mobile app version
- Integration with admission portals
- College ranking system
- Scholarship information

## License

This project is open source and available for educational purposes.

## Support

For issues or questions, please open an issue on the repository.
