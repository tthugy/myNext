import { Children } from "react/cjs/react.production.min";
import NavBar from "./NavBar";

export default function Layout( children ){
    return (
        <>
          <div>{children}</div>
        </>
    )
}