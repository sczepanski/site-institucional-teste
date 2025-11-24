import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { Link, router } from '@inertiajs/react';

export default function Header() {
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };
    return (
        <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-sm z-5 shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center overflow-x-hidden">
                {/* Logo */}
                <h1 className="text-xl font-bold text-slate-50 flex gap-2">Costurart</h1>

                {/* Navegação */}
                <nav className="flex space-x-6 font-sora">
                    <Link href="/home" className="text-slate-50 hover:text-blue-600 transition">
                        HOME
                    </Link>
                    <Link href="/produtos" className="text-slate-50 hover:text-blue-600 transition">
                        PRODUTOS
                    </Link>
                    <Link href="/sobre" className="text-slate-50 hover:text-blue-600 transition">
                        SOBRE
                    </Link>
                    <Link href="/contato" className="text-slate-50 hover:text-blue-600 transition">
                        CONTATO
                    </Link>
                </nav>

                {/* Botão de usuário (opcional) */}
                {/* <div className="flex gap-4 items-center">
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
                </div> */}
                <div></div>
            </div>
        </header>
    );
}
