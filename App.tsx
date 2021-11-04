import "./App.css";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells
} from "@jsonforms/material-renderers";
import React, { useState } from "react";
import carSchema from "./CarSchema.json";

const FormFields = () => {
  const [currentState, setState] = useState({});

  return (
    <div>
      <JsonForms
        schema={carSchema}
        // uischema={uischema}
        data={currentState}
        onChange={({ data }) => setState(data)}
        renderers={materialRenderers}
        cells={materialCells}
      />
    </div>
  );
};

export default FormFields;
