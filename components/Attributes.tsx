import ChartDoughnut from "./ChartDoughnut";

export default function Attributes({ playerDetails }: any) {
  const attributes = playerDetails.attributes;

  return (
    <div className="grid grid-cols-3 gap-10">
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
