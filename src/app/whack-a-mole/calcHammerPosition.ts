type calcHammerPositionProps = {
  xPosition: number;
  yPosition: number;
  containerRef: React.RefObject<HTMLDivElement>;
  hammerRef: React.MutableRefObject<HTMLImageElement | null>;
  setX: React.Dispatch<React.SetStateAction<number | undefined>>;
  setY: React.Dispatch<React.SetStateAction<number | undefined>>;
};
export const calcHammerPosition = ({
  xPosition,
  yPosition,
  containerRef,
  hammerRef,
  setX,
  setY,
}: calcHammerPositionProps) => {
  if (!containerRef.current || !hammerRef.current) return;
  const hammerYPosition =
    yPosition - containerRef.current.offsetLeft - hammerRef.current.height / 2;
  const hammerXPosition =
    xPosition - containerRef.current.offsetLeft - hammerRef.current.width / 2;
  if (hammerYPosition < 0) {
    if (
      hammerXPosition < 0 ||
      hammerXPosition >
        containerRef.current.clientWidth - hammerRef.current.width
    )
      return;
    setX(hammerXPosition);
  } else if (hammerXPosition < 0) {
    if (
      hammerYPosition >
      containerRef.current.clientHeight - hammerRef.current.height
    )
      return;
    setY(hammerYPosition);
  } else if (
    hammerYPosition >
    containerRef.current.clientHeight - hammerRef.current.height
  ) {
    if (
      hammerXPosition >
      containerRef.current.clientWidth - hammerRef.current.width
    )
      return;
    setX(hammerXPosition);
  } else if (
    hammerXPosition >
    containerRef.current.clientWidth - hammerRef.current.width
  ) {
    setY(hammerYPosition);
  } else {
    setY(hammerYPosition);
    setX(hammerXPosition);
  }
};
