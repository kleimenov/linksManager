import React, { useState } from "react";
import {useHttp} from '../hooks/http.hook'

export const LinksPage = () => {
  const [links, setLinks] = useState([]);
  const {loading, request} = useHttp();
  return (
    <div>
      <h3>Links page</h3>
    </div>
  );
};
