import * as React from "react";
import {
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import {BoxLink} from "../components/navbar/styles"

interface CustomLinkProps extends LinkProps {
  color: string;
}

function CustomLink({ children, to, ...props }: CustomLinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <BoxLink
          style={{ color: match ? props.color : "white" }}
          to={to}
          {...props}
        >
          {children}
        </BoxLink>
        {/* {match && " (active)"} */}
      </div>
    );
  }

export default CustomLink