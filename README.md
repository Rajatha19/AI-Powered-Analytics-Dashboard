## AI-Powered Analytics Dashboard
A modern, responsive, and feature-rich analytics dashboard built with Next.js 14+ App Router. The dashboard provides AI-assisted digital marketing insights with:

Real-time updating metrics

Interactive charts (line, bar, pie)

Advanced data tables with sorting, pagination, and export (CSV/PDF)

Date range filtering

Dark/light mode toggle with smooth theme transitions

Loading skeletons for a polished UX

Setup Instructions
Prerequisites
Node.js v18 or higher

npm or yarn package managers

Git installed for cloning and version control

```bash
# Clone the Repository
git clone https://github.com/Rajatha19/AI-Powered-Analytics-Dashboard.git
cd AI-Powered-Analytics-Dashboard

# Install Dependencies
npm install
# or
yarn install

# Run in Development Mode
npm run dev
# or
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Deployment
The project is optimized for deployment on Vercel:

Push your repo to GitHub.

Import into Vercel.

Automatic builds and deployments on push.

vercel : https://vercel.com/rajathas-projects-5b06626f/ai-powered-analytics-dashboard/EBa6WpdetGFi1qFso3kKCtj5HLHZ

Feature Overview
Real-time Updates: Metrics refresh automatically every 4 seconds, simulating live data changes using React state and effects.

Interactive Charts: Line, bar, and pie charts built with Recharts allow intuitive data visualization and comparison.

Advanced Data Table: Powered by @tanstack/react-table with sorting, pagination, and comprehensive export functionality (CSV and PDF).

Date Range Filtering: Enables users to filter chart and table data dynamically based on selected date intervals using react-date-range.

Dark/Light Mode Support: Seamless toggle with next-themes package, implementing theme persistence and SSR-safe hydration.

Loading Skeletons: Smooth animated skeleton components using Framer Motion enhance perceived performance during data fetching.

Clean Code Architecture: Modular components, TypeScript typings, and maintainable structure for easy scalability.

