import axios from "axios";
import React from "react";

const Bored = () => {
  const [activity, setActivity] = React.useState();
  const [type, setType] = React.useState();
  const [participants, setParticipants] = React.useState();

  React.useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await axios.get(`https://www.boredapi.com/api/activity`);
    setActivity(response.data.activity);
    setType(response.data.type);
    setParticipants(response.data.participants);
  }

  const newActivity = () => {
    getData();
  };

  return (
    <>
      <div className="container mx-0 px-0 mx-auto my-auto">
        <div className="row mx-0">
          <div className="text-center col-lg-4 col-md-6 col-10 m-auto my-5 px-0">
            <p className="jumbo mb-0">
              Bored <span className="question">?</span>
            </p>
            <p className="activity my-3">
              <span className="title">Activity </span>'{activity}'
            </p>
            <p className="type mb-3">
              <span className="title">Type </span>
              {type}
            </p>
            <p className="participants mb-0">
              <span className="title">Participants </span>
              {participants}
            </p>
            <button
              className="px-3 py-2 my-4 btnNext mx-auto"
              onClick={newActivity}
            >
              Next Activity
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bored;
