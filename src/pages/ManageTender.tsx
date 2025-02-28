import { Button } from "@/components/ui/button";

const ManageTender = () => {
  let content = null;
  return (
    <div className="ManageTenderContainer">
      <div className="manageTenderWrapper bg-gray-100 border border-gray-300  shadow rounded-md p-3 ">
        <Button
          onClick={() =>
            (window.location.href = "/dashboard/admin/manage-tender")
          }
          className="mb-4 bg-prime100 hover:bg-prime100 cursor-pointer"
        >
          Add New Tender
        </Button>

        {/* table starts  */}
        <div className=" flex justify-center items-center ">
          <table className="w-full">
            <thead>
              <tr>
                <th>Title </th>
                <th>description</th>
                <th>Budget Range</th>

                <th>Deadline</th>
                <th>Required Documents</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
        {/* table ends  */}
      </div>
    </div>
  );
};

export default ManageTender;
