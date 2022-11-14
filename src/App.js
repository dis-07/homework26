import { useState } from "react";

import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {

  const [isOpenedAlert, setOpenedAlert] = useState(false);

  const handleOpen = () => setOpenedAlert(true);

  const handleClose = () => setOpenedAlert(false);

  return (
    <>
      <Button color="primary">Primary button</Button>
      <br/>
      <br/>
      <Button color="primary" size="large">Primary large button</Button>
      <br/>
      <br/>
      <Button color="secondary">Secondary button</Button>
      <br/>
      <br/>
      <Button color="primary" size='medium' disabled>Disabled button</Button>
      <br/>
      <br/>
      <Button color='secondary' size='large' onOpen={handleOpen}>Open alert</Button>

      {isOpenedAlert && <Alert color="primary" onClose={handleClose}>Some text</Alert>}
    </>
  );
}

export default App;
