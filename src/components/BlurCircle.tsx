type Props = {
  width?: "default";
  color: "blue" | "orange" | "purple" | "yellow";
  x: number;
  y: number;
}

export default function BlurCircle(
  { width = "default", color, x, y }: Props
) {
  const sizeValues = {
    small: 'size-[100px]',
    default: 'size-[390px]',
  }

  const colorValues = {
    blue: 'bg-[rgba(216,200,255,0.5)]',
    orange: 'bg-[rgba(220,146,147,0.5)]',
    purple: 'bg-[rgba(216,146,220,0.5)]',
    yellow: 'bg-[rgba(220,214,146,0.5)]',
  }

  return (
    <>
      <div className={`absolute rounded-full ${sizeValues[width]} ${colorValues[color]} blur-[150px]`} style={{ top: `${y}px`, left: `${x}px` }}></div>
    </>
  )
}