import { useQuery } from "react-query";

import { requestGetRegisteredMarkerAPI } from "./mapApi";

const useRegisteredMarker = ({ nickname }) => {
  return useQuery(
    ["registered_marker", nickname],
    () => requestGetRegisteredMarkerAPI({ nickname }),
    {
      staleTime: 1000 * 20,
    }
  );
};

export { useRegisteredMarker };
