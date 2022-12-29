import { useState } from "react";

export default function useUpdate() {
  const [_, setState] = useState<object>({});
  const update = () => {
    setState({});
  };
  return update;
}
