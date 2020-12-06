import * as React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";

export interface FlexProps extends GridProps {
  autoWidth?: boolean;
}

const Flex: React.FC<FlexProps> = ({ autoWidth, ...otherProps }) => {
  return <Grid style={autoWidth ? { width: "auto" } : {}} container {...otherProps} />;
};

Flex.defaultProps = {
  autoWidth: true
};

export default Flex;
