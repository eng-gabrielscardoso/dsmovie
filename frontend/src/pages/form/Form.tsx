import React from "react";
import { useParams } from "react-router-dom";

import FormCard from "components/form-card/FormCard";

function Form() {
  const params = useParams();

  return <FormCard movieId={`${params.movieId}`} />;
}

export default Form;
