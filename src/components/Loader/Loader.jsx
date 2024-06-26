import { LoaderDivWrapper } from "./Loader.styled";
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <LoaderDivWrapper>
      <RotatingLines
        strokeColor="#606c38"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderDivWrapper>
  );
}
