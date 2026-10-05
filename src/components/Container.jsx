export default function Container({ children, className = "", as: Component = "div" }) {
  return (
    <Component className={`mx-auto w-full max-w-[1100px] px-5 ${className}`.trim()}>
      {children}
    </Component>
  );
}
