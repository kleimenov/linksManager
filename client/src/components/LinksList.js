import { Link } from "react-router-dom";
import React from "react";

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <h4>You don't have any links</h4>;
  }
  return (
    <div>
      Hello
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Original link</th>
            <th scope="col">Cut version</th>
            <th scope="col">Open</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link, i) => {
            return (
              <tr key={link._id}>
                <th scope="row">{i + 1}</th>
                <td scope="row">{link.from}</td>
                <td scope="row">{link.to}</td>
                <td>
                  <Link to={`/details/${link._id}`}>Open</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
