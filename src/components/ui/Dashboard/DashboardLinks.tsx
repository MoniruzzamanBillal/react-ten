import { TDashboardLinks } from "@/types/globalTypes";
import { NavLink } from "react-router-dom";
import { CiBookmark, CiViewList } from "react-icons/ci";

const LinkItem = ({ link }: { link: TDashboardLinks }) => {
  return (
    <NavLink to={link.path}>
      <div className="linksContainer flex items-center gap-x-1  my-6 ">
        {link.icon}
        <p>{link.name}</p>
      </div>
    </NavLink>
  );
};

const DashboardLinks = () => {
  const links = [
    {
      name: "Home",
      path: "/",
      icon: <CiBookmark className="text-xl font-bold" />,
    },
    {
      name: "Manage Orders",
      path: "/dashboard/user/manage-order",
      icon: <CiViewList className=" text-xl font-bold " />,
    },
  ];

  return (
    <div>
      {links && links?.map((item) => <LinkItem key={item?.name} link={item} />)}
    </div>
  );
};

export default DashboardLinks;
