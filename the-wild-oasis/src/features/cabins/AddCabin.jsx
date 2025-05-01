import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

/* export default function AddCabin() {
  const [isShowForm, setShowForm] = useState(false);
  const open = () => setShowForm(true);
  const close = () => setShowForm(false);
  return (
    <div>
      <Button onClick={() => setShowForm((state) => !state)}>
        Add new Cabin
      </Button>
      {isShowForm && (
        <Modal close={close}>
          <CreateCabinForm onClose={close} />
        </Modal>
      )}
    </div>
  );
}
 */

export default function AddCabinSection() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}
