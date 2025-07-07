const Orbits = ({
  children,
  count,
}: {
  children: React.ReactNode;
  count: number;
}): React.ReactElement => {
  if (count <= 0) {
    return <>{children}</>;
  }
  return <div className="orbit">{Orbits({ children, count: count - 1 })}</div>;
};
export default Orbits;
