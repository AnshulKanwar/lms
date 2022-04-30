const Layout = ({ title, children }) => {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-5 sm:px-20">
        {title && <h1 className="text-3xl font-semibold mb-10">{title}</h1>}
        {children}
    </div>
  );
};

export default Layout;
