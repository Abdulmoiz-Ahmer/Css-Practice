export const SvgLoader = ({ id, ...props }) => {
  return (
    <svg {...props}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
};
