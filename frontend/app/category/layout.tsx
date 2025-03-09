import { Metadata } from 'next';
import TopBar from '../components/layout/TopBar';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import BottomBar from '../components/layout/BottomBar';

export const metadata: Metadata = {
    title: 'Categories | IndieEyes',
    description: 'Browse our collection of eyewear by category',
};

export default function CategoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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