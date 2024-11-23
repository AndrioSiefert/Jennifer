'use client';

import Footer from '@/componentes/footer';
import MenuBar from '@/componentes/menubar';
import ComponentLogin from '@/componentes/ComponentLogin';

const Login = () => {
    return (
        <main>
            <MenuBar showButtons={false} />
            <ComponentLogin />
            <Footer />
        </main>
    );
};

export default Login;
