import { Skull } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white text-center py-6">
            <p className="flex gap-2 justify-center">
                © {new Date().getFullYear()} CaveiraTech <Skull />. Todos os direitos reservados.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="hover:text-blue-400">
                    Facebook
                </a>
                <a href="#" className="hover:text-blue-400">
                    Instagram
                </a>
                <a href="#" className="hover:text-blue-400">
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}
