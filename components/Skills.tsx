import ChartDoughnut from "./ChartDoughnut";

export default function Skills({ character }: any) {
  const skills = character.skills;

  return (
    <div className="flex gap-10">
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
          return (
            <ChartDoughnut
              key={skill}
              value={value as number}
              attribute={skill}
              skill={skill}
            />
          );
        }
      })}
    </div>
  );
}
