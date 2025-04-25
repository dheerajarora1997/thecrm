import React from "react";
import Nodata from "../components/Nodata";

export default function Employee() {
  return (
    <div>
      <Nodata
        title="You Don't have permission to this feature"
        subTitle="Kindly Contact to you admin."
      />
    </div>
  );
}
