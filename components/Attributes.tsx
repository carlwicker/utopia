import ChartDoughnut from "./ChartDoughnut";

export default function Attributes({ character }: any) {
  const attributes = character.attributes;

  return (
    <div className="flex gap-10">
      {Object.entries(attributes).map(([attribute, value]) => (
        <ChartDoughnut
          key={attribute}
          value={value as number}
          attribute={attribute}
          skill={attribute}
        />
      ))}
    </div>
  );
}
