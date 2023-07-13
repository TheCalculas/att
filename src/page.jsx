import React from "react";
import { useState, useEffect } from "react";
import Doc from "./components/doc";
import Options from "./components/options";

function Page() {
  const [success, isSuccess] = useState();
  const fetchData = async () => {
    while (!success) {
      setTimeout(async () => {
        const response = await fetch(
          `http://localhost:5000/attacker/checkUpdate`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const resData = await response.json();
        if (response === 200) {
          isSuccess(resData.success);
          console.log(success);
        }
      }, 2000);
    }
  };

  useEffect(() => {
    if (!success) {
      fetchData();
    }
  }, [success]);
  return <>{!success ? <Doc /> : <Options />}</>;
}

export default Page;
