import { Header } from "../../components";
import { UserContextProvider } from "../../core/UserContext";
import { AlertProvider } from "../../core/AlertContext";

interface Props {
  authorized: boolean;
}

const Layout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  authorized,
}) => {
  // prefixed components
  // pages asynchronous

  const SidebarMock = <h3>Sidebar should load when user is authorized.</h3>;
  return (
    <>
      <UserContextProvider>
        <AlertProvider>
          {/* Header */}
          {!authorized ? <Header title="Web Application" /> : SidebarMock}
          {/* Main Content */}
          {children}
          {/* Footer */}
        </AlertProvider>
      </UserContextProvider>
    </>
  );
};

export default Layout;
