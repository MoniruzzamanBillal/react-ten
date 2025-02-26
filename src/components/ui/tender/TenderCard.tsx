import { Button } from "../button";
import { Card, CardContent, CardHeader } from "../card";

const TenderCard = () => {
  return (
    <div className="TenderCardContainer">
      <Card className=" w-[70%] bg-gray-100  ">
        <CardHeader className=" text-2xl font-semibold  ">title</CardHeader>

        <CardContent className="tenderBody  w-[75%] text-lg flex flex-col gap-y-3  ">
          {/* tender id  */}
          <div className="tenderId  flex justify-between items-center ">
            <p>Tender Id: </p>
            <p>22105555</p>
          </div>

          {/* publish date  */}
          <div className="publishDate  flex justify-between items-center">
            <p>Published On: </p>
            <p>January 22 , 2024</p>
          </div>

          {/* detail button  */}
          <div className="btnSection">
            <Button>Detail</Button>
          </div>

          {/*  */}
        </CardContent>
      </Card>
    </div>
  );
};

export default TenderCard;
