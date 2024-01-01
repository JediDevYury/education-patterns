export type KelvinProps = {
  value: number
}
export function Kelvin({ value }: KelvinProps) {
  console.log(value)
  return (
   <div className="temp-card">
     The temperature in Kelvin is: <span className="temp">{value}K</span>
   </div>
  );
}
