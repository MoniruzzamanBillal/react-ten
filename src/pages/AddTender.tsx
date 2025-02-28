import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const AddTender = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [requiredDocuments, setRequiredDocuments] = useState(null);

  // ! for adding new tender
  const handleAddTender = async (e) => {
    e.preventDefault();

    console.log(title);
    console.log(description);
    console.log(budget);
    console.log(deadline);
    console.log(requiredDocuments);
  };

  return (
    <div className="AddTenderContainer py-8 bg-gray-100 border border-gray-300 p-3 shadow rounded-md">
      <div className="addTenderWrapper">
        <h1 className="mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-bold text-2xl md:text-3xl text-center">
          Add Tender
        </h1>

        {/* add tender form  */}
        <div className="addTenderForm p-1 w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto ">
          <form onSubmit={handleAddTender} className="space-y-4">
            <Input
              name="title"
              placeholder="Tender Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Textarea
              name="description"
              placeholder="Tender Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Input
              type="number"
              name="budget"
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              onWheel={(e) => e.currentTarget.blur()}
              required
            />
            <Input
              type="date"
              name="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
            />
            <Input
              type="file"
              name="requiredDocuments"
              onChange={(e) => setRequiredDocuments(e?.target?.files[0])}
            />
            <Button type="submit" className="bg-prime100 hover:bg-prime200">
              Submit Tender
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTender;
