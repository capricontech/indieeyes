# Layout Components

This directory contains components that make up the layout structure of the application.

## Key Components

- **TopBar.tsx**: Top navigation bar with location and contact information.
  - Located at the very top of every page
  - Contains contact information and location details

- **NavBar.tsx**: Main navigation component with links to different sections.
  - Primary navigation for the application
  - Contains links to categories, search, and user account

- **Footer.tsx**: Footer component with links, social media, and additional information.
  - Contains links to various pages, social media icons, and newsletter signup
  - Displays copyright and legal information

- **BottomBar.tsx**: Simple bottom bar with copyright information.
  - Displays copyright notice at the bottom of every page

## Usage

These components are typically included in layout files and used across multiple pages:

```tsx
// Example usage in a layout file
import TopBar from '../components/layout/TopBar';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import BottomBar from '../components/layout/BottomBar';

export default function SomeLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BottomBar />
    </div>
  );
}
```

## Best Practices

1. **Consistency**: 
   - Maintain consistent styling and behavior across layout components
   - Ensure responsive design for all layout elements

2. **Performance**:
   - Minimize unnecessary rerenders
   - Keep layout components lightweight

3. **Accessibility**:
   - Ensure navigation is keyboard accessible
   - Use proper semantic HTML elements
   - Include appropriate ARIA attributes 