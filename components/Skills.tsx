import ChartDoughnut from "./ChartDoughnut";

export default function Skills({ playerDetails }: any) {
  const skills = playerDetails.skills;

  return (
    <div className="grid grid-cols-3 gap-10">
      {Object.entries(skills).map(([skill, value]) => {
        if (typeof value === "object") {
          return Object.entries(value as any).map(([subSkill, subValue]) => (
            <ChartDoughnut
              key={subSkill}
              value={subValue as number}
              attribute={subSkill}
              skill={subSkill}
            />
          ));
        } else {
          return <div key={skill}>{skill}</div>;
        }
      })}
    </div>
  );
}
