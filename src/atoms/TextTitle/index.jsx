export default function TextTitle({ title }) {
  return (
    <div>
      <h1 className="text-4xl text-purple font-semibold text-center">
        {title}
        <span className="text-orange">.</span>
      </h1>
    </div>
  );
}
