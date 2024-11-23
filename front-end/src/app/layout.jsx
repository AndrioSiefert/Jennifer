import { LoginProvider } from '@/Context/LoginContext';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang='pt-br'>
            <body>
                <LoginProvider>{children}</LoginProvider>{' '}
            </body>
        </html>
    );
}
