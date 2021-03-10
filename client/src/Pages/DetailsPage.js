import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import { LinkCard } from "../components/LinkCard";

export const DetailsPage = () => {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [link, setLink] = useState(null);
  const linkId = useParams().id;

  //console.log(linkId)

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLink(fetched);
    } catch (e) {}
  }, [token, linkId, request]);

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h3>Details page</h3>
      {!loading && link && <LinkCard link={link} />}
    </div>
  );
};
