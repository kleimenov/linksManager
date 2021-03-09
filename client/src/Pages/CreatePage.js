import React, { useContext, useState } from "react";
import {useHistory} from 'react-router-dom';
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";


export const CreatePage = () => {
  useHistory();

  const { request } = useHttp();
  const auth = useContext(AuthContext);

  const [link, setLink] = useState("");

  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          { Authorization: `Bearer ${auth.token}` }
        );
        console.log(data);
      } catch (e) {}
    }
  };

  return (
    <div>
      <h3>Create page</h3>
      <div>
        <input
          id="link"
          type="text"
          value={link}
          placeholder="Enter link"
          onChange={(e) => setLink(e.target.value)}
          onKeyPress={pressHandler}
        />
      </div>
    </div>
  );
};
