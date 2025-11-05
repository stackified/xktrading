# XK Trading Floor

A comprehensive trading education and community platform built with React, featuring academy courses, broker reviews, blogs, podcasts, and merchandise.

## 🚀 Overview

XK Trading Floor is a modern web application designed to empower traders through education, data, and community. The platform provides a complete ecosystem for traders to learn, review trading companies, access educational resources, and connect with a supportive trading community.

### Key Features

- **🏠 Home Page**: Engaging hero section, community information, and "How It Works" guide
- **🎓 Academy**: Expert-led programs, live workshops, strategy sessions, and trading bootcamps
- **📝 Blog**: Educational articles covering trading strategies, psychology, risk management, and more
- **⭐ Reviews**: Comprehensive review system for brokers, prop firms, and crypto exchanges
- **🎙️ Podcasts**: Trading insights and educational content in audio format
- **🛍️ Merchandise**: E-commerce functionality for trading-related products
- **👤 User Dashboards**: Personalized dashboards for users, operators, and admins
- **🔐 Authentication**: Secure user registration, login, and role-based access control
- **📊 Analytics**: Dashboard with charts and analytics for admins and operators

## 🛠️ Tech Stack

### Core Technologies

- **React 18.3.1** - UI library
- **Vite 5.4.10** - Build tool and dev server
- **React Router DOM 6.26.2** - Client-side routing
- **Redux Toolkit 2.2.7** - State management
- **React Redux 9.1.2** - React bindings for Redux

### Styling & UI

- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **Framer Motion 11.2.13** - Animation library
- **Lucide React 0.474.0** - Icon library
- **@heroicons/react 2.1.5** - Additional icons

### Additional Libraries

- **Axios 1.7.7** - HTTP client
- **Recharts 2.15.4** - Chart library for analytics
- **React Helmet Async 2.0.5** - SEO and document head management

## 📁 Project Structure

```
xktrading/
├── public/
│   └── assets/              # Static assets (images, logos, etc.)
│       ├── blogs/           # Blog post images
│       ├── events/          # Event images
│       ├── leadership/      # Team member photos
│       ├── merch/           # Product images
│       ├── podcasts/        # Podcast episode images
│       └── users/           # User avatars
├── src/
│   ├── components/          # Reusable React components
│   │   ├── academy/        # Academy-related components
│   │   ├── blog/           # Blog components
│   │   ├── dashboard/      # Dashboard components
│   │   ├── home/           # Home page components
│   │   ├── merch/          # Merchandise components
│   │   ├── reviews/        # Review system components
│   │   ├── shared/         # Shared/common components
│   │   └── ui/             # UI components
│   ├── controllers/        # API controllers and business logic
│   ├── models/             # Data models and mock data
│   ├── pages/              # Page components
│   ├── redux/              # Redux store and slices
│   │   └── slices/         # Redux slices (auth, cart, analytics)
│   ├── routes/             # Routing configuration
│   ├── styles/             # Global styles
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main App component
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── postcss.config.js       # PostCSS configuration
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd xktrading
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified in `vite.config.js`).

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing (default port: 5173).

## 🎯 Features Breakdown

### Authentication System

- User registration and login
- Role-based access control (user, operator, admin)
- Cookie-based session management
- Protected routes for authenticated users

### Academy Section

- Event listings with filtering and search
- Event registration modal
- Free resources section
- Podcast integration
- Educational content management

### Review System

- Company listings (brokers, prop firms, crypto exchanges)
- Filtering by type, rating, and status
- Pagination for large datasets
- Review submission and moderation
- Company detail pages with reviews
- Operator dashboard for managing companies

### Blog System

- Blog post listings with categories
- Search functionality
- Individual blog post pages
- Author information
- Related posts

### Merchandise

- Product catalog with filtering
- Shopping cart functionality (Redux managed)
- Product detail pages
- Cart sidebar component

### Dashboards

- **User Dashboard**: Personal analytics and activity
- **Operator Dashboard**: Company and review management
- **Admin Dashboard**: Full platform administration
- Analytics charts and widgets
- Recent activity tracking
- Quick actions panel

## 🎨 Styling & Design

The application uses a dark theme with a modern, professional design:

- **Primary Color**: `#2B6EF2` (Blue)
- **Background**: `#0B0F19` (Dark blue-black)
- **Card Background**: `#0E1422`
- **Typography**: Inter and Poppins fonts

Custom Tailwind configuration extends the default theme with project-specific colors and utilities.

## 🔐 Environment Variables

Currently, the application uses client-side data management. For production deployment, you may want to configure:

- API endpoints
- Authentication service URLs
- Environment-specific configurations

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🧪 Development

### Key Development Features

- **Hot Module Replacement (HMR)**: Fast development with instant updates
- **React Fast Refresh**: Preserves component state during development
- **ESLint**: Code linting (if configured)
- **TypeScript Support**: Can be added if needed

### Code Organization

- **Component-based Architecture**: Modular, reusable components
- **Separation of Concerns**: Controllers, models, and views separated
- **Redux State Management**: Centralized state for auth, cart, and analytics
- **Custom Hooks**: Reusable logic extraction (where applicable)

## 🚀 Deployment

### Build Output

The `npm run build` command generates optimized static files in the `dist` directory, ready for deployment to:

- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: Cloudflare, AWS CloudFront
- **Traditional Servers**: Nginx, Apache

### Deployment Checklist

- [ ] Update API endpoints for production
- [ ] Configure environment variables
- [ ] Set up authentication backend
- [ ] Configure CORS if needed
- [ ] Set up analytics tracking
- [ ] Optimize images and assets
- [ ] Test all features in production environment

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🔧 Configuration Files

- **`vite.config.js`**: Vite build configuration
- **`tailwind.config.js`**: Tailwind CSS customization
- **`postcss.config.js`**: PostCSS configuration
- **`package.json`**: Project metadata and dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For support, please contact the development team or visit the contact page at `/contact`.

## 🔮 Future Enhancements

Potential features for future development:

- Real-time chat or Discord integration
- Advanced trading tools and calculators
- Mobile app version
- Enhanced analytics and reporting
- Integration with trading APIs
- Payment gateway integration for merchandise
- Email notifications system
- Advanced search and filtering

---

**Built with ❤️ by Stackified.**
