import Sidebar from "./Sidebar";

const Layout = ({ title, children }) => {
  return (
    <div className="mt-20 px-5 sm:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-16 gap-y-16">
        <div>
          {title && <h1 className="text-3xl text-slate-500 font-bold mb-10">{title}</h1>}
          {children}
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
