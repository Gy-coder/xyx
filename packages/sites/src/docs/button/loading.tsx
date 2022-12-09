import { Button } from "@g-ui/components";
import { useState } from "react";

const Basic = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);
  };

  return (
    <>
      <Button size="small" loading={true} onClick={handleClick}>
        Button
      </Button>
      <Button loading={loading} onClick={handleClick}>
        Button
      </Button>
      <Button size="large" loading={true} onClick={handleClick}>
        Button
      </Button>
      <br />
      <Button type="primary" loading={true} onClick={handleClick}>
        Button
      </Button>
      <Button type="success" loading={loading} onClick={handleClick}>
        Button
      </Button>
      <Button type="warning" loading={loading} onClick={handleClick}>
        Button
      </Button>
      <Button type="error" loading={loading} onClick={handleClick}>
        Button
      </Button>
    </>
  );
};

export default Basic;
