import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabinSection from "../features/cabins/AddCabin";
import CabinsOperations from "../features/cabins/CabinsOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinsOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabinSection />
      </Row>
    </>
  );
}

export default Cabins;
