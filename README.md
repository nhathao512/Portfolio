# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

![Portfolio Screenshot](./public/assets/readme.png)

## 🚀 Features

- **Modern UI/UX**: Glassmorphism design with blue theme
- **Responsive**: Works on all devices
- **Fast**: Built with Vite for optimal performance
- **Type-safe**: ESLint configuration for code quality
- **Formatted**: Prettier for consistent code style
- **CI/CD**: Automated linting and formatting checks

## 📦 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React, React Icons
- **Code Quality**: ESLint + Prettier

## 🛠️ Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🔄 CI/CD Pipeline

This project uses GitHub Actions for automated code quality checks:

- **Linting**: ESLint checks on every push/PR
- **Formatting**: Prettier format validation
- **Build**: Ensures project builds successfully

### Workflow Triggers

- Push to `main` or `master` branch
- Pull requests to `main` or `master` branch

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure build settings
4. Deploy!

**Build Settings:**

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Environment Variables

No environment variables required for basic deployment.

## 📝 Code Quality

### ESLint Configuration

- React best practices
- React Hooks rules
- Prettier integration
- Custom rules for code consistency

### Prettier Configuration

- 2 spaces indentation
- Semicolons enabled
- Double quotes for strings
- Tailwind CSS class sorting

## 🎨 Color Scheme

The portfolio uses a professional blue/cyan color scheme:

- Primary: `blue-400`, `blue-500`
- Light: `blue-300`
- Accents: `sky-400`

## 📄 License

MIT

## 👤 Author

**Võ Nhật Hào**

- Email: vonhathao.it@gmail.com
- GitHub: [@nhathao512](https://github.com/nhathao512)
