import { TenderCard } from "../ui/tender";

const MainLayout = () => {
  return (
    <div className="MainLayoutContainer bg-gray-100 min-h-screen ">
      <h1> MainLayout</h1>
      <h1> MainLayout</h1>
      <h1> MainLayout</h1>
      <h1> MainLayout</h1>
      <div className="tenderPage bg-gray-50 w-[90%] m-auto p-3 border border-gray-100 shadow rounded ">
        <h1>tender page </h1>
        <h1>tender page </h1>
        <h1>tender page </h1>

        <TenderCard />
      </div>
    </div>
  );
};

export default MainLayout;
