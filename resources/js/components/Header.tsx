import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { logout } from '@/routes';
import { Link, router } from '@inertiajs/react';
import { LogOut, Skull } from 'lucide-react';

export default function Header() {
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center overflow-x-hidden">
                {/* Logo */}
                <h1 className="text-xl font-bold text-gray-800 flex gap-2">
                    CaveiraTech <Skull />
                </h1>

                {/* Navegação */}
                <nav className="flex space-x-6">
                    <Link href="/home" className="text-gray-700 hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="/produtos" className="text-gray-700 hover:text-blue-600">
                        Produtos
                    </Link>
                    <Link href="/contato" className="text-gray-700 hover:text-blue-600">
                        Contato
                    </Link>
                    <Link href="/sobre" className="text-gray-700 hover:text-blue-600">
                        Sobre
                    </Link>
                </nav>

                {/* Botão de usuário (opcional) */}
                <div className="flex gap-4 items-center">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 cursor-pointer">
                        Perfil
                    </button>
                    <Link
                        className="w-full text-black flex cursor-pointer"
                        href={logout()}
                        as="button"
                        onClick={handleLogout}
                        data-test="logout-button"
                    >
                        <LogOut className="mr-2" />
                        Sair
                    </Link>
                </div>
            </div>
        </header>
    );
}
