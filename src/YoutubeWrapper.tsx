import React from "react";
import DefaultExport from "react-youtube";

export const YouTubeWrapper: React.FC<React.PropsWithChildren> = () => {
  // @ts-ignore // Workaround -> detail: https://github.com/bfanger/svelte-preprocess-react/issues/40#issuecomment-2223557948
  let YouTube = DefaultExport.default || DefaultExport;
  return (
    <>
      <h2>Youtube video demo</h2>
      <YouTube videoId="uH6aRpwTEF0" />
    </>
  );
};
