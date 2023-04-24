import React from "react";
import { Link } from "react-router-dom";
const LevelTeam = () => {
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Level Team</h2>

          <div className="accordion" id="accordionExample">
            <AccordionItem number="1" />
            <AccordionItem number="2" />
            <AccordionItem number="3" />
            <AccordionItem number="4" />
            <AccordionItem number="5" />
            <AccordionItem number="6" />
            <AccordionItem number="7" />
            <AccordionItem number="8" />
            <AccordionItem number="9" />
            <AccordionItem number="10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelTeam;

const AccordionItem = (val) => {
  return (
    <>
      <div className="accordion-item bg-transparent my-4">
        <h2 className="accordion-header " id={`heading${val.number}`}>
          <button
            className="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${val.number}`}
            aria-expanded="false"
            aria-controls={`collapse${val.number}`}
          >
            Level {`${val.number}`}
          </button>
        </h2>
        <div
          id={`collapse${val.number}`}
          className="accordion-collapse collapse   "
          aria-labelledby={`heading${val.number}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body ">
            <LevelTable Level={val.number} />
          </div>
        </div>
      </div>
    </>
  );
};

const LevelTable = () => {
  return (
    <>
      <table className="table table-striped text-light">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sponcer Id</th>
            <th scope="col">Name</th>
            <th scope="col">User Id</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row px-0 mx-0" className="text-white">
              1
            </th>
            <td className="text-white">548</td>
            <td className="text-white">Sachin</td>
            <td className="text-white">TR54</td>
            <td className="text-white">Active</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
