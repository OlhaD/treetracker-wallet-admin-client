import { CircularProgress } from "@mui/material";
import { LoaderGrid } from "./LoaderStyled";

export const Loader = () => {
  return (
    <LoaderGrid data-testid="loader-grid-component">
      <CircularProgress data-testid="circular-progress-component" />
    </LoaderGrid>
  );
};
