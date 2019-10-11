import React, { useEffect, useState } from "react";
import Select from "react-select";
import { withRouter } from "react-router-dom";
import { lastUrlSegment } from "../lib/url-helper";
import FilmController from "../services/film-controller";

function Films(props) {
  const [films, setFilms] = useState(null);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await new FilmController().getFilms();
      setLoading(false);
      if (res && res.data) setFilms(res.data.results);
    };
    fetchData();
  }, []);

  const handleChange = value => {
    setSelected(value);
    props.history.push(`/film/${lastUrlSegment(value.value)}`);
  };

  return (
    <div className="m-auto w-1/2">
        <h2>Select Starwars Episode</h2>
        <Select
          isLoading={loading}
          value={selected}
          onChange={handleChange}
          options={
            films
              ? films.map((film, index) => {
                  return { value: film.url, label: film.title, id: index };
                })
              : []
          }
        />
      </div>
  );
}

export default withRouter(Films);
